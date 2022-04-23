import loadable from "@loadable/component";
import NavigationBar from "../component/NavigationBar";

const ComponentWrapper = (props: { page: string }) => {
  const { page, ...rest } = props;
  const Component = loadable(() => import("../page/" + page));

  return (
    <>
      <NavigationBar />
      <div className="header">Header Title</div>
      <Component {...rest} />
    </>
  );
};

export default ComponentWrapper;
