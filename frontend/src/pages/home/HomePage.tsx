import { CallToAction, Features, Hero } from '@/pages/home/components'

const HomePage = (): JSX.Element => {
  return (
    <main>
      <Hero />
      <Features />
      <CallToAction />
    </main>
  )
}

export { HomePage }
