import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="27" y="55" rx="0" ry="0" width="70" height="40" />
    <rect x="27" y="17" rx="0" ry="0" width="80" height="20" />
    <rect x="107" y="56" rx="0" ry="0" width="70" height="40" />
    <rect x="186" y="56" rx="0" ry="0" width="70" height="40" />
  </ContentLoader>
);

export default Loader;
