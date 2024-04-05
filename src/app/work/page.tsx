import dynamic from 'next/dynamic';
import { ServerComponent } from '../sever-component';

const ClientComponent = dynamic(() => import('../client-component'), { ssr: false });

export default function Page() {
  return (
    <>
      <ServerComponent />
      <ClientComponent />
    </>
  );
}
