const defaultItems = [
    {
        id: 'notification',
        url: '/example/notification',
        label: 'Notification',
        icon: 'bell',
        isCounter: true,
        subItems: []
    },
    {
        id: 'recent',
        url: '/example/recent',
        label: 'Recent',
        icon: 'history',
        isCounter: false,
        subItems: []
    }
];

const getUserMenuItem = ({name}) => ({
    id: 'user_name',
    url: '',
    label: name,
    icon: null,
    isCounter: false,
    useUserName: true,
    subItems: [
        {
            id: 'edit_profile',
            url: '/example/user/edit',
            label: 'Edit profile',
            icon: null,
            isCounter: false,
            subItems: []
        },
    ]
});

const getStaticMenu = user => ({
    menuItems: [
        ...defaultItems,
        getUserMenuItem(user)
    ]
});

export default getStaticMenu;
