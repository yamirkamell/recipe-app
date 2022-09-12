import '../../scss/components/footer-content.scss'
import FooterIcon from '../../assets/footer.png'

const FooterContent = () => {
  return (
    <div className='container-footer'>
      <div className='container-items'>
        <div>
          <span>Con el Patrocinio de</span>
        </div>
        <div className='container-img'>
          <img src={FooterIcon} alt='footer-icon' />
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
