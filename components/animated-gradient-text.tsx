interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export function AnimatedGradientText({ text = '', className = '' }: AnimatedGradientTextProps): React.ReactNode {
  return (
    <p
      className={`mt-5 font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.300),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.pink.500),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient ${className}`}
    >
      {text}
    </p>
  )
}
