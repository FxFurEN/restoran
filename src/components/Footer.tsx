import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-6">
      <div className="container mx-auto px-6 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.340285431266!2d30.440249!3d60.055105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4697ccb6a0ec7357%3A0x47b09a7bb434a58d!2zR3JpbGwgVmlubyAmINCl0LDRh9Cw0L_Rg9GA0Lg!5e0!3m2!1sru!2sby!4v1715967687842!5m2!1sru!2sby"
              width="130%"
              height="250"
              style={{ border: 0, pointerEvents: 'none' }}
              loading="lazy"

              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="flex flex-col items-center lg:w-1/2 lg:items-end">
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500">
                <FacebookOutlined />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500">
                <InstagramOutlined />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500">
                <TwitterOutlined />
              </a>
            </div>
            <p className="text-gray-400">Все права защищены, 2024г.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
