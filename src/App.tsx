import BlurIn from "@/components/magicui/blur-in";
import IconCloud from "@/components/magicui/icon-cloud";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function App() {
  return (
    <div className='h-screen w-full relative text-center'>
      <BlurIn className="p-8 text-3xl" word={"Design Your Future Dreams"}/>
      <IconCloud iconSlugs={['react', 'vue', 'angular', 'svelte',
    'javascript', 'typescript', 'html5', 'css3',
    'nodejs', 'npm', 'webpack', 'babel',
    'git', 'github', 'gitlab', 'bitbucket',
    'vscode', 'firebase', 'mongodb', 'postgresql',
    'docker', 'kubernetes', 'aws', 'googlecloud',
    'sass', 'less', 'tailwindcss', 'bootstrap',
    'redux', 'graphql', 'apollographql', 'jest']} />
     <div className="text-nowrap uppercase text-gray-400">
      <VelocityScroll  className="mt-10 flex justify-center font-bold text-6xl"
        text="A Magical, Immersive, and Interactive Coding Experience" 
        default_velocity={5}
      />
    </div>
    </div>
    
  );
}
