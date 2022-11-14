import React from 'react';
import {IoIosList, IoMdExit, IoMdSearch, IoIosClose, } from 'react-icons/io'
import {BiVideo, BiBell} from 'react-icons/bi'
import {HiOutlineMap,} from 'react-icons/hi';
import {MdOutlineForum, MdReplay10, MdForward10, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import {RiVideoAddLine, RiAngularjsLine} from 'react-icons/ri';
import {BsPeople, BsFillPlayFill, BsFillPauseFill, BsVolumeMute, BsVolumeOff, BsVolumeDown, BsVolumeUp, BsPlus} from 'react-icons/bs';
import {AiFillWindows, AiOutlineArrowLeft, AiOutlineFileText, AiFillApple, AiFillHtml5, AiFillAndroid, AiOutlineConsoleSql} from 'react-icons/ai'
import {FaReact, FaPython, FaJava, FaVuejs, FaDrupal, FaJoomla, FaLaravel, FaSymfony, FaUnity, FaGamepad, FaAws} from 'react-icons/fa';
import {SiXcode, SiTypescript, SiSvelte, SiNextdotjs, SiTensorflow, SiDjango, SiFlask,SiPhp,SiAdobecreativecloud, SiBlender,SiCsharp,SiBlazor,SiAutodesk,SiUnrealengine, SiSwift, SiWebassembly, SiRust, SiDotnet, SiSolidity, SiRedux,SiLua,SiGo, SiGodotengine, SiC, SiCplusplus, SiDiscord, SiRuby, SiRubyonrails, SiMongodb, SiPostgresql, SiJavascript, SiFirebase, SiCakephp, } from 'react-icons/si';
import {DiCss3, DiSqllite} from 'react-icons/di';
import { TbBrandKotlin} from 'react-icons/tb';
import {VscTerminalLinux} from 'react-icons/vsc';
import {GrMysql, GrWordpress} from 'react-icons/gr';
import {FiFigma} from 'react-icons/fi';
import {CgCPlusPlus} from 'react-icons/cg';

const Icon = props => {

    const icons = {
        'video': <BiVideo {...props} />,
        'list': <IoIosList {...props}/>,
        'map': <HiOutlineMap {...props}/>,
        'forum': <MdOutlineForum {...props}/>,
        'add': <RiVideoAddLine {...props}/>,
        'group': <BsPeople {...props}/>,
        'exit': <IoMdExit {...props}/>,
        'bell': <BiBell {...props}/>,
        'search': <IoMdSearch {...props}/>,
        'close': <IoIosClose {...props}/>,
        'arrow-right': <MdOutlineKeyboardArrowRight {...props}/>,
        'arrow-down': <MdOutlineKeyboardArrowDown {...props}/>,
        'arrow-up': <MdOutlineKeyboardArrowUp {...props}/>,
        'arrow-left-full': <AiOutlineArrowLeft {...props} />,
        'play':  <BsFillPlayFill {...props} />,
        'pause': <BsFillPauseFill {...props}/>,
        'forward-10': <MdForward10 {...props} />,
        'back-10': <MdReplay10 {...props}/>,
        'volume-mute': <BsVolumeMute {...props}/>,
        'volume-low': <BsVolumeOff {...props}/>,
        'volume': <BsVolumeDown {...props}/>,
        'volume-high': <BsVolumeUp {...props} />,
        'plus': <BsPlus {...props}/>,
        'article': <AiOutlineFileText {...props}/>,
        'react':   <FaReact {...props} />,
        'linux': <VscTerminalLinux {...props} />,
        'windows': <AiFillWindows {...props} />,
        'apple': <AiFillApple {...props} />,
        'xcode': <SiXcode {...props} />,
        'java': <FaJava {...props} />,
        'html': <AiFillHtml5 {...props} />,
        'css': <DiCss3 {...props} />,
        'javascript': <SiJavascript {...props} />,
        'vue': <FaVuejs {...props} />,
        'angular': <RiAngularjsLine {...props}/>,
        'typescript': <SiTypescript {...props} />,
        'android': <AiFillAndroid {...props} />,
        'svelte': <SiSvelte {...props} />,
        'nextjs': <SiNextdotjs {...props} />,
        'python': <FaPython {...props} />,
        'tensorflow': <SiTensorflow {...props} />,
        'django': <SiDjango {...props} />,
        'flask': <SiFlask {...props} />,
        'wordpress': <GrWordpress {...props} />,
        'drupal': <FaDrupal {...props} />,
        'joomla': <FaJoomla {...props} />,
        'php': <SiPhp {...props} />,
        'laravel': <FaLaravel {...props} />,
        'symfony': <FaSymfony {...props} />,
        'figma': <FiFigma {...props} />,
        'adobe': <SiAdobecreativecloud {...props} />,
        'blender': <SiBlender {...props} />,
        'csharp': <SiCsharp {...props} />,
        'blazor': <SiBlazor {...props} />,
        'autodesk': <SiAutodesk {...props} />,
        'unreal': <SiUnrealengine {...props} />,
        'unity': <FaUnity {...props} />,
        'swift': <SiSwift {...props}/>,
        'webassembly': <SiWebassembly {...props} />,
        'rust': <SiRust {...props} />,
        'solidity': <SiSolidity {...props} />,
        'redux': <SiRedux {...props} />,
        'dotnet': <SiDotnet {...props} />,
        'go': <SiGo {...props} />,
        'lua': <SiLua {...props} />,
        'godot': <SiGodotengine {...props} />,
        'gamepad': <FaGamepad {...props} />,
        'C': <SiC {...props} />,
        'C++': <CgCPlusPlus {...props} />,
        'discord': <SiDiscord {...props} />,
        'kotlin': <TbBrandKotlin {...props} />,
        'ruby': <SiRuby {...props} />,
        'rubyonrails': <SiRubyonrails {...props} />,
        'mongodb': <SiMongodb {...props} />,
        'aws': <FaAws {...props} />,
        'sql': <AiOutlineConsoleSql {...props} />,
        'mysql': <GrMysql {...props} />,
        'postgre': <SiPostgresql {...props} />,
        'sqllite': <DiSqllite {...props} />,
        'firebase': <SiFirebase {...props} />,
        'cake': <SiCakephp {...props} />
        




    }

    return icons[props.name];
}

export default Icon;