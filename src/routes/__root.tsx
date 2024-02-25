import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '@/styles/root.scss'
import { GameContextProvider } from '@/stores/gameContext'
export const Route = createRootRoute({
  component: () => (
    <>
    <div className='root'>
      <GameContextProvider>
        <Outlet />
      </GameContextProvider>
    </div>
    </>
  ),
})