import Background from '@/constants/Background';

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full bg-transparent ">
      {/* <div className="container mx-auto p-4"></div> */}
      {children}
    </section>
  );
}
