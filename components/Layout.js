import DialogflowMessenger from './DialogflowMessenger';

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <DialogflowMessenger />
    </div>
  );
};

export default Layout;
