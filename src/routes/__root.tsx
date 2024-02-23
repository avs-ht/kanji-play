import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '@/styles/root.scss'
export const Route = createRootRoute({
  component: () => (
    <>
    <div className='root'>
      <Outlet />
    </div>
    <TanStackRouterDevtools />
    </>
  ),
})