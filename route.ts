// 定义一些路由
import Index from "./src/pages/Index.vue";
import Team from "./src/pages/TeamPage.vue";
import UserPage from "./src/pages/UserPage.vue";
import UserUpdatePage from "./src/pages/UserUpdatePage.vue";
import UserTeamJoinPage from "./src/pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "./src/pages/UserTeamCreatePage.vue";
import SearchPage from "./src/pages/SearchPage.vue";
import SearchResultPage from "./src/pages/SearchResultPage.vue";
import UserEditPage from "./src/pages/UserEditPage.vue";
import UserLoginPage from "./src/pages/UserLoginPage.vue";
import UserRegisterPage from "./src/pages/UserRegisterPage.vue";
import TeamAddPage from "./src/pages/TeamAddPage.vue";
import TeamUpdatePage from "./src/pages/TeamUpdatePage.vue";


const routes = [
    { path: '/', component: Index },
    { path: '/team', title: '找队伍', component: Team },
    { path: '/team/add', title: '创建队伍', component: TeamAddPage },
    { path: '/team/update', title: '更新队伍', component: TeamUpdatePage },
    { path: '/user', title: '个人信息', component: UserPage },
    { path: '/search', title: '找朋友', component: SearchPage },
    { path: '/user/list', title: '用户列表', component: SearchResultPage },
    { path: '/user/edit', title: '编辑信息', component: UserEditPage },
    { path: '/user/login', name: '/user/login', title: '登录', component: UserLoginPage },
    { path: '/user/register', name: '/user/register', title: '注册', component: UserRegisterPage },
    { path: '/user/update', title: '修改个人信息', component: UserUpdatePage },
    { path: '/user/team/join', title: '加入队伍', component: UserTeamJoinPage },
    { path: '/user/team/create', title: '创建队伍', component: UserTeamCreatePage },
]

export default routes;
