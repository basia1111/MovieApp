import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-border placeholder:text-text-muted selection:bg-brand-primary selection:text-white flex h-10 w-full min-w-0 rounded-md border bg-bg-input px-3 py-2 text-xs shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-focus/70 focus-visible:ring-focus/20 focus-visible:ring-[3px] focus",
        "aria-invalid:ring-error/20 dark:aria-invalid:ring-error/40 aria-invalid:border-error",
        className
      )}
      {...props}
    />
  );
}

export { Input };
