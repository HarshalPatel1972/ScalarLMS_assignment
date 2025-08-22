"use client";
import {} from "@/tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function RickTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
  });
}
