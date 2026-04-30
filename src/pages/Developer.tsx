import { useEffect, useMemo, useState } from "react";
import { ADMIN_EMAIL, isSupabaseConfigured, supabase } from "@/lib/supabaseClient";
import type { MediaCategory, MediaItemRow, SiteContentRow } from "@/lib/siteData";

const MEDIA_SECTIONS: MediaCategory[] = ["images", "videos", "audios", "certificates"];

const emptyMediaForm = {
  title: "",
  description: "",
  category: "images" as MediaCategory,
  display_order: 0,
  is_featured: false,
  is_visible: true,
};

const Developer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [siteContent, setSiteContent] = useState<SiteContentRow[]>([]);
  const [mediaItems, setMediaItems] = useState<MediaItemRow[]>([]);
  const [activeTab, setActiveTab] = useState<"Website Text" | "Images" | "Videos" | "Audios" | "Certificates">("Website Text");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [mediaForm, setMediaForm] = useState(emptyMediaForm);
  const [status, setStatus] = useState("");
  const selectedCategory = useMemo(() => activeTab.toLowerCase() as MediaCategory, [activeTab]);
  const filteredMedia = mediaItems.filter((item) => item.category === selectedCategory);

  const loadDashboard = async () => {
    if (!supabase) return;
    const [contentRes, mediaRes] = await Promise.all([
      supabase.from("site_content").select("*").order("display_order", { ascending: true }),
      supabase.from("media_items").select("*").order("display_order", { ascending: true }),
    ]);
    if (!contentRes.error) setSiteContent((contentRes.data as SiteContentRow[]) || []);
    if (!mediaRes.error) setMediaItems((mediaRes.data as MediaItemRow[]) || []);
  };

  useEffect(() => {
    if (!supabase) return;
    const initialize = async () => {
      const { data } = await supabase.auth.getSession();
      const userEmail = data.session?.user?.email?.toLowerCase();
      if (userEmail === ADMIN_EMAIL) {
        setIsAdmin(true);
        await loadDashboard();
      }
    };
    initialize();
  }, []);

  const handleLogin = async () => {
    if (!supabase) return;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setStatus(error.message);
      return;
    }
    if (data.user.email?.toLowerCase() !== ADMIN_EMAIL) {
      await supabase.auth.signOut();
      setStatus("You are not authorized to access developer mode.");
      return;
    }
    setIsAdmin(true);
    setStatus("Logged in.");
    await loadDashboard();
  };

  const upsertContent = async (row: Partial<SiteContentRow>) => {
    if (!supabase) return;
    const { error } = await supabase.from("site_content").upsert(row);
    if (!error) await loadDashboard();
  };

  const deleteContent = async (id: string) => {
    if (!supabase) return;
    await supabase.from("site_content").delete().eq("id", id);
    await loadDashboard();
  };

  const uploadMedia = async () => {
    if (!supabase || !uploadFile) return;
    const path = `${mediaForm.category}/${Date.now()}-${uploadFile.name}`;
    const uploadRes = await supabase.storage.from("nikita-media").upload(path, uploadFile, {
      upsert: true,
    });
    if (uploadRes.error) {
      setStatus(uploadRes.error.message);
      return;
    }
    const { data } = supabase.storage.from("nikita-media").getPublicUrl(path);
    const payload = {
      ...mediaForm,
      category: mediaForm.category,
      storage_path: path,
      public_url: data.publicUrl,
    };
    const { error } = await supabase.from("media_items").insert(payload);
    if (error) {
      setStatus(error.message);
      return;
    }
    setMediaForm(emptyMediaForm);
    setUploadFile(null);
    setStatus("Uploaded and saved.");
    await loadDashboard();
  };

  const updateMedia = async (id: string, patch: Partial<MediaItemRow>) => {
    if (!supabase) return;
    await supabase.from("media_items").update(patch).eq("id", id);
    await loadDashboard();
  };

  const deleteMedia = async (item: MediaItemRow) => {
    if (!supabase) return;
    await supabase.storage.from("nikita-media").remove([item.storage_path]);
    await supabase.from("media_items").delete().eq("id", item.id);
    await loadDashboard();
  };

  if (!isSupabaseConfigured || !supabase) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="mx-auto max-w-lg rounded-2xl border p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Nikita Studio Developer Mode</h1>
          <p className="text-sm text-muted-foreground">
            Supabase is not configured. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to enable developer mode.
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="mx-auto max-w-md rounded-2xl border p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Nikita Studio Developer Mode</h1>
          <p className="text-sm text-muted-foreground mb-6">Login with authorized admin account.</p>
          <input className="w-full border rounded-lg p-3 mb-3 bg-background" type="email" placeholder="Admin email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full border rounded-lg p-3 mb-4 bg-background" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin} className="w-full rounded-lg bg-primary text-primary-foreground p-3 font-semibold">Login</button>
          {status ? <p className="text-sm mt-3 text-muted-foreground">{status}</p> : null}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-wrap gap-2">
          {["Website Text", "Images", "Videos", "Audios", "Certificates"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab as typeof activeTab)} className={`rounded-lg px-4 py-2 text-sm ${activeTab === tab ? "bg-primary text-primary-foreground" : "bg-card border border-border"}`}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Website Text" ? (
          <div className="rounded-2xl border bg-card p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4">Website Text</h2>
            <div className="space-y-4">
              {siteContent.map((row) => (
                <div key={row.id} className="rounded-lg border border-border p-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input value={row.key} onChange={(e) => upsertContent({ ...row, key: e.target.value })} className="rounded border p-2 bg-background" />
                    <input value={row.display_order ?? 0} type="number" onChange={(e) => upsertContent({ ...row, display_order: Number(e.target.value) })} className="rounded border p-2 bg-background" />
                  </div>
                  <textarea value={row.value} onChange={(e) => upsertContent({ ...row, value: e.target.value })} className="mt-3 w-full rounded border p-2 bg-background" rows={3} />
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => upsertContent({ ...row, is_visible: !row.is_visible })} className="rounded border px-3 py-1 text-sm">{row.is_visible ? "Hide" : "Publish"}</button>
                    <button onClick={() => deleteContent(row.id)} className="rounded border px-3 py-1 text-sm">Delete</button>
                  </div>
                </div>
              ))}
              <button onClick={() => upsertContent({ key: "new_key", value: "New text", display_order: siteContent.length + 1, is_visible: true })} className="rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm">
                Add Text Item
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border bg-card p-4 sm:p-6 space-y-5">
            <h2 className="text-xl font-semibold">{activeTab}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <input placeholder="Title" value={mediaForm.title} onChange={(e) => setMediaForm((f) => ({ ...f, title: e.target.value, category: selectedCategory }))} className="rounded border p-2 bg-background" />
              <input type="number" placeholder="Display Order" value={mediaForm.display_order} onChange={(e) => setMediaForm((f) => ({ ...f, display_order: Number(e.target.value), category: selectedCategory }))} className="rounded border p-2 bg-background" />
            </div>
            <textarea placeholder="Description" value={mediaForm.description} onChange={(e) => setMediaForm((f) => ({ ...f, description: e.target.value, category: selectedCategory }))} rows={3} className="w-full rounded border p-2 bg-background" />
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={mediaForm.is_featured} onChange={(e) => setMediaForm((f) => ({ ...f, is_featured: e.target.checked, category: selectedCategory }))} /> Featured</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={mediaForm.is_visible} onChange={(e) => setMediaForm((f) => ({ ...f, is_visible: e.target.checked, category: selectedCategory }))} /> Visible</label>
              <input type="file" onChange={(e) => setUploadFile(e.target.files?.[0] || null)} className="text-sm" />
              <button onClick={uploadMedia} className="rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm">Upload</button>
            </div>

            <div className="space-y-3">
              {filteredMedia.map((item) => (
                <div key={item.id} className="rounded-lg border border-border p-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input value={item.title} onChange={(e) => updateMedia(item.id, { title: e.target.value })} className="rounded border p-2 bg-background" />
                    <input type="number" value={item.display_order ?? 0} onChange={(e) => updateMedia(item.id, { display_order: Number(e.target.value) })} className="rounded border p-2 bg-background" />
                  </div>
                  <textarea value={item.description || ""} onChange={(e) => updateMedia(item.id, { description: e.target.value })} className="mt-2 w-full rounded border p-2 bg-background" rows={2} />
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button onClick={() => updateMedia(item.id, { is_visible: !item.is_visible })} className="rounded border px-3 py-1 text-sm">{item.is_visible ? "Hide" : "Publish"}</button>
                    <button onClick={() => updateMedia(item.id, { is_featured: !item.is_featured })} className="rounded border px-3 py-1 text-sm">{item.is_featured ? "Unfeature" : "Feature"}</button>
                    <button onClick={() => deleteMedia(item)} className="rounded border px-3 py-1 text-sm">Delete</button>
                    <a href={item.public_url} target="_blank" rel="noreferrer" className="rounded border px-3 py-1 text-sm">Open</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Developer;
