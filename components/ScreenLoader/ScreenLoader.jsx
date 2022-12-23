import { Spinner } from '..';

export const ScreenLoader = ({ children, error }) => {
  return (
    <div className="fixed inset-0 top-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-4 bg-blue-200/[.9]">
      {children}
      {!error && <Spinner />}
    </div>
  );
};
