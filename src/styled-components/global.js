import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*::selection{
    background: ${({ theme }) => theme.selectionBackgroundColor};
    color: ${({ theme }) => theme.selectionColor};
}

body{
    background: ${({ theme }) => theme.backgroundColor};
    transition: all 250ms ease;

    .question-card--parent{
        background: ${({ theme }) => theme.backgroundColor};
    }
    .question-card{
        border: 8px solid  ${({ theme }) => theme.borderColor};
    }

    .title{
        color: ${({ theme }) => theme.titleColor};
    }

    .tag-holder{
        background: ${({ theme }) => theme.tagHolderBackground};
    }
    
    .tags{
        color: ${({ theme }) => theme.tagColor}; 
    }

    .view-count, .answer-count, .meta-data--right{
        color: ${({ theme }) => theme.profileColor}
    }

    .index{
        color: ${({ theme }) => theme.titleColor};
    }

    .themeButton{
        background: ${({ theme }) => theme.themeButtonColor}
    }

    .themer{
        background: ${({ theme }) => theme.themeButtonColor}
    }

    .navbar{
        background: ${({ theme }) => theme.navBackgroundColor};
        border-bottom-color: ${({ theme }) => theme.borderColor};
    }

    .home{
        color: ${({ theme }) => theme.titleColor}
    }

    .site-name{
        color: ${({ theme }) => theme.titleColor}
    }

    .card{
        border: 8px solid  ${({ theme }) => theme.borderColor};
    }

    .card--viewmore{
        color: ${({ theme }) => theme.titleColor};
        border: 5px solid  ${({ theme }) => theme.borderColor};
    }

    .scroll-top-button{
        border: 5px solid ${({ theme }) => theme.scrollTopBorder};
    }

    
}
`;
