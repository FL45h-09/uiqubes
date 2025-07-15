
import { getBrixBySlug } from '@/libs/apiCalls/brixApi';

export default async function BrickPage({ params }: { params: { slug: string } }) {
  const compSlug = params.slug;
  const component = await getBrixBySlug(compSlug);
  
  if (!component) {
    return <div>404 - Component Not Found</div>;
  }
  console.log("component: ", component);
  return (
    <div>
      <h1>{component.name}</h1>
      <p>{component.description}</p>
      {/* render preview etc */}
    </div>
  );
}

    // export default async function Page({ params,}: { params: Promise<{ slug: string }>}) {
    //   const { slug } = await params
    //   return <div>My Post: {slug}</div>
    // }