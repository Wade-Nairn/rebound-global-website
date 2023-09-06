import { render } from 'storyblok-rich-text-react-renderer';

const PrivacyPolicy = ({ blok }) => {
  return (
    <div className="PolicyContent bg-white font-sans px-12 my-4 mb-6" >
      <div className='fake-header'></div>
        {render(blok.PolicyContent)}
    </div>
  );
};

export default PrivacyPolicy;