import * as React from "react"
import { cn } from "@uiqubes/utils"
import { Button } from "./button"

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: React.ReactNode
  primaryCtaText?: string
  secondaryCtaText?: string
  onPrimaryCtaClick?: () => void
  onSecondaryCtaClick?: () => void
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      className,
      title,
      subtitle,
      primaryCtaText = "Get Started",
      secondaryCtaText = "Learn More",
      onPrimaryCtaClick,
      onSecondaryCtaClick,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-background py-24 sm:py-32",
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {subtitle}
              </p>
            )}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryCtaText && (
                <Button size="lg" onClick={onPrimaryCtaClick}>
                  {primaryCtaText}
                </Button>
              )}
              {secondaryCtaText && (
                <Button variant="outline" size="lg" onClick={onSecondaryCtaClick}>
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
)
Hero.displayName = "Hero"

export { Hero }
