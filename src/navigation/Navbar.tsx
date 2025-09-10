"use client";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
const emailAddress = "sujith.varug@gmail.com"

type NavbarProps = {
  open: () => void;
}

export function Navbar({ open }: NavbarProps) {

  return (
    <div className="relative">
      <FloatingNav open={open} />
    </div>
  );
}
