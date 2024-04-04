import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('../client-component'), { ssr: false });

export default function Page() {
  return <ClientComponent />;
}
