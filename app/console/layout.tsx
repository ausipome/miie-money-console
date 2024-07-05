import ConsoleNavbar from "@/components/ConsoleNavbar";

export default function ConsoleLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div>
    <ConsoleNavbar />
     <section>{children}</section>
     </div>
  );
  }