import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const ADMIN_EMAIL = "nikitamusicalstudio@gmail.com";

const Developer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (email !== ADMIN_EMAIL) {
      alert("You are not authorized to access developer mode.");
      await supabase.auth.signOut();
      return;
    }

    alert("Logged in successfully.");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-md rounded-2xl border p-6 shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Nikita Studio Developer Mode</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Login to update images, videos, audio, certificates, and website content.
        </p>

        <input
          className="w-full border rounded-lg p-3 mb-3"
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3 mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-primary text-primary-foreground p-3 font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Developer;
