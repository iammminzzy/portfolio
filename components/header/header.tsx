"use client";

import React from "react";

export default function Header() {
  return (
    <header className="w-full h-[100%] relative">
      <nav>
        <ul>
          <li onClick={() => console.log("Add!")}>add</li>
        </ul>
      </nav>
    </header>
  );
}
