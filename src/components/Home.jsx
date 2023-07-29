import React from "react";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";
  

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Code AI</h1>
          <p>Makes Life Easier.</p>
        </main>
      </div>
      <div className="home2">
        <img
          src="https://th.bing.com/th/id/OIP.7PbuzAmwsV6WmxKhYUb-yQHaD-?pid=ImgDet&rs=1"
          alt="Graphics"
        />

        <div>
          <p>
            At our AI organization, we are dedicated to making people's lives
            easier by harnessing the power of artificial intelligence. Our
            innovative solutions seamlessly integrate into various aspects of
            everyday life, revolutionizing the way we work, communicate, and
            navigate the world. Through advanced natural language processing,
            our AI systems effortlessly understand and respond to human
            inquiries, providing instant access to information and saving
            valuable time and effort.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
          <div>
            <h1>Who we are?</h1>
            <p>
              We are a leading AI organization specializing in cutting-edge
              computer vision technology. Our team of experts is at the
              forefront of developing advanced algorithms and deep learning
              models that enable machines to perceive and understand visual
              information with remarkable precision. By leveraging our expertise
              in image recognition, object detection, and semantic segmentation,
              we empower businesses and industries across the globe to unlock
              the full potential of visual data. Our AI solutions revolutionize
              various domains, including autonomous vehicles, surveillance
              systems, medical imaging, augmented reality, and industrial
              automation. Through our state-of-the-art computer vision
              capabilities, we enable machines to accurately interpret and
              analyze visual content, resulting in enhanced safety, efficiency,
              and productivity. Whether it's enabling self-driving cars to
              navigate complex environments or assisting medical professionals
              in diagnosing diseases, our AI organization is dedicated to
              pushing the boundaries of computer vision and revolutionizing the
              way we interact with the visual world.
            </p>
          </div>
        </div>
        <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
