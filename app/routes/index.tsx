import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return {
    title: '@nodly/remix-template',
  };
};

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-semibold">@nodly/remix-template</h1>
    </div>
  );
};

export default Home;
