import { useEffect, useMemo, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabaseClient";
import { fallbackContent, type ContentMap, type MediaItemRow, type SiteContentRow } from "@/lib/siteData";

type State = {
  content: ContentMap;
  media: MediaItemRow[];
  loading: boolean;
};

export const usePublicSiteData = (): State => {
  const [state, setState] = useState<State>({
    content: fallbackContent,
    media: [],
    loading: true,
  });

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setState((prev) => ({ ...prev, loading: false }));
      return;
    }

    let mounted = true;

    const load = async () => {
      try {
        const [contentRes, mediaRes] = await Promise.all([
          supabase.from("site_content").select("*").order("display_order", { ascending: true }),
          supabase.from("media_items").select("*").order("display_order", { ascending: true }),
        ]);

        if (!mounted) return;

        const nextContent = { ...fallbackContent };
        if (!contentRes.error && contentRes.data) {
          (contentRes.data as SiteContentRow[]).forEach((row) => {
            if (row.key && row.value && row.is_visible !== false) {
              nextContent[row.key] = row.value;
            }
          });
        }

        const nextMedia =
          !mediaRes.error && mediaRes.data
            ? (mediaRes.data as MediaItemRow[]).filter((item) => item.is_visible !== false)
            : [];

        setState({ content: nextContent, media: nextMedia, loading: false });
      } catch {
        if (!mounted) return;
        setState((prev) => ({ ...prev, loading: false }));
      }
    };

    load();
    const channel = supabase
      .channel("public-site-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "site_content" }, load)
      .on("postgres_changes", { event: "*", schema: "public", table: "media_items" }, load)
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return useMemo(() => state, [state]);
};
