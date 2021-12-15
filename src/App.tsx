import Card from './Card';
//styles
import { Wrapper } from './App.styles';
// images
import logo1 from './images/company1.png';
import logo2 from './images/company2.png';
import logo3 from './images/company3.png';
import logo4 from './images/company4.png';
import logo5 from './images/company5.png';
import logo6 from './images/company6.png';
// filmes
import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';
import video4 from './videos/video4.mp4';
import video5 from './videos/video5.mp4';
import video6 from './videos/video6.mp4';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Card logo={logo1} video={video1} />
      <Card logo={logo2} video={video2} />
      <Card logo={logo3} video={video3} />
      <Card logo={logo4} video={video4} />
      <Card logo={logo5} video={video5} />
      <Card logo={logo6} video={video6} />
    </Wrapper>
  );
};

export default App;
