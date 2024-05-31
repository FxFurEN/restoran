import { FacebookOutlined, InstagramOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-6">
      <div className="container mx-auto px-6 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.445369504577!2d51.428829400000005!3d51.2477087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171b094d0754eb3%3A0xb22419a04d7c84a5!2z0L_RgNC-0YHQvy4g0JDQsdGD0LvRhdCw0LjRgCDRhdCw0L3QsCAxNzUsINCj0YDQsNC70YzRgdC6IDA5MDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1717007335739!5m2!1sru!2sby"
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
              <a href="https://www.instagram.com/hachapuri_grillhouse" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500">
                <InstagramOutlined />
              </a>
              <a href="https://www.whatsapp.com/?lang=ru_RU" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-orange-500">
                <WhatsAppOutlined />
              </a>z
              
            </div>
            <p className="text-gray-400">Все права защищены, 2024г.</p>
              <a href="tel:+77713735436" className="font-bold hover:text-red-500">+7 771 373 54 36</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
