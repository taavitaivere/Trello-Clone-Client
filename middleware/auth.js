export default function ({app, route, redirect}){
  if (route.path !== '/auth/signin') {
    //protected route
    if(!app.$fire.auth.currentUser) {
      //back to sign in page
      return redirect('/auth/signin')
    }
  } else if (route.path === 'auth/signin') {
    if(app.$fire.auth.currentUser) {
      //leave them on the sign in page
    } else {
      return redirect('/')
    }
  }
}
