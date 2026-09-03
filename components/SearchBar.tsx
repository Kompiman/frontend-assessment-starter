"use client";

export function SearchBar({ onChange }: { onChange: any }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
