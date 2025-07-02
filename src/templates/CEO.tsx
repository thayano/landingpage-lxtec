import { Section } from '@/features/landing/Section';

export const CEO = () => {
  return (
    <Section
      subtitle="CONNECTING YOU TO THE FUTURE"
    >
      <main className="px-16">
        <div className="rounded-2xl bg-gradient-to-r from-teal-500 via-slate-50 to-indigo-500 p-px">
          <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-white px-32 py-8">
            <div className="size-24 rounded-full bg-red-400"></div>
            <article className="text-center italic">
              "Construímos nossa empresa de sucesso unindo talento e relacionamentos de confiança que geram valor em cada conquista."
            </article>
            <div className="text-center">
              <h3 className="font-medium">Uglaybe Fernandes Farias</h3>
              <p className="text-xs uppercase text-muted-foreground">CEO fundador da Lxtec</p>
            </div>
          </div>
        </div>
      </main>
    </Section>
  );
};
