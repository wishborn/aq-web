import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Quest — Design Preview",
  description: "Asset Quest design exploration",
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
