import { Container } from "react-bootstrap";
import SkeletonLoader from "./skeletonLoader";

export default function GeneralSkeleton({showLoader}) {
  return (
    <Container className="content-cont">
    <div className="row" style={{marginTop: "200px"}}>
      <div className="col-6">
        <SkeletonLoader active={showLoader} repeat={1} vRepeat={1} />
        <SkeletonLoader active={showLoader} repeat={1} vRepeat={2} />
      </div>
      <div className="col-6">
        <SkeletonLoader active={showLoader} repeat={1} vRepeat={2} />
        <SkeletonLoader active={showLoader} repeat={1} vRepeat={1} />
      </div>
      <div className="col-6">
        <SkeletonLoader active={showLoader} repeat={1} vRepeat={2} />
        <SkeletonLoader active={showLoader} repeat={1} vRepeat={1} />
      </div>
      <div className="col-6">
        <SkeletonLoader active={showLoader} repeat={1} vRepeat={2} />
        <SkeletonLoader active={showLoader} repeat={1} vRepeat={1} />
      </div>
    </div>
    </Container>
  );
}
