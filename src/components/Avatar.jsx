import Image from "next/image";
import { existsSync } from "fs";
import path from "path";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

function profileImageExists(source) {
  try {
    return existsSync(path.join(process.cwd(), "public", source.replace(/^\//, "")));
  } catch {
    return false;
  }
}

export function Avatar({ variant = "circle", priority = false, className = "" }) {
  const imagePath = profile.image || "/images/profile.jpg";
  const exists = profileImageExists(imagePath);

  if (variant === "portrait") {
    return (
      <div
        className={cn(
          "relative drop-shadow-xl dark:drop-shadow-[0_0_22px_rgba(245,239,230,0.35)]",
          className,
        )}
      >
        {exists ? (
          <Image
            src={imagePath}
            alt={`Foto ${profile.name}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-contain object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-inkwell text-6xl font-bold text-on-accent">
            {profile.firstName.charAt(0)}
          </div>
        )}
      </div>
    );
  }

  if (exists) {
    return (
      <Image
        src={imagePath}
        alt={`Foto ${profile.name}`}
        width={160}
        height={160}
        priority={priority}
        className={cn("rounded-full object-cover", className)}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center rounded-full bg-inkwell font-bold text-on-accent",
        className,
      )}
    >
      {profile.firstName.charAt(0)}
    </div>
  );
}
