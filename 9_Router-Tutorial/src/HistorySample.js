import { useNavigate } from 'react-router-dom';

function HistorySample() {
   const navigate = useNavigate();
   const goBack = () => {
   const confirm = window.confirm('정말 떠나시겠어요?')
   if (confirm) {
      navigate(0);
    }
  };

const goHome = () => {
    navigate('/');
  }
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;