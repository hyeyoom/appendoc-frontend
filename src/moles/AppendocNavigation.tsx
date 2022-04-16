import React from "react";

import './AppendocNavigation.css'
import LinkWithSvgLogo from "../components/LinkWithSvgLogo";
import NavigationLinks from "../components/NavigationLinks";
import Icon from "../components/Icon";

const AppendocNavigation = () => {
    return (
        <header className={'appendoc-header'}>
            <LinkWithSvgLogo link={"/"} logoUrl={"./logo/Appendoc.svg"}/>
            <NavigationLinks links={
                [
                    {title: '최근 변경', href: '#'},
                    {title: '최근 토론', href: '#'},
                    {title: '기여가 필요한 문서', href: '#'},
                ]
            }/>
            <Icon href={"#"} iconName={"manage_accounts_white_24dp.svg"}/>
        </header>
    );
}

export default AppendocNavigation;