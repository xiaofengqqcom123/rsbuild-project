import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import EffectDemo from '../pages/React/useEffect';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // 这里可以添加子路由
      {
        path: 'react/useEffect',
        element: <EffectDemo />,
      },
    ],
  },
]);

export default router;
