import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowRightIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, var(--candlelight) 0%, var(--blush) 45%, var(--paper) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-10">
        <div className="grid items-start gap-10 lg:grid-cols-[4fr_5fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-inkwell">
              {profile.name}
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Hi, saya <span className="text-inkwell">{profile.firstName}</span>
            </h1>

            <p className="mt-3 text-xl font-semibold leading-snug text-inkwell sm:text-2xl">
              {profile.role} · {profile.region}
            </p>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted lg:mx-0">
              Saya membantu organisasi dan usaha menyelesaikan masalah nyata dengan
              teknologi — membangun website yang andal, memperbaiki yang bermasalah, dan
              memperkuat keamanan sistem informasi dari ancaman siber.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button href="/contact" variant="primary">
                Hubungi Saya
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button href="/projects">Lihat Project</Button>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <SocialLinks />
            </div>
          </div>

          <div className="flex justify-center">
            <Avatar
              priority
              variant="portrait"
              className="aspect-[3/4] w-full max-w-xs sm:max-w-sm lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
