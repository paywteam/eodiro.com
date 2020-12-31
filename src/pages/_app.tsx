import '@/assets/styles/global/globalstyle.scss'
import PageInfo from '@/components/utils/PageInfo'
import { eodiroConsts } from '@/constants'
import BaseLayout from '@/layouts/BaseLayout'
import { eodiroRequest } from '@/modules/eodiro-request'
import { isDev } from '@/modules/utils/is-dev'
import 'intersection-observer'
import { AppProps } from 'next/app'
import { AppContextType } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import Router from 'next/router'
import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import 'swiper/swiper.scss'
import { SWRConfig } from 'swr'
import { getCookie } from './api/cookie'
import './_document.scss'

// type AuthProps = {
//   tokens: TokensPack
//   isSigned: boolean
//   isAdmin: boolean
//   userId: number
// }
// export const AuthContext = createContext({} as AuthProps)

// export const useAuth = (): AuthProps => {
//   const authContext = useContext(AuthContext)
//   return authContext
// }

// export const AuthProvider: React.FC<AuthProps> = ({
//   tokens,
//   isSigned,
//   isAdmin,
//   userId,
//   children,
// }) => {
//   const [tokensState] = useState(
//     tokens || { accessToken: undefined, refreshToken: undefined }
//   )
//   const [isSignedState] = useState(isSigned)
//   const [isAdminState] = useState(isAdmin)
//   const [userIdState] = useState(userId)

//   return (
//     <AuthContext.Provider
//       value={{
//         tokens: tokensState,
//         isSigned: isSignedState,
//         isAdmin: isAdminState,
//         userId: userIdState,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// interface EodiroAppInitialProps extends AppInitialProps {
//   authProps: AuthProps
// }

// interface EodiroPageContext extends NextPageContext {
//   isSigned: boolean
//   isAdmin: boolean
// }

// interface EodiroAppContext extends AppContext {
//   ctx: EodiroPageContext
// }

// export type EodiroPage<P = Record<string, unknown>, IP = P> = NextComponentType<
//   EodiroPageContext,
//   IP,
//   P & AuthProps
// >

// export default class EodiroApp extends App<EodiroAppInitialProps> {
//   static async getInitialProps({
//     Component,
//     ctx,
//   }: AppContext): Promise<EodiroAppInitialProps> {
//     const { req, res } = ctx

//     const tokens = await Tokens.get(ctx.req)
//     const authProps: AuthProps = {
//       tokens,
//       isSigned: false,
//       isAdmin: false,
//       userId: 0,
//     }

//     const authState = await getAuthState({ req, res })
//     authProps.isSigned = authState.isSigned
//     authProps.isAdmin = authState.isAdmin
//     authProps.userId = authState.userId

//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return { pageProps, authProps }
//   }

//   componentDidMount(): void {
//     const documentFonts = (document as any).fonts
//     function removeDimmedClassFromBody() {
//       document.body.classList.remove('dimmed')
//     }
//     if (documentFonts) {
//       documentFonts.ready.then(() => {
//         removeDimmedClassFromBody()
//       })
//     } else {
//       setTimeout(() => {
//         removeDimmedClassFromBody()
//       }, 200)
//     }

//     if (!isApp()) {
//       const currentpage = sessionStorage.getItem('currentpage')
//       if (currentpage) {
//         sessionStorage.setItem('lastpage', currentpage)
//       }
//       sessionStorage.setItem('currentpage', window.location.pathname)

//       // Set topbar
//       const w = globalThis as any
//       const { topbar } = w
//       topbar.config({
//         barThickness: 3,
//         barColors: {
//           '0': '#ff3852',
//           '1': '#ff3852',
//         },
//         shadowBlur: 0,
//         shadowColor: 'rgba(0, 0, 0, 0)',
//         className: 'eodiro-topbar',
//       })
//       // Router.events.on('routeChangeStart', topbar.show)
//       // Router.events.on('routeChangeComplete', () => {
//       //   ;(document.activeElement as any)?.blur()
//       //   topbar.hide()
//       // })
//       // Router.events.on('routeChangeError', () => {
//       //   ;(document.activeElement as any)?.blur()
//       //   topbar.hide()
//       // })

//       // Update current page and last page in session storage
//       Router.events.on('routeChangeComplete', () => {
//         if (currentpage) {
//           sessionStorage.setItem('lastpage', currentpage)
//         }
//         sessionStorage.setItem('currentpage', window.location.pathname)
//       })
//     } else {
//       document.body.classList.add('is-app')

//       if (!documentFonts) {
//         setTimeout(() => {
//           reactNativeWebViewPostMessage({
//             key: 'fontsReady',
//           })
//         }, 200)
//       } else {
//         documentFonts.ready.then(() => {
//           reactNativeWebViewPostMessage({
//             key: 'fontsReady',
//           })
//         })
//       }

//       // Post an auth message to the WebView
//       // on the client side after mounted
//       reactNativeWebViewPostMessage({
//         key: 'auth',
//         authProps: this.props.authProps,
//       })
//     }
//   }

//   public render(): JSX.Element {
//     const { Component, pageProps, authProps } = this.props

//     return (
//       <>
//         <Head>
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
//           />
//           {/* @deprecated */}
//           <script src="/modules/topbar.min.js" />

//           {/* Google Analytics */}
//           {!isDev() && (
//             <script
//               // eslint-disable-next-line react/no-danger
//               dangerouslySetInnerHTML={{
//                 __html: `
//                 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//                 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//                 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//                 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

//                 ga('create', 'UA-140443623-1', 'auto');
//                 ga('send', 'pageview');`,
//               }}
//             />
//           )}
//         </Head>
//         <PageInfo
//           title={{
//             subject: '어디로',
//             onlySubject: true,
//           }}
//           description="중앙대 학생들만을 위한 길잡이 서비스"
//           ogImage="https://eodiro.com/open-graph/open_graph.png"
//         />
//         <RecoilRoot>
//           <AuthProvider {...authProps}>
//             <BaseLayout>
//               <Component {...pageProps} />
//             </BaseLayout>
//           </AuthProvider>
//         </RecoilRoot>
//       </>
//     )
//   }
// }

type EdrAppProps = AppProps & {
  shouldCheckAuth: boolean
}

const cachedScrollPositions: [x: number, y: number][] = []

export default function EdrApp({
  Component,
  pageProps,
  shouldCheckAuth,
}: EdrAppProps) {
  useEffect(() => {
    // Set topbar
    const w = globalThis as any
    const { topbar } = w
    topbar.config({
      barThickness: 3,
      barColors: {
        '0': '#ff3852',
        '1': '#ff3852',
      },
      shadowBlur: 0,
      shadowColor: 'rgba(0, 0, 0, 0)',
      className: 'eodiro-topbar',
    })
    Router.events.on('routeChangeStart', topbar.show)
    Router.events.on('routeChangeComplete', () => {
      ;(document.activeElement as any)?.blur()
      topbar.hide()
    })
    Router.events.on('routeChangeError', () => {
      ;(document.activeElement as any)?.blur()
      topbar.hide()
    })

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
      let shouldScrollRestore: { x: number; y: number } | false = false

      Router.events.on('routeChangeStart', () => {
        if (!shouldScrollRestore) {
          cachedScrollPositions.push([window.scrollX, window.scrollY])
        }
      })

      Router.events.on('routeChangeComplete', () => {
        if (shouldScrollRestore) {
          const { x, y } = shouldScrollRestore
          window.scrollTo(x, y)
          shouldScrollRestore = false
        } else {
          window.scrollTo(0, 0)
        }
      })

      Router.beforePopState(() => {
        if (cachedScrollPositions.length > 0) {
          const [x, y] = cachedScrollPositions.pop() as [number, number]
          shouldScrollRestore = { x, y }
        }

        return true
      })
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        {/* @deprecated */}
        <script src="/modules/topbar.min.js" />

        {/* Google Analytics */}
        {!isDev() && (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              
              ga('create', 'UA-140443623-1', 'auto');
              ga('send', 'pageview');`,
            }}
          />
        )}
      </Head>
      <PageInfo
        title={{
          subject: '어디로',
          onlySubject: true,
        }}
        description="중앙대 학생들만을 위한 길잡이 서비스"
        ogImage="https://eodiro.com/open-graph/open_graph.png"
      />
      <RecoilRoot>
        <SWRConfig
          value={{
            fetcher: async (url) => {
              const data = await eodiroRequest({
                method: 'GET',
                url,
              })

              return data
            },
          }}
        >
          <BaseLayout shouldCheckAuth={shouldCheckAuth}>
            <Component {...pageProps} />
          </BaseLayout>
        </SWRConfig>
      </RecoilRoot>
    </>
  )
}

EdrApp.getInitialProps = async ({ ctx }: AppContextType) => {
  let shouldCheckAuth = false

  if (ctx.req) {
    const cookie = getCookie(ctx.req)

    if (
      cookie[eodiroConsts.EDR_ACCESS_TOKEN_NAME] ||
      cookie[eodiroConsts.EDR_REFRESH_TOKEN_NAME]
    ) {
      shouldCheckAuth = true
    }
  }

  return { shouldCheckAuth }
}
