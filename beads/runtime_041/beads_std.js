import * as str from "./beads_str.js";

export const CHECKS = !0;

export const TRACE_IMPLIED = !1;

export const TRACE_INIT = !1;

export const TRACE_TIME = !1;

const TRACE_ANIMATION = !0, TRACE_AUTO = !1, TRACE_BITMAP = !1, TRACE_BLACKBOX = !0, TRACE_BLOCKS = !1, TRACE_BOOT = !1, TRACE_CACHE = !1, TRACE_CAPTURE = !1, TRACE_CHAN = !1, TRACE_CHUNK = !1, TRACE_CLICK = !1, TRACE_CLIENT = !0, TRACE_COLLATE = !1, TRACE_CURVE = !1, TRACE_DEBUG = !0, TRACE_DECODE = !1, TRACE_DINPUT = !1, TRACE_DPI = !1, TRACE_ENCOD_LOW = !1, TRACE_ENCODE = !1, TRACE_ENTER = !1, TRACE_EVENTS = !1, TRACE_EXPLODE = !1, TRACE_EXTRA = !1, TRACE_FILE = !1, TRACE_FIND = !1, TRACE_FINDBX = !1, TRACE_GRID = !1, TRACE_GTOL = !1, TRACE_IMG = !1, TRACE_INPATH = !1, TRACE_INPUT = !1, TRACE_INSERT = !1, TRACE_JUMP = !0, TRACE_K = !1, TRACE_KEYS = !1, TRACE_LOG = !1, TRACE_LOGG = !1, TRACE_LOGGING = !1, TRACE_LOGW = !1, TRACE_LOOM = !1, TRACE_LOW = !1, TRACE_MAJOR = !1, TRACE_MICRO = !1, TRACE_MOVE = !1, TRACE_OBSOLETE = !1, TRACE_PICKER = !1, TRACE_RESIZE = !1, TRACE_SCROLL = !1, TRACE_SEARCH = !1, TRACE_SEQ = !1, TRACE_SETVAL = !1, TRACE_SOUND = !1, TRACE_SPRITE = !1, TRACE_TBL = !1, TRACE_TEXT = !1, TRACE_TO_VAL_PTR = !1, TRACE_TOUCH = !1, TRACE_TRICKLE = !1, TRACE_UNITX = !1, TRACE_VISIT = !1, TRACE_WRITE = !1, TRACE_XFORM = !1, TRACE_XTRA = !1, TRACE_XY = !1, USES_VIDEO = !1, TRAP_BAD_SUBSCRIPTS = !0, TRAP_ERR = !0, TRAP_TYPE_MISMATCH = !0, TRAP_U = !0, SKIP_ANIMATION = !1, OBBLOCK = "$root", SEND_BUF_SIZE = 5e5, TWO_7 = 128, TWO_15 = 32768, TWO_23 = 8388608, TWO_31 = 2147483648, TWO_16 = 65536, TWO_24 = 16777216, TWO_32 = 4294967296, TWO_40 = 1099511627776, TWO_48 = 281474976710656, TWO_56 = 72057594037927940, FIELD_EMPTY_SYMBOL = "✽", FIELD_EMPTY_COLOR = 14423100, FIELD_BAD_SYMBOL = "⚠️";

TRACE_INIT && logg("--- INIT A of std");

var g_curr_cursor = 0, g_svg_id = 0;

const MARK_OVERFLOW = !1;

export const SKIPBG = !1;

export const DUMMY_ROW_CONTENT = !1;

export const SKIP_SLICE = -1;

export const DIVF_VERT = 1;

export const DIVF_FINGER = 2;

export const BKIND_ROOT = 0;

export const BKIND_PLAIN = 1;

export const BKIND_SUBSET = 2;

export const BKIND_GRID_BASE = 3;

export const BKIND_GRID_CELL = 4;

export const BKIND_SLICE = 5;

export const BKIND_TABLE_BASE = 9;

export const BKIND_TABLE_ROW = 10;

export const BKIND_OVERLAY = 11;

export const BKIND_MEASURING = 12;

export const BKIND_MENUBAR = 13;

export const NODRAW = null;

export const NOTRACK = null;

export const NOCALC = null;

export const NOCELLTRACK = null;

export const ROOT_BLABEL = "$root";

const LOG_DRAW = !1;

export const MODX_std = 0;

export const MODX_str = 1;

export var MODULES = [ "--", "std", "str" ];

let DRAW_EVENT, g_last_drawn_seq, g_first_mon_draw;

export const SCROLL_SMALL_STEP = 1 / 12;

export const SCROLL_BIG_STEP = .95;

export let g_interface_locked;

export let g_root_block = null;

export let g_menu_block = null;

export let g_capture_bid;

export let g_capture_block;

export let g_last_majorx;

export let g_field_mark_func;

export let g_fields_to_mark;

export let gg_depth;

export let g_curr_block = null;

export let g_block_stack = [];

export const IS_NODE = !1;

const _M = 1;

export const SVG_NS = "http://www.w3.org/2000/svg";

export const XLINK_NS = "http://www.w3.org/1999/xlink";

export var FIELDS = {};

export var FUNCS = {};

export var TREES = {};

export var BBOX_MODULES;

export var runtime;

export var blackbox_runtime;

export var default_pic_host;

export var loom_history;

let gg_buf;

var SCREEN_H, SCREEN_V, SCREEN_DPI, USABLE_H, USABLE_V;

export let g_currseq = 1e3;

export let g_code = {};

var g_overlay = null;

export const g_hardware_id = 305419896;

export let g_active_framerate = 60;

export let g_inactive_framerate = 2;

export let g_inverse_hash = {};

let g_subscript_found, g_val_found, g_next_bid = 21e3;

export const SCROLLBAR_WIDTH = IS_NODE ? 0 : js_scrollbar_width();

export const MAX_LEVELS = 14;

export const FIRST_ENUM = 900719e10;

export const FIRST_META = 90071943e8;

export const LAST_ENUM = 9007198599999998;

export const N = FIRST_ENUM + 0;

export const Y = FIRST_ENUM + 1111111111;

export const U = LAST_ENUM + 1;

export const ERR = NaN;

export const INFINITY = 1 / 0;

export const NEG_INFINITY = -1 / 0;

export const U_STR = null;

export const U_PATH = null;

export const U_PHOTO = null;

export const U_MEAS = null;

export const U_FUNC = null;

export const U_SOUND = null;

export const U_TREE = null;

export const U_COLOR = 3758096384;

export const U_DATE = U;

export const ERR_STR = "ERR";

export const ERR_PATH = new a_path();

export const ERR_IMAGE = new a_image(null, "err");

export const ERR_MEAS = new a_meas();

export const ERR_FUNC = new a_function(_M, "halt", halt);

export const ERR_GRAD = new a_gradient();

export const ERR_SOUND = new a_sound();

export const ERR_BITS = ERR;

export const ERR_BYTES = ERR;

export let ERR_TREE;

export const ERR_COLOR = 3919157657;

export const ERR_DATE = ERR;

export const GRAD_TO_RIGHT = 0;

export const GRAD_TO_BOTTOM = 90;

export const GRAD_TO_LEFT = 180;

export const GRAD_TO_TOP = 270;

export const FIRST = 1;

export const CR = "\r";

export const LF = "\n";

export const TAB = "\t";

export const ESC = "";

export const BS = "\b";

export const SANS_SERIF = "_sans";

export const SERIF = "_serif";

export const MONOSPACE = "_typewriter";

export const TOP_LEFT = 1;

export const TOP_CENTER = 2;

export const TOP_RIGHT = 3;

export const MID_LEFT = 4;

export const MID_CENTER = 5;

export const MID_RIGHT = 6;

export const BOT_LEFT = 7;

export const BOT_CENTER = 8;

export const BOT_RIGHT = 9;

export const LOOM_OP_SKIP = " ";

export const LOOM_OP_SETV = "S";

export const LOOM_OP_CLEAR = "C";

export const LOOM_OP_RENUM = "N";

export const PI = Math.PI;

export const TAU = 2 * Math.PI;

export const E = Math.E;

export const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

export const SECONDS_PER_MIN = 60;

export const SECONDS_PER_HOUR = 3600;

export const SECONDS_PER_DAY = 86400;

export const SECONDS_PER_YEAR = 31557600;

export const SECONDS_PER_MONTH = SECONDS_PER_YEAR / 12;

export const KEYCODE_LEFT = 37;

export const KEYCODE_RIGHT = 39;

export const KEYCODE_UP = 38;

export const KEYCODE_DOWN = 40;

export const KEYCODE_PAGE_UP = 33;

export const KEYCODE_PAGE_DOWN = 34;

export const KEYCODE_HOME = 36;

export const KEYCODE_END = 35;

export const KEYCODE_SPACE = 32;

export const KEYCODE_BS = 8;

export const KEYCODE_DEL = 46;

export const KEYCODE_ENTER = 13;

export const KEYCODE_ESC = 27;

export const KEYCODE_INS = 45;

export const KEYCODE_TAB = 9;

export const KEYCODE_SCROLL_LOCK = 145;

export const KEYCODE_PRINT_SCREEN = 124;

export const KEYCODE_F1 = 112;

export const KEYCODE_F2 = 113;

export const KEYCODE_F3 = 114;

export const KEYCODE_F4 = 115;

export const KEYCODE_F5 = 116;

export const KEYCODE_F6 = 117;

export const KEYCODE_F7 = 118;

export const KEYCODE_F8 = 119;

export const KEYCODE_F9 = 120;

export const KEYCODE_F10 = 121;

export const KEYCODE_F11 = 122;

export const KEYCODE_F12 = 123;

export const KEYCODE_F13 = 124;

export const KEYCODE_ANDROID_BACK = 16777238;

export const KEYCODE_ANDROID_SEARCH = 16777247;

export const KEYCODE_ANDROID_MENU = 16777234;

export const ALICE_BLUE = 15792383;

export const ANTIQUE_WHITE = 16444375;

export const AQUA = 65535;

export const AQUAMARINE = 8388564;

export const AZURE = 15794175;

export const BEIGE = 16119260;

export const BISQUE = 16770244;

export const BLACK = 0;

export const BLANCHED_ALMOND = 16772045;

export const BLUE = 255;

export const BLUE_VIOLET = 9055202;

export const BROWN = 10824234;

export const BURLY_WOOD = 14596231;

export const CADET_BLUE = 6266528;

export const CHARTREUSE = 8388352;

export const CHOCOLATE = 13789470;

export const CORAL = 16744272;

export const CORNFLOWER_BLUE = 6591981;

export const CORNSILK = 16775388;

export const CRIMSON = 14423100;

export const CYAN = 65535;

export const DARK_BLUE = 139;

export const DARK_CYAN = 35723;

export const DARK_GOLDENROD = 12092939;

export const DARK_GRAY = 11119017;

export const DARK_GREEN = 25600;

export const DARK_KHAKI = 12433259;

export const DARK_MAGENTA = 9109643;

export const DARK_OLIVE_GREEN = 5597999;

export const DARK_ORANGE = 16747520;

export const DARK_ORCHID = 10040012;

export const DARK_RED = 9109504;

export const DARK_SALMON = 15308410;

export const DARK_SEA_GREEN = 9419919;

export const DARK_SLATE_BLUE = 4734347;

export const DARK_SLATE_GRAY = 3100495;

export const DARK_TURQUOISE = 52945;

export const DARK_VIOLET = 9699539;

export const DEEP_PINK = 16716947;

export const DEEP_SKY_BLUE = 49151;

export const DIM_GRAY = 6908265;

export const DODGER_BLUE = 2003199;

export const FIREBRICK = 11674146;

export const FLORAL_WHITE = 16775920;

export const FOREST_GREEN = 2263842;

export const FUCHSIA = 16711935;

export const GAINSBORO = 14474460;

export const GHOST_WHITE = 16316671;

export const GOLD = 16766720;

export const GOLDENROD = 14329120;

export const GRAY = 8421504;

export const GRAY9 = 1710618;

export const GRAY8 = 3355443;

export const GRAY7 = 5000268;

export const GRAY6 = 6710886;

export const GRAY5 = 8355711;

export const GRAY4 = 10066329;

export const GRAY3 = 11711154;

export const GRAY2 = 13421772;

export const GRAY1 = 15066597;

export const GREEN = 32768;

export const GREEN_YELLOW = 11403055;

export const HONEYDEW = 15794160;

export const HOT_PINK = 16738740;

export const INDIAN_RED = 13458524;

export const INDIGO = 4915330;

export const IVORY = 16777200;

export const KHAKI = 15787660;

export const LAVENDER = 15132410;

export const LAVENDER_BLUSH = 16773365;

export const LAWN_GREEN = 8190976;

export const LEMON_CHIFFON = 16775885;

export const LIGHT_BLUE = 11393254;

export const LIGHT_CORAL = 15761536;

export const LIGHT_CYAN = 14745599;

export const LIGHT_GOLDENROD = 16448210;

export const LIGHT_GREEN = 9498256;

export const LIGHT_GREY = 13882323;

export const LIGHT_PINK = 16758465;

export const LIGHT_SALMON = 16752762;

export const LIGHT_SEA_GREEN = 2142890;

export const LIGHT_SKY_BLUE = 8900346;

export const LIGHT_SLATE_GRAY = 7833753;

export const LIGHT_STEEL_BLUE = 11584734;

export const LIGHT_YELLOW = 16777184;

export const LIME = 65280;

export const LIME_GREEN = 3329330;

export const LINEN = 16445670;

export const MAGENTA = 16711935;

export const MAROON = 8388608;

export const MEDIUM_AQUAMARINE = 6737322;

export const MEDIUM_BLUE = 205;

export const MEDIUM_ORCHID = 12211667;

export const MEDIUM_PURPLE = 9662683;

export const MEDIUM_SEA_GREEN = 3978097;

export const MEDIUM_SLATE_BLUE = 8087790;

export const MEDIUM_SPRING_GREEN = 64154;

export const MEDIUM_TURQUOISE = 4772300;

export const MEDIUM_VIOLET_RED = 13047173;

export const MIDNIGHT_BLUE = 1644912;

export const MINT_CREAM = 16121850;

export const MISTY_ROSE = 16770273;

export const MOCCASIN = 16770229;

export const NAVAJO_WHITE = 16768685;

export const NAVY = 128;

export const OLD_LACE = 16643558;

export const OLIVE = 8421376;

export const OLIVE_DRAB = 7048739;

export const ORANGE = 16753920;

export const ORANGE_RED = 16729344;

export const ORCHID = 14315734;

export const PALE_GOLDENROD = 15657130;

export const PALE_GREEN = 10025880;

export const PALE_TURQUOISE = 11529966;

export const PALE_VIOLET_RED = 14381203;

export const PAPAYA_WHIP = 16773077;

export const PEACH_PUFF = 16767673;

export const PERU = 13468991;

export const PINK = 16761035;

export const PLUM = 14524637;

export const POWDER_BLUE = 11591910;

export const PURPLE = 8388736;

export const REBECCA_PURPLE = 6697881;

export const RED = 16711680;

export const ROSY_BROWN = 12357519;

export const ROYAL_BLUE = 4286945;

export const SADDLE_BROWN = 9127187;

export const SALMON = 16416882;

export const SANDY_BROWN = 16032864;

export const SEA_GREEN = 3050327;

export const SEASHELL = 16774638;

export const SIENNA = 10506797;

export const SILVER = 12632256;

export const SKY_BLUE = 8900331;

export const SLATE_BLUE = 6970061;

export const SLATE_GRAY = 7372944;

export const SNOW = 16775930;

export const SPRING_GREEN = 65407;

export const STEEL_BLUE = 4620980;

export const TAN = 13808780;

export const TEAL = 32896;

export const THISTLE = 14204888;

export const TOMATO = 16737095;

export const TURQUOISE = 4251856;

export const VIOLET = 15631086;

export const WHEAT = 16113331;

export const WHITE = 16777215;

export const WHITE_SMOKE = 16119285;

export const YELLOW = 16776960;

export const YELLOW_GREEN = 10145074;

export const GIANT_WIDTH = 2e4;

export const EF_VAL_IS_U = 1;

export const EF_VAL_IS_ERR = 2;

export const EF_VAL_IS_NUM = 4;

export const EF_VAL_IS_STR = 8;

export const EF_VAL_IS_IMAGE = 16;

export const EF_VAL_IS_FUNC = 32;

export const EF_VAL_IS_PATH = 64;

export const EF_VAL_IS_MEAS = 128;

export const EF_VAL_IS_SOUND = 256;

export const EF_VAL_IS_GRAD = 512;

export const EF_VAL_IS_BITS = 1024;

export const EF_VAL_IS_BYTES = 2048;

export const EF_VAL_IS_COLOR = 4096;

export const EF_VAL_IS_DATE = 8192;

export const EF_VAL_IS_VIDEO = 16384;

export const EF_VAL_IS_OBJECT = 32768;

export const EF_IS_DIRTY = 65536;

export const EF_IS_DERIVED = 131072;

export const EF_FLAG = 262144;

export const NF_STATEFUL = 524288;

export const NF_READONLY = 1048576;

export const NF_LOGGED = 2097152;

export const NF_SERVER = 4194304;

export const NF_TOPLEVEL = 8388608;

export const NF_UNSORTED = 16777216;

export const EF_DIRTY_OR_DERIVED = EF_IS_DIRTY | EF_IS_DERIVED;

export const TYPES_WHERE_U_NUM = EF_VAL_IS_NUM;

export const EF_NUM_TYPES = EF_VAL_IS_U | EF_VAL_IS_ERR | EF_VAL_IS_NUM;

export const EF_MASK_TYPE = 65535;

export const EF_CLEAR_TYPE = 4294901760;

export const WINDOW_BORDER = 2.5;

export const COLOR_WIN_BORDER = 11776947;

export const ONE_72 = 1 / 72;

export const ONE_25 = 1 / 25.4;

export const EMPTY_RECT = new Rectangle(-1e3, -1e3, 0, 0);

export var ENUMS = [];

export const al = FIRST_ENUM + 1;

ENUMS[FIRST_ENUM + 1] = "al";

export const pt = FIRST_ENUM + 2;

ENUMS[FIRST_ENUM + 2] = "pt";

export const px = FIRST_ENUM + 3;

ENUMS[FIRST_ENUM + 3] = "px", ENUMS[9007194157790523] = "a_find", ENUMS[9007191603303728] = "find_start", ENUMS[9007192689371859] = "find_len", FIELDS[9007191603303728] = !0, FIELDS[9007192689371859] = !0, 
ENUMS[9007192534696881] = "a_find_repl", ENUMS[9007193956346111] = "find_patt", ENUMS[9007194250103617] = "repl_patt", FIELDS[9007193956346111] = !0, FIELDS[9007193956346111] = !0;

export let time_launched;

export let now;

export let now_raw;

export let time_launched_raw;

export let elapsed;

export let elapsed_raw;

export let g_time_scale = 1;

export let g_era_dilated;

export let g_era_raw;

export let monitored_draw_F = new a_function(_M, "fallback_drawer", fallback_drawer);

export const MONDAY = 1;

export const TUESDAY = 2;

export const WEDNESDAY = 3;

export const THURSDAY = 4;

export const FRIDAY = 5;

export const SATURDAY = 6;

export const SUNDAY = 7;

export const BIG_ENDIAN = 9007191781826255;

ENUMS[9007191781826255] = "BIG_ENDIAN";

export const BLENDMODE_ADD = 9007193208486009;

ENUMS[9007193208486009] = "BLENDMODE_ADD";

export const BLENDMODE_ALPHA = 9007190010329114;

ENUMS[9007190010329114] = "BLENDMODE_ALPHA";

export const BLENDMODE_DARKEN = 9007190800059581;

ENUMS[9007190800059581] = "BLENDMODE_DARKEN";

export const BLENDMODE_DIFFERENCE = 9007191076336153;

ENUMS[9007191076336153] = "BLENDMODE_DIFFERENCE";

export const BLENDMODE_ERASE = 9007192198043080;

ENUMS[9007192198043080] = "BLENDMODE_ERASE";

export const BLENDMODE_HARDLIGHT = 9007190801031541;

ENUMS[9007190801031541] = "BLENDMODE_HARDLIGHT";

export const BLENDMODE_INVERT = 9007194240042666;

ENUMS[9007194240042666] = "BLENDMODE_INVERT";

export const BLENDMODE_LAYER = 9007191933818223;

ENUMS[9007191933818223] = "BLENDMODE_LAYER";

export const BLENDMODE_LIGHTEN = 9007190296892853;

ENUMS[9007190296892853] = "BLENDMODE_LIGHTEN";

export const BLENDMODE_MULTIPLY = 9007194046246514;

ENUMS[9007194046246514] = "BLENDMODE_MULTIPLY";

export const BLENDMODE_NORMAL = 9007193065834577;

ENUMS[9007193065834577] = "BLENDMODE_NORMAL";

export const BLENDMODE_OVERLAY = 9007190118029762;

ENUMS[9007190118029762] = "BLENDMODE_OVERLAY";

export const BLENDMODE_SCREEN = 9007191051024702;

ENUMS[9007191051024702] = "BLENDMODE_SCREEN";

export const BLENDMODE_SHADER = 9007190653012907;

ENUMS[9007190653012907] = "BLENDMODE_SHADER";

export const BLENDMODE_SUBTRACT = 9007191223567846;

ENUMS[9007191223567846] = "BLENDMODE_SUBTRACT";

export const BODY_BINARY = 9007190977491561;

ENUMS[9007190977491561] = "BODY_BINARY";

export const BODY_HTML = 9007192304658121;

ENUMS[9007192304658121] = "BODY_HTML";

export const BODY_JSON = 9007193587149102;

ENUMS[9007193587149102] = "BODY_JSON";

export const BODY_PLAIN = 9007194200689272;

ENUMS[9007194200689272] = "BODY_PLAIN";

export const CAP_BUTT = 9007192063538927;

ENUMS[9007192063538927] = "CAP_BUTT";

export const CAP_ROUND = 9007191671167298;

ENUMS[9007191671167298] = "CAP_ROUND";

export const CAP_SQUARE = 9007190564166513;

ENUMS[9007190564166513] = "CAP_SQUARE";

export const CENTER = 9007192241868086;

ENUMS[9007192241868086] = "CENTER";

export const CPU_ARM = 9007190976469578;

ENUMS[9007190976469578] = "CPU_ARM";

export const CPU_INTEL = 9007193832875584;

ENUMS[9007193832875584] = "CPU_INTEL";

export const CSTATUS_CLOSED = 9007192594805835;

ENUMS[9007192594805835] = "CSTATUS_CLOSED";

export const CSTATUS_CONNECTED = 9007191710958010;

ENUMS[9007191710958010] = "CSTATUS_CONNECTED";

export const CSTATUS_CONNECTING = 9007191283946301;

ENUMS[9007191283946301] = "CSTATUS_CONNECTING";

export const CSTATUS_DATA = 9007190112820063;

ENUMS[9007190112820063] = "CSTATUS_DATA";

export const CSTATUS_DISCONNECTING = 9007191823452739;

ENUMS[9007191823452739] = "CSTATUS_DISCONNECTING";

export const CSTATUS_NO_ANSWER = 9007194263818523;

ENUMS[9007194263818523] = "CSTATUS_NO_ANSWER";

export const CSTATUS_NO_AUTH = 9007190790542995;

ENUMS[9007190790542995] = "CSTATUS_NO_AUTH";

export const CURRENCY_AUD = 9007192475718373;

ENUMS[9007192475718373] = "AUD";

export const CURRENCY_BGN = 9007193705641312;

ENUMS[9007193705641312] = "BGN";

export const CURRENCY_BRL = 9007193167036291;

ENUMS[9007193167036291] = "BRL";

export const CURRENCY_CAD = 9007191208151055;

ENUMS[9007191208151055] = "CAD";

export const CURRENCY_CHF = 9007191743607840;

ENUMS[9007191743607840] = "CHF";

export const CURRENCY_CNY = 9007191123130127;

ENUMS[9007191123130127] = "CNY";

export const CURRENCY_CZK = 9007192366645409;

ENUMS[9007192366645409] = "CZK";

export const CURRENCY_DKK = 9007191281604017;

ENUMS[9007191281604017] = "DKK";

export const CURRENCY_EUR = 9007194034713791;

ENUMS[9007194034713791] = "€";

export const CURRENCY_GBP = 9007193328217132;

ENUMS[9007193328217132] = "£";

export const CURRENCY_HKD = 9007193272004328;

ENUMS[9007193272004328] = "HKD";

export const CURRENCY_HRK = 9007193254093876;

ENUMS[9007193254093876] = "HRK";

export const CURRENCY_HUF = 9007193303882280;

ENUMS[9007193303882280] = "HUF";

export const CURRENCY_IDR = 9007190070295358;

ENUMS[9007190070295358] = "IDR";

export const CURRENCY_ILS = 9007194112318441;

ENUMS[9007194112318441] = "ILS";

export const CURRENCY_INR = 9007191008856284;

ENUMS[9007191008856284] = "INR";

export const CURRENCY_JPY = 9007191289355106;

ENUMS[9007191289355106] = "¥";

export const CURRENCY_KRW = 9007190316430293;

ENUMS[9007190316430293] = "KRW";

export const CURRENCY_MXN = 9007191000215538;

ENUMS[9007191000215538] = "MXN";

export const CURRENCY_MYR = 9007191369470251;

ENUMS[9007191369470251] = "MYR";

export const CURRENCY_NOK = 9007192131762283;

ENUMS[9007192131762283] = "NOK";

export const CURRENCY_NZD = 9007192850095591;

ENUMS[9007192850095591] = "NZD";

export const CURRENCY_PHP = 9007193986204375;

ENUMS[9007193986204375] = "PHP";

export const CURRENCY_PLN = 9007194086281709;

ENUMS[9007194086281709] = "PLN";

export const CURRENCY_RON = 9007192893301880;

ENUMS[9007192893301880] = "RON";

export const CURRENCY_RUB = 9007191890293502;

ENUMS[9007191890293502] = "RUB";

export const CURRENCY_SEK = 9007191131987602;

ENUMS[9007191131987602] = "SEK";

export const CURRENCY_SGD = 9007194201894521;

ENUMS[9007194201894521] = "SGD";

export const CURRENCY_THB = 9007190622087537;

ENUMS[9007190622087537] = "THB";

export const CURRENCY_TRY = 9007190771408822;

ENUMS[9007190771408822] = "TRY";

export const CURRENCY_USD = 9007191785707743;

ENUMS[9007191785707743] = "$";

export const CURRENCY_ZAR = 9007190538585226;

ENUMS[9007190538585226] = "ZAR";

export const CURS_ALIAS = 9007190207080347;

ENUMS[9007190207080347] = "CURS_ALIAS";

export const CURS_ARROW = 9007193647841682;

ENUMS[9007193647841682] = "CURS_ARROW";

export const CURS_CELL = 9007193083265441;

ENUMS[9007193083265441] = "CURS_CELL";

export const CURS_CONTEXT = 9007191905619856;

ENUMS[9007191905619856] = "CURS_CONTEXT";

export const CURS_COPY = 9007191552930064;

ENUMS[9007191552930064] = "CURS_COPY";

export const CURS_CROSSHAIR = 9007193274530039;

ENUMS[9007193274530039] = "CURS_CROSSHAIR";

export const CURS_CUSTOM = 9007190161810882;

ENUMS[9007190161810882] = "CURS_CUSTOM";

export const CURS_DIAG_LEFT = 9007190666559294;

ENUMS[9007190666559294] = "CURS_DIAG_LEFT";

export const CURS_DIAG_RIGHT = 9007193324379315;

ENUMS[9007193324379315] = "CURS_DIAG_RIGHT";

export const CURS_FINGER = 9007192070383776;

ENUMS[9007192070383776] = "CURS_FINGER";

export const CURS_GRABBING = 9007193359110701;

ENUMS[9007193359110701] = "CURS_GRABBING";

export const CURS_HAND = 9007191510587780;

ENUMS[9007191510587780] = "CURS_HAND";

export const CURS_HIDE = 9007193882670433;

ENUMS[9007193882670433] = "CURS_HIDE";

export const CURS_IBEAM = 9007192946793023;

ENUMS[9007192946793023] = "CURS_IBEAM";

export const CURS_MOVE = 9007192417875656;

ENUMS[9007192417875656] = "CURS_MOVE";

export const CURS_NOT = 9007190841203262;

ENUMS[9007190841203262] = "CURS_NOT";

export const CURS_QUESTION = 9007190982721729;

ENUMS[9007190982721729] = "CURS_QUESTION";

export const CURS_RESIZE_COL = 9007192794129356;

ENUMS[9007192794129356] = "CURS_RESIZE_COL";

export const CURS_RESIZE_E = 9007190282529329;

ENUMS[9007190282529329] = "CURS_RESIZE_E";

export const CURS_RESIZE_N = 9007190097975520;

ENUMS[9007190097975520] = "CURS_RESIZE_N";

export const CURS_RESIZE_NE = 9007193597645759;

ENUMS[9007193597645759] = "CURS_RESIZE_NE";

export const CURS_RESIZE_NW = 9007193899642901;

ENUMS[9007193899642901] = "CURS_RESIZE_NW";

export const CURS_RESIZE_ROW = 9007191394511618;

ENUMS[9007191394511618] = "CURS_RESIZE_ROW";

export const CURS_RESIZE_S = 9007190584526471;

ENUMS[9007190584526471] = "CURS_RESIZE_S";

export const CURS_RESIZE_SE = 9007192595770214;

ENUMS[9007192595770214] = "CURS_RESIZE_SE";

export const CURS_RESIZE_SW = 9007192830656880;

ENUMS[9007192830656880] = "CURS_RESIZE_SW";

export const CURS_RESIZE_W = 9007190517415995;

ENUMS[9007190517415995] = "CURS_RESIZE_W";

export const CURS_WAIT = 9007192831767908;

ENUMS[9007192831767908] = "CURS_WAIT";

export const CURS_ZOOM_IN = 9007193787378752;

ENUMS[9007193787378752] = "CURS_ZOOM_IN";

export const CURS_ZOOM_OUT = 9007192468555045;

ENUMS[9007192468555045] = "CURS_ZOOM_OUT";

export const DRAW_ROW_BACK = 9007191892658772;

ENUMS[9007191892658772] = "DRAW_ROW_BACK";

export const ENCODE_BINARY = 9007192110016779;

ENUMS[9007192110016779] = "ENCODE_BINARY";

export const ENCODE_FORM_URL = 9007190865080266;

ENUMS[9007190865080266] = "ENCODE_FORM_URL";

export const ENCODE_MULTIPART = 9007192496651046;

ENUMS[9007192496651046] = "ENCODE_MULTIPART";

export const ENCODE_PLAIN = 9007194097808478;

ENUMS[9007194097808478] = "ENCODE_PLAIN";

export const EV_ALT_TAP = 9007194105015026;

ENUMS[9007194105015026] = "EV_ALT_TAP";

export const EV_ANIM_BLOCK = 9007191727908086;

ENUMS[9007191727908086] = "EV_ANIM_BLOCK";

export const EV_ANIM_CURVE = 9007194023992688;

ENUMS[9007194023992688] = "EV_ANIM_CURVE";

export const EV_ANIM_SPRITE = 9007193000576696;

ENUMS[9007193000576696] = "EV_ANIM_SPRITE";

export const EV_ANIM_VAL = 9007190546483344;

ENUMS[9007190546483344] = "EV_ANIM_VAL";

export const EV_DOUBLE_TAP = 9007193618146078;

ENUMS[9007193618146078] = "EV_DOUBLE_TAP";

export const EV_DRAG_BEGIN = 9007193246022061;

ENUMS[9007193246022061] = "EV_DRAG_BEGIN";

export const EV_DRAG_END = 9007193849965437;

ENUMS[9007193849965437] = "EV_DRAG_END";

export const EV_DRAG_MOVE = 9007192330010565;

ENUMS[9007192330010565] = "EV_DRAG_MOVE";

export const EV_DRAW = 9007191483458599;

ENUMS[9007191483458599] = "EV_DRAW";

export const EV_ENTER = 9007191199549721;

ENUMS[9007191199549721] = "EV_ENTER";

export const EV_GAMECTRL = 9007192618363074;

ENUMS[9007192618363074] = "EV_GAMECTRL";

export const EV_GEST_BEGIN = 9007194179688080;

ENUMS[9007194179688080] = "EV_GEST_BEGIN";

export const EV_GEST_END = 9007192253491484;

ENUMS[9007192253491484] = "EV_GEST_END";

export const EV_HOLD = 9007192309436500;

ENUMS[9007192309436500] = "EV_HOLD";

export const EV_HOVER = 9007191105955681;

ENUMS[9007191105955681] = "EV_HOVER";

export const EV_INIT = 9007193810427111;

ENUMS[9007193810427111] = "EV_INIT";

export const EV_INPUT = 9007190575294431;

ENUMS[9007190575294431] = "EV_INPUT";

export const EV_LEAVE = 9007193585112076;

ENUMS[9007193585112076] = "EV_LEAVE";

export const EV_KEYBOARD = 9007192323348144;

ENUMS[9007192323348144] = "EV_KEYBOARD";

export const EV_MID_TAP = 9007190942575011;

ENUMS[9007190942575011] = "EV_MID_TAP";

export const EV_NOP = 9007194138818458;

ENUMS[9007194138818458] = "EV_NOP";

export const EV_RESIZE = 9007191878931189;

ENUMS[9007191878931189] = "EV_RESIZE";

export const EV_ROTATE = 9007192337726958;

ENUMS[9007192337726958] = "EV_ROTATE";

export const EV_STOP = 9007191063356489;

ENUMS[9007191063356489] = "EV_STOP";

export const EV_SWIPE = 9007194294477221;

ENUMS[9007194294477221] = "EV_SWIPE";

export const EV_TAP = 9007192665263286;

ENUMS[9007192665263286] = "EV_TAP";

export const EV_TCP_CLOSE = 9007192646676527;

ENUMS[9007192646676527] = "EV_TCP_CLOSE";

export const EV_TCP_CONNECTED = 9007190110803356;

ENUMS[9007190110803356] = "EV_TCP_CONNECTED";

export const EV_TCP_DATA = 9007193000086769;

ENUMS[9007193000086769] = "EV_TCP_DATA";

export const EV_TCP_ERR = 9007191025146552;

ENUMS[9007191025146552] = "EV_TCP_ERR";

export const EV_TIMER = 9007190083598342;

ENUMS[9007190083598342] = "EV_TIMER";

export const EV_TRACK_GRID = 9007193638870201;

ENUMS[9007193638870201] = "EV_TRACK_GRID";

export const EV_TRACK_PLAIN = 9007192772190303;

ENUMS[9007192772190303] = "EV_TRACK_PLAIN";

export const EV_TRACK_TABLE = 9007194034012919;

ENUMS[9007194034012919] = "EV_TRACK_TABLE";

export const EV_ZOOM = 9007191052370350;

ENUMS[9007191052370350] = "EV_ZOOM";

export const F_app_hash = 9007190985638604;

ENUMS[9007190985638604] = "app_hash";

export const F_app_name = 9007191050153831;

ENUMS[9007191050153831] = "app_name";

export const F_app_version = 9007193701356128;

ENUMS[9007193701356128] = "app_version";

export const F_args = 9007190339627053;

ENUMS[9007190339627053] = "args";

export const F_base_to_unit = 9007191635159450;

ENUMS[9007191635159450] = "base_to_unit";

export const F_bchildren = 9007191524061537;

ENUMS[9007191524061537] = "bchildren";

export const F_bdepth = 9007192705851919;

ENUMS[9007192705851919] = "bdepth";

export const F_bexpanded = 9007191727747299;

ENUMS[9007191727747299] = "bexpanded";

export const F_bkind = 9007194173052024;

ENUMS[9007194173052024] = "bkind";

export const F_bname = 9007192768869493;

ENUMS[9007192768869493] = "bname";

export const F_bobject = 9007194017393109;

ENUMS[9007194017393109] = "bobject";

export const F_box = 9007190237722809;

ENUMS[9007190237722809] = "box";

export const F_boxtot = 9007193642230068;

ENUMS[9007193642230068] = "boxtot";

export const F_btracks = 9007191843782978;

ENUMS[9007191843782978] = "btracks";

export const F_callback = 9007193913055147;

ENUMS[9007193913055147] = "callback";

export const F_cell_id = 9007191930494972;

ENUMS[9007191930494972] = "cell_id";

export const F_cell_seq = 9007190189818832;

ENUMS[9007190189818832] = "cell_seq";

export const F_cell = 9007192739192540;

ENUMS[9007192739192540] = "cell";

export const F_client_bytes_in = 9007192330024275;

ENUMS[9007192330024275] = "client_bytes_in";

export const F_client_bytes_out = 9007193907169216;

ENUMS[9007193907169216] = "client_bytes_out";

export const F_client_channel = 9007190900478027;

ENUMS[9007190900478027] = "client_channel";

export const F_client_status = 9007191092912066;

ENUMS[9007191092912066] = "client_status";

export const F_code_coverage = 9007192968571124;

ENUMS[9007192968571124] = "code_coverage";

export const F_cpu_kind = 9007192696949221;

ENUMS[9007192696949221] = "cpu_kind";

export const F_cursor_changed = 9007191768871061;

ENUMS[9007191768871061] = "cursor_changed";

export const F_date_city = 9007190344604278;

ENUMS[9007190344604278] = "date_city";

export const F_date_day = 9007193811616089;

ENUMS[9007193811616089] = "date_day";

export const F_date_hour = 9007191709337003;

ENUMS[9007191709337003] = "date_hour";

export const F_date_minute = 9007190784173965;

ENUMS[9007190784173965] = "date_minute";

export const F_date_month = 9007193351461641;

ENUMS[9007193351461641] = "date_month";

export const F_date_second = 9007192615114217;

ENUMS[9007192615114217] = "date_second";

export const F_date_weekday = 9007193920084361;

ENUMS[9007193920084361] = "date_weekday";

export const F_date_year = 9007190473901776;

ENUMS[9007190473901776] = "date_year";

export const F_db_name = 9007192007664828;

ENUMS[9007192007664828] = "db_name";

export const F_db_stores = 9007190878152881;

ENUMS[9007190878152881] = "db_stores";

export const F_db_ver = 9007192803634664;

ENUMS[9007192803634664] = "db_ver";

export const F_debug_date = 9007191616321804;

ENUMS[9007191616321804] = "debug_date";

export const F_debug_kind = 9007193734782890;

ENUMS[9007193734782890] = "debug_kind";

export const F_debug_note = 9007190554134004;

ENUMS[9007190554134004] = "debug_note";

export const F_dpi = 9007193660320951;

ENUMS[9007193660320951] = "dpi";

export const F_env_version = 9007192684405836;

ENUMS[9007192684405836] = "env_version";

export const F_evkind = 9007193830023889;

ENUMS[9007193830023889] = "evkind";

export const F_fam_base = 9007192510327428;

ENUMS[9007192510327428] = "fam_base";

export const F_fam_dim = 9007191144904389;

ENUMS[9007191144904389] = "fam_dim";

export const F_fam_nonlinear = 9007192973195881;

ENUMS[9007192973195881] = "fam_nonlinear";

export const F_fam_units = 9007193864233088;

ENUMS[9007193864233088] = "fam_units";

export const F_fsm_state = 9007191932088960;

ENUMS[9007191932088960] = "fsm_state";

export const F_full_screen = 9007193702789330;

ENUMS[9007193702789330] = "full_screen";

export const F_gamec_butt_down = 9007192019487062;

ENUMS[9007192019487062] = "gamec_butt_down";

export const F_gamec_butt_ix = 9007190617414951;

ENUMS[9007190617414951] = "gamec_butt_ix";

export const F_gamec_id = 9007192957591353;

ENUMS[9007192957591353] = "gamec_id";

export const F_gamec_joystick_l = 9007190685355017;

ENUMS[9007190685355017] = "gamec_joystick_l";

export const F_gamec_joystick_r = 9007190584689303;

ENUMS[9007190584689303] = "gamec_joystick_r";

export const F_gamec_trigger_l = 9007191407266315;

ENUMS[9007191407266315] = "gamec_trigger_l";

export const F_gamec_trigger_r = 9007191642152981;

ENUMS[9007191642152981] = "gamec_trigger_r";

export const F_global_x = 9007193122768448;

ENUMS[9007193122768448] = "global_x";

export const F_global_y = 9007193139546067;

ENUMS[9007193139546067] = "global_y";

export const F_grad_angle = 9007191342121240;

ENUMS[9007191342121240] = "grad_angle";

export const F_grad_centerx = 9007192703286708;

ENUMS[9007192703286708] = "grad_centerx";

export const F_grad_centery = 9007192720064327;

ENUMS[9007192720064327] = "grad_centery";

export const F_grad_focusx = 9007190751560561;

ENUMS[9007190751560561] = "grad_focusx";

export const F_grad_focusy = 9007190734782942;

ENUMS[9007190734782942] = "grad_focusy";

export const F_grad_radius_inner = 9007192092005572;

ENUMS[9007192092005572] = "grad_radius_inner";

export const F_grad_radius_outer = 9007192096884511;

ENUMS[9007192096884511] = "grad_radius_outer";

export const F_grad_shape = 9007191080998438;

ENUMS[9007191080998438] = "grad_shape";

export const F_grad_stops = 9007191284959010;

ENUMS[9007191284959010] = "grad_stops";

export const F_grad_sysobj = 9007190591095843;

ENUMS[9007190591095843] = "grad_sysobj";

export const F_hardware_id = 9007194078519856;

ENUMS[9007194078519856] = "hardware_id";

export const F_height = 9007191065112171;

ENUMS[9007191065112171] = "height";

export const F_hist_absorber = 9007190177249779;

ENUMS[9007190177249779] = "hist_absorber";

export const F_hist_cell_cum = 9007192177330549;

ENUMS[9007192177330549] = "hist_cell_cum";

export const F_hist_cell_id = 9007192249155495;

ENUMS[9007192249155495] = "hist_cell_id";

export const F_hist_cell = 9007193573752369;

ENUMS[9007193573752369] = "hist_cell";

export const F_hist_rawx = 9007190242492711;

ENUMS[9007190242492711] = "hist_rawx";

export const F_http_body_type = 9007193353932454;

ENUMS[9007193353932454] = "http_body_type";

export const F_http_body = 9007191020361357;

ENUMS[9007191020361357] = "http_body";

export const F_http_bytes_now = 9007192005332123;

ENUMS[9007192005332123] = "http_bytes_now";

export const F_http_bytes_total = 9007193563310425;

ENUMS[9007193563310425] = "http_bytes_total";

export const F_http_headers = 9007192406940129;

ENUMS[9007192406940129] = "http_headers";

export const F_http_phase = 9007190574098480;

ENUMS[9007190574098480] = "http_phase";

export const F_http_status = 9007193847231911;

ENUMS[9007193847231911] = "http_status";

export const F_http_sysobj = 9007192115372715;

ENUMS[9007192115372715] = "http_sysobj";

export const F_hue = 9007192260774534;

ENUMS[9007192260774534] = "hue";

export const F_in_autofill = 9007192741706158;

ENUMS[9007192741706158] = "in_autofill";

export const F_in_disabled = 9007191391531352;

ENUMS[9007191391531352] = "in_disabled";

export const F_in_errmsg = 9007192770646744;

ENUMS[9007192770646744] = "in_errmsg";

export const F_in_form_ready = 9007191837187538;

ENUMS[9007191837187538] = "in_form_ready";

export const F_in_hint = 9007193269270537;

ENUMS[9007193269270537] = "in_hint";

export const F_in_keyboard = 9007193098511693;

ENUMS[9007193098511693] = "in_keyboard";

export const F_in_kind = 9007191640276818;

ENUMS[9007191640276818] = "in_kind";

export const F_in_label = 9007194015078766;

ENUMS[9007194015078766] = "in_label";

export const F_in_maxlen = 9007192681926341;

ENUMS[9007192681926341] = "in_maxlen";

export const F_in_maxval = 9007192141470485;

ENUMS[9007192141470485] = "in_maxval";

export const F_in_minlen = 9007191103869283;

ENUMS[9007191103869283] = "in_minlen";

export const F_in_minval = 9007191338915331;

ENUMS[9007191338915331] = "in_minval";

export const F_in_name = 9007192892602323;

ENUMS[9007192892602323] = "in_name";

export const F_in_ok = 9007193455944754;

ENUMS[9007193455944754] = "in_ok";

export const F_in_pattern = 9007190727149130;

ENUMS[9007190727149130] = "in_pattern";

export const F_in_required = 9007193554326105;

ENUMS[9007193554326105] = "in_required";

export const F_in_spellcheck = 9007191526894282;

ENUMS[9007191526894282] = "in_spellcheck";

export const F_in_step = 9007192575167474;

ENUMS[9007192575167474] = "in_step";

export const F_in_tab = 9007190601653327;

ENUMS[9007190601653327] = "in_tab";

export const F_in_tip = 9007190633928637;

ENUMS[9007190633928637] = "in_tip";

export const F_in_validator = 9007194273742238;

ENUMS[9007194273742238] = "in_validator";

export const F_in_value = 9007190252935937;

ENUMS[9007190252935937] = "in_value";

export const F_index_multi = 9007193267331694;

ENUMS[9007193267331694] = "index_multi";

export const F_index_name = 9007191391597730;

ENUMS[9007191391597730] = "index_name";

export const F_index_unique = 9007193945027562;

ENUMS[9007193945027562] = "index_unique";

export const F_is_alt = 9007190005667004;

ENUMS[9007190005667004] = "is_alt";

export const F_is_cmd = 9007193687020619;

ENUMS[9007193687020619] = "is_cmd";

export const F_is_connected = 9007193609258288;

ENUMS[9007193609258288] = "is_connected";

export const F_is_ctrl = 9007191919774788;

ENUMS[9007191919774788] = "is_ctrl";

export const F_is_shift = 9007193510209703;

ENUMS[9007193510209703] = "is_shift";

export const F_keycode = 9007192424042526;

ENUMS[9007192424042526] = "keycode";

export const F_left = 9007191706667889;

ENUMS[9007191706667889] = "left";

export const F_link_data = 9007193149612877;

ENUMS[9007193149612877] = "link_data";

export const F_link_local_port = 9007191183148878;

ENUMS[9007191183148878] = "link_local_port";

export const F_link_remote_port = 9007192625502279;

ENUMS[9007192625502279] = "link_remote_port";

export const F_link_socket = 9007191260533300;

ENUMS[9007191260533300] = "link_socket";

export const F_link_state = 9007194263281102;

ENUMS[9007194263281102] = "link_state";

export const F_link_timeout = 9007193503325680;

ENUMS[9007193503325680] = "link_timeout";

export const F_link_url = 9007190416315206;

ENUMS[9007190416315206] = "link_url";

export const F_major_firstx = 9007193711993708;

ENUMS[9007193711993708] = "major_firstx";

export const F_major_steps = 9007193823541613;

ENUMS[9007193823541613] = "major_steps";

export const F_major_stepx = 9007193638987804;

ENUMS[9007193638987804] = "major_stepx";

export const F_micro_steps = 9007191607397904;

ENUMS[9007191607397904] = "micro_steps";

export const F_mod_const = 9007190778220416;

ENUMS[9007190778220416] = "mod_const";

export const F_mod_enums = 9007193473944509;

ENUMS[9007193473944509] = "mod_enums";

export const F_mod_funcs = 9007191395250568;

ENUMS[9007191395250568] = "mod_funcs";

export const F_mod_recs = 9007191878925458;

ENUMS[9007191878925458] = "mod_recs";

export const F_mod_ufams = 9007193162351625;

ENUMS[9007193162351625] = "mod_ufams";

export const F_mod_vars = 9007193863432299;

ENUMS[9007193863432299] = "mod_vars";

export const F_monitor_active = 9007191310033365;

ENUMS[9007191310033365] = "monitor_active";

export const F_ms_dest = 9007192790335809;

ENUMS[9007192790335809] = "ms_dest";

export const F_ms_funcname = 9007191172220904;

ENUMS[9007191172220904] = "ms_funcname";

export const F_ms_kind = 9007191809881671;

ENUMS[9007191809881671] = "ms_kind";

export const F_ms_module = 9007192387639201;

ENUMS[9007192387639201] = "ms_module";

export const F_ms_newval = 9007191501268188;

ENUMS[9007191501268188] = "ms_newval";

export const F_ms_oldval = 9007194171088921;

ENUMS[9007194171088921] = "ms_oldval";

export const F_ms_where = 9007194143747484;

ENUMS[9007194143747484] = "ms_where";

export const F_ncells = 9007190572849627;

ENUMS[9007190572849627] = "ncells";

export const F_notch_height = 9007191198576528;

ENUMS[9007191198576528] = "notch_height";

export const F_notch_width = 9007192438172481;

ENUMS[9007192438172481] = "notch_width";

export const F_opacity = 9007193881642181;

ENUMS[9007193881642181] = "opacity";

export const F_opt_children = 9007191074573613;

ENUMS[9007191074573613] = "opt_children";

export const F_opt_disabled = 9007190594341658;

ENUMS[9007190594341658] = "opt_disabled";

export const F_opt_label = 9007191061925592;

ENUMS[9007191061925592] = "opt_label";

export const F_opt_selected = 9007192931988523;

ENUMS[9007192931988523] = "opt_selected";

export const F_opt_val = 9007191226420945;

ENUMS[9007191226420945] = "opt_val";

export const F_os_kind = 9007192093146965;

ENUMS[9007192093146965] = "os_kind";

export const F_os_language = 9007191811562369;

ENUMS[9007191811562369] = "os_language";

export const F_os_modal = 9007191486739992;

ENUMS[9007191486739992] = "os_modal";

export const F_os_version = 9007191114852513;

ENUMS[9007191114852513] = "os_version";

export const F_pending_delay = 9007190405524235;

ENUMS[9007190405524235] = "pending_delay";

export const F_pending_interval = 9007192438173725;

ENUMS[9007192438173725] = "pending_interval";

export const F_pending_limit = 9007190067147759;

ENUMS[9007190067147759] = "pending_limit";

export const F_pending_parms = 9007192550771863;

ENUMS[9007192550771863] = "pending_parms";

export const F_pending_prereq = 9007193690019779;

ENUMS[9007193690019779] = "pending_prereq";

export const F_pending_targtime = 9007192481613845;

ENUMS[9007192481613845] = "pending_targtime";

export const F_polar_angle = 9007193998710740;

ENUMS[9007193998710740] = "polar_angle";

export const F_polar_radius = 9007192867428455;

ENUMS[9007192867428455] = "polar_radius";

export const F_row_kind = 9007194217458287;

ENUMS[9007194217458287] = "row_kind";

export const F_s_big_step_size = 9007191004530853;

ENUMS[9007191004530853] = "s_big_step_size";

export const F_s_block_id = 9007194173043653;

ENUMS[9007194173043653] = "s_block_id";

export const F_s_content_size = 9007191211659509;

ENUMS[9007191211659509] = "s_content_size";

export const F_s_position = 9007193141830829;

ENUMS[9007193141830829] = "s_position";

export const F_s_step_size = 9007190382695348;

ENUMS[9007190382695348] = "s_step_size";

export const F_s_window_size = 9007191764866610;

ENUMS[9007191764866610] = "s_window_size";

export const F_saturation = 9007192754175272;

ENUMS[9007192754175272] = "saturation";

export const F_screen_dpi = 9007190692964076;

ENUMS[9007190692964076] = "screen_dpi";

export const F_screen_horz = 9007191043077712;

ENUMS[9007191043077712] = "screen_horz";

export const F_screen_vert = 9007191931743462;

ENUMS[9007191931743462] = "screen_vert";

export const F_stop_color = 9007192549699624;

ENUMS[9007192549699624] = "stop_color";

export const F_stop_pos = 9007191613969081;

ENUMS[9007191613969081] = "stop_pos";

export const F_store_autoinc = 9007191243807719;

ENUMS[9007191243807719] = "store_autoinc";

export const F_store_indices = 9007190832054383;

ENUMS[9007190832054383] = "store_indices";

export const F_store_name = 9007191598807537;

ENUMS[9007191598807537] = "store_name";

export const F_sysobj = 9007191699358926;

ENUMS[9007191699358926] = "sysobj";

export const F_top = 9007190493896459;

ENUMS[9007190493896459] = "top";

export const F_touch_id = 9007193790632677;

ENUMS[9007193790632677] = "touch_id";

export const F_touch_kind = 9007191578715210;

ENUMS[9007191578715210] = "touch_kind";

export const F_ui_language = 9007190058755785;

ENUMS[9007190058755785] = "ui_language";

export const F_unicode = 9007193563866243;

ENUMS[9007193563866243] = "unicode";

export const F_unit_factor = 9007193027031068;

ENUMS[9007193027031068] = "unit_factor";

export const F_unit_to_base = 9007191891603742;

ENUMS[9007191891603742] = "unit_to_base";

export const F_value = 9007190189063009;

ENUMS[9007190189063009] = "value";

export const F_vv_canonical = 9007192897808113;

ENUMS[9007192897808113] = "vv_canonical";

export const F_vv_cat = 9007190597610171;

ENUMS[9007190597610171] = "vv_cat";

export const F_vv_data_xy = 9007190248349349;

ENUMS[9007190248349349] = "vv_data_xy";

export const F_vv_default = 9007191915976154;

ENUMS[9007191915976154] = "vv_default";

export const F_vv_dim = 9007191990098741;

ENUMS[9007191990098741] = "vv_dim";

export const F_vv_expand = 9007193970411501;

ENUMS[9007193970411501] = "vv_expand";

export const F_vv_fields = 9007192545436688;

ENUMS[9007192545436688] = "vv_fields";

export const F_vv_funck = 9007192275848104;

ENUMS[9007192275848104] = "vv_funck";

export const F_vv_parmk = 9007190323301072;

ENUMS[9007190323301072] = "vv_parmk";

export const F_vv_parmn = 9007190407189167;

ENUMS[9007190407189167] = "vv_parmn";

export const F_vv_parms = 9007190189080120;

ENUMS[9007190189080120] = "vv_parms";

export const F_vv_rec = 9007191419025501;

ENUMS[9007191419025501] = "vv_rec";

export const F_vv_typek = 9007191523723486;

ENUMS[9007191523723486] = "vv_typek";

export const F_vv_units = 9007190115236112;

ENUMS[9007190115236112] = "vv_units";

export const F_vv_val = 9007194200798904;

ENUMS[9007194200798904] = "vv_val";

export const F_when = 9007193511812616;

ENUMS[9007193511812616] = "when";

export const F_width = 9007193183634940;

ENUMS[9007193183634940] = "width";

export const F_window_horz = 9007192929002776;

ENUMS[9007192929002776] = "window_horz";

export const F_window_vert = 9007190230517054;

ENUMS[9007190230517054] = "window_vert";

export const F_x = 9007191158315608;

ENUMS[9007191158315608] = "x";

export const F_y = 9007191175093227;

ENUMS[9007191175093227] = "y";

export const F_z = 9007191191870846;

ENUMS[9007191191870846] = "z";

export const FK_CALC = 9007193861195824;

ENUMS[9007193861195824] = "FK_CALC";

export const FK_DERIVE = 9007190428331434;

ENUMS[9007190428331434] = "FK_DERIVE";

export const FK_DRAW = 9007193473915159;

ENUMS[9007193473915159] = "FK_DRAW";

export const FK_MACHINE = 9007190883568738;

ENUMS[9007190883568738] = "FK_MACHINE";

export const FLUSH = 9007190152489735;

ENUMS[9007190152489735] = "FLUSH";

export const FOL = 9007190417540516;

ENUMS[9007190417540516] = "FOL";

export const FOR_MEASURING = 9007193724925426;

ENUMS[9007193724925426] = "FOR_MEASURING";

export const FOR_PRINT = 9007194133252538;

ENUMS[9007194133252538] = "FOR_PRINT";

export const FOR_SCREEN = 9007193814014199;

ENUMS[9007193814014199] = "FOR_SCREEN";

export const HTTP_BUSY = 9007193089154801;

ENUMS[9007193089154801] = "HTTP_BUSY";

export const HTTP_DONE = 9007192780479252;

ENUMS[9007192780479252] = "HTTP_DONE";

export const HTTP_HEADERS = 9007190260036102;

ENUMS[9007190260036102] = "HTTP_HEADERS";

export const HTTP_START = 9007190514846168;

ENUMS[9007190514846168] = "HTTP_START";

export const HTTP_TIMEOUT = 9007193489829839;

ENUMS[9007193489829839] = "HTTP_TIMEOUT";

export const IDE_GROUP = 9007190212561997;

ENUMS[9007190212561997] = "IDE_GROUP";

export const IN_COLOR = 9007193896084384;

ENUMS[9007193896084384] = "IN_COLOR";

export const IN_DATE = 9007191428278593;

ENUMS[9007191428278593] = "IN_DATE";

export const IN_DATETIME = 9007191973531512;

ENUMS[9007191973531512] = "IN_DATETIME";

export const IN_EMAIL = 9007192515492303;

ENUMS[9007192515492303] = "IN_EMAIL";

export const IN_FILE = 9007191289194571;

ENUMS[9007191289194571] = "IN_FILE";

export const IN_MONTH = 9007193690478909;

ENUMS[9007193690478909] = "IN_MONTH";

export const IN_NUMBER = 9007190066732008;

ENUMS[9007190066732008] = "IN_NUMBER";

export const IN_PASSWORD = 9007192691973136;

ENUMS[9007192691973136] = "IN_PASSWORD";

export const IN_RANGE = 9007190605840218;

ENUMS[9007190605840218] = "IN_RANGE";

export const IN_TEL = 9007192769142178;

ENUMS[9007192769142178] = "IN_TEL";

export const IN_TEXT = 9007193396778358;

ENUMS[9007193396778358] = "IN_TEXT";

export const IN_TIME = 9007192632800300;

ENUMS[9007192632800300] = "IN_TIME";

export const IN_URL = 9007190407697254;

ENUMS[9007190407697254] = "IN_URL";

export const IN_WEEK = 9007192669880341;

ENUMS[9007192669880341] = "IN_WEEK";

export const JOINT_BEVEL = 9007192746461094;

ENUMS[9007192746461094] = "JOINT_BEVEL";

export const JOINT_MITER = 9007190364436411;

ENUMS[9007190364436411] = "JOINT_MITER";

export const JOINT_ROUND = 9007192159087542;

ENUMS[9007192159087542] = "JOINT_ROUND";

export const LANG_AMH = 9007192671193202;

ENUMS[9007192671193202] = "AMH";

export const LANG_ARA = 9007190134477402;

ENUMS[9007190134477402] = "ARA";

export const LANG_BEL = 9007190660603587;

ENUMS[9007190660603587] = "BEL";

export const LANG_BEN = 9007190694158825;

ENUMS[9007190694158825] = "BEN";

export const LANG_BUL = 9007190126382803;

ENUMS[9007190126382803] = "BUL";

export const LANG_BUR = 9007190629711373;

ENUMS[9007190629711373] = "BUR";

export const LANG_CAT = 9007192050476800;

ENUMS[9007192050476800] = "CAT";

export const LANG_CHS = 9007192435229204;

ENUMS[9007192435229204] = "CHS";

export const LANG_CHT = 9007192418451585;

ENUMS[9007192418451585] = "CHT";

export const LANG_CRO = 9007192501353942;

ENUMS[9007192501353942] = "CRO";

export const LANG_CZE = 9007191795414016;

ENUMS[9007191795414016] = "CZE";

export const LANG_DAN = 9007192616113231;

ENUMS[9007192616113231] = "DAN";

export const LANG_DEU = 9007193304583990;

ENUMS[9007193304583990] = "DEU";

export const LANG_ENG = 9007191338197928;

ENUMS[9007191338197928] = "ENG";

export const LANG_ENK = 9007191271087452;

ENUMS[9007191271087452] = "ENK";

export const LANG_ESL = 9007190619864620;

ENUMS[9007190619864620] = "ESL";

export const LANG_ESP = 9007190955417e3;

ENUMS[9007190955417e3] = "ESP";

export const LANG_FIN = 9007191973916929;

ENUMS[9007191973916929] = "FIN";

export const LANG_FRA = 9007191317868575;

ENUMS[9007191317868575] = "FRA";

export const LANG_FRC = 9007191351423813;

ENUMS[9007191351423813] = "FRC";

export const LANG_GEO = 9007190543802441;

ENUMS[9007190543802441] = "GEO";

export const LANG_GRE = 9007190641761204;

ENUMS[9007190641761204] = "GRE";

export const LANG_GUJ = 9007193275891314;

ENUMS[9007193275891314] = "GUJ";

export const LANG_HEB = 9007190185389899;

ENUMS[9007190185389899] = "HEB";

export const LANG_HIN = 9007193875671363;

ENUMS[9007193875671363] = "HIN";

export const LANG_HUN = 9007193878922767;

ENUMS[9007193878922767] = "HUN";

export const LANG_ICE = 9007191223918851;

ENUMS[9007191223918851] = "ICE";

export const LANG_IND = 9007190769098757;

ENUMS[9007190769098757] = "IND";

export const LANG_ITA = 9007191153998256;

ENUMS[9007191153998256] = "ITA";

export const LANG_JAP = 9007193001251419;

ENUMS[9007193001251419] = "JAP";

export const LANG_KOR = 9007191762726468;

ENUMS[9007191762726468] = "KOR";

export const LANG_MAL = 9007192711284782;

ENUMS[9007192711284782] = "MAL";

export const LANG_MAR = 9007192342177164;

ENUMS[9007192342177164] = "MAR";

export const LANG_NED = 9007190343662887;

ENUMS[9007190343662887] = "NED";

export const LANG_NOR = 9007190042651483;

ENUMS[9007190042651483] = "NOR";

export const LANG_ORI = 9007193024574120;

ENUMS[9007193024574120] = "ORI";

export const LANG_PER = 9007190032174083;

ENUMS[9007190032174083] = "PER";

export const LANG_POL = 9007194228049783;

ENUMS[9007194228049783] = "POL";

export const LANG_POR = 9007190033748201;

ENUMS[9007190033748201] = "POR";

export const LANG_PUN = 9007190499284391;

ENUMS[9007190499284391] = "PUN";

export const LANG_ROM = 9007190414398278;

ENUMS[9007190414398278] = "ROM";

export const LANG_RUS = 9007190849630634;

ENUMS[9007190849630634] = "RUS";

export const LANG_SLK = 9007191582004616;

ENUMS[9007191582004616] = "SLK";

export const LANG_SLV = 9007191263229855;

ENUMS[9007191263229855] = "SLV";

export const LANG_SVE = 9007190948692236;

ENUMS[9007190948692236] = "SVE";

export const LANG_TAG = 9007192417804164;

ENUMS[9007192417804164] = "TAG";

export const LANG_TAM = 9007192317138450;

ENUMS[9007192317138450] = "TAM";

export const LANG_TEL = 9007192871388257;

ENUMS[9007192871388257] = "TEL";

export const LANG_THA = 9007190973501907;

ENUMS[9007190973501907] = "THA";

export const LANG_TUR = 9007192504943663;

ENUMS[9007192504943663] = "TUR";

export const LANG_UKR = 9007194159021638;

ENUMS[9007194159021638] = "UKR";

export const LANG_URD = 9007194292109757;

ENUMS[9007194292109757] = "URD";

export const LANG_VIE = 9007191473610720;

ENUMS[9007191473610720] = "VIE";

export const LEFT = 9007190711321898;

ENUMS[9007190711321898] = "LEFT";

export const LINEAR_GRADIENT = 9007191222812415;

ENUMS[9007191222812415] = "LINEAR_GRADIENT";

export const LITTLE_ENDIAN = 9007194068951371;

ENUMS[9007194068951371] = "LITTLE_ENDIAN";

export const LOADER_BUSY = 9007191245350440;

ENUMS[9007191245350440] = "LOADER_BUSY";

export const LOADER_FAIL = 9007192353485765;

ENUMS[9007192353485765] = "LOADER_FAIL";

export const LOADER_OK = 9007191791238983;

ENUMS[9007191791238983] = "LOADER_OK";

export const LOC_ARRAY = 9007192251196669;

ENUMS[9007192251196669] = "LOC_ARRAY";

export const LOC_INVERSE = 9007192773860012;

ENUMS[9007192773860012] = "LOC_INVERSE";

export const LOC_NOTES = 9007191339031389;

ENUMS[9007191339031389] = "LOC_NOTES";

export const LOC_PLAIN = 9007192212100724;

ENUMS[9007192212100724] = "LOC_PLAIN";

export const LOC_PLURAL = 9007190766928558;

ENUMS[9007190766928558] = "LOC_PLURAL";

export const M_std = 9007191858773372;

ENUMS[9007191858773372] = "std";

export const MENUBAR_ACTION = 9007193537665432;

ENUMS[9007193537665432] = "MENUBAR_ACTION";

export const MENUBAR_APP_ABOUT = 9007191529154043;

ENUMS[9007191529154043] = "MENUBAR_APP_ABOUT";

export const MENUBAR_APP_MENU = 9007193248907749;

ENUMS[9007193248907749] = "MENUBAR_APP_MENU";

export const MENUBAR_APP_QUIT = 9007190363491817;

ENUMS[9007190363491817] = "MENUBAR_APP_QUIT";

export const MENUBAR_CHECKMARK = 9007191229884003;

ENUMS[9007191229884003] = "MENUBAR_CHECKMARK";

export const MENUBAR_CODE = 9007192602527575;

ENUMS[9007192602527575] = "MENUBAR_CODE";

export const MENUBAR_ENABLED = 9007194231244887;

ENUMS[9007194231244887] = "MENUBAR_ENABLED";

export const MENUBAR_HELP_MENU = 9007190793541657;

ENUMS[9007190793541657] = "MENUBAR_HELP_MENU";

export const MENUBAR_SHORTCUT = 9007191126016036;

ENUMS[9007191126016036] = "MENUBAR_SHORTCUT";

export const MICRO_CLEAR = 9007191144004659;

ENUMS[9007191144004659] = "clear";

export const MICRO_DELTA = 9007190759967260;

ENUMS[9007190759967260] = "Δ";

export const MICRO_RENUM = 9007191665051429;

ENUMS[9007191665051429] = "renum";

export const MICRO_TRUNC = 9007191763176072;

ENUMS[9007191763176072] = "trunc";

export const MSG_ENTER = 9007194127162657;

ENUMS[9007194127162657] = "MSG_ENTER";

export const MSG_LEAVE = 9007190445750868;

ENUMS[9007190445750868] = "MSG_LEAVE";

export const MSG_SOCKET_CLOSED = 9007194294890029;

ENUMS[9007194294890029] = "MSG_SOCKET_CLOSED";

export const MSG_SOCKET_CONNECTED = 9007191288201976;

ENUMS[9007191288201976] = "MSG_SOCKET_CONNECTED";

export const MSG_SOCKET_DATA = 9007191526886701;

ENUMS[9007191526886701] = "MSG_SOCKET_DATA";

export const MSG_SOCKET_ERR = 9007193723465476;

ENUMS[9007193723465476] = "MSG_SOCKET_ERR";

export const MSG_SOCKET_TIMEOUT = 9007194132300272;

ENUMS[9007194132300272] = "MSG_SOCKET_TIMEOUT";

export const N_acre = 9007190952149985;

ENUMS[9007190952149985] = "acre";

export const N_angstrom = 9007190246448751;

ENUMS[9007190246448751] = "angstrom";

export const N_bar = 9007193796463405;

ENUMS[9007193796463405] = "bar";

export const N_BTU = 9007192621143025;

ENUMS[9007192621143025] = "BTU";

export const N_calorie_th = 9007190496803932;

ENUMS[9007190496803932] = "calorie_th";

export const N_calorie = 9007191281485983;

ENUMS[9007191281485983] = "calorie";

export const N_cm = 9007192221800628;

ENUMS[9007192221800628] = "cm";

export const N_cu_ft = 9007192145249835;

ENUMS[9007192145249835] = "cu_ft";

export const N_cu_yd = 9007192111944860;

ENUMS[9007192111944860] = "cu_yd";

export const N_cup = 9007191290327956;

ENUMS[9007191290327956] = "cup";

export const N_day = 9007193058995218;

ENUMS[9007193058995218] = "day";

export const N_deg = 9007193091858908;

ENUMS[9007193091858908] = "deg";

export const N_degC = 9007193146176845;

ENUMS[9007193146176845] = "degC";

export const N_degF = 9007193062288750;

ENUMS[9007193062288750] = "degF";

export const N_degK = 9007193011955893;

ENUMS[9007193011955893] = "degK";

export const N_dm = 9007191685063915;

ENUMS[9007191685063915] = "dm";

export const N_dozen = 9007190884823382;

ENUMS[9007190884823382] = "dozen";

export const N_each = 9007191641935777;

ENUMS[9007191641935777] = "each";

export const N_ev = 9007191869764819;

ENUMS[9007191869764819] = "ev";

export const N_foot = 9007190366725068;

ENUMS[9007190366725068] = "foot";

export const N_ft_per_min = 9007191338235573;

ENUMS[9007191338235573] = "ft_per_min";

export const N_ft_per_sec = 9007190336618084;

ENUMS[9007190336618084] = "ft_per_sec";

export const N_gal = 9007190056891976;

ENUMS[9007190056891976] = "gal";

export const N_gigajoule = 9007192706527421;

ENUMS[9007192706527421] = "gigajoule";

export const N_gigawatt = 9007194053251940;

ENUMS[9007194053251940] = "gigawatt";

export const N_gradian = 9007192220160448;

ENUMS[9007192220160448] = "gradian";

export const N_grain = 9007190694708491;

ENUMS[9007190694708491] = "grain";

export const N_gram = 9007190332562299;

ENUMS[9007190332562299] = "gram";

export const N_gross = 9007190031983780;

ENUMS[9007190031983780] = "gross";

export const N_hectare = 9007190901376482;

ENUMS[9007190901376482] = "hectare";

export const N_hour = 9007191982557918;

ENUMS[9007191982557918] = "hour";

export const N_hp_hr = 9007194287823911;

ENUMS[9007194287823911] = "hp_hr";

export const N_hp = 9007191733425296;

ENUMS[9007191733425296] = "hp";

export const N_hz = 9007191901201486;

ENUMS[9007191901201486] = "hz";

export const N_inch = 9007194292702924;

ENUMS[9007194292702924] = "inch";

export const N_joule = 9007190187579077;

ENUMS[9007190187579077] = "joule";

export const N_kg = 9007192388193722;

ENUMS[9007192388193722] = "kg";

export const N_kilowatt = 9007191577018041;

ENUMS[9007191577018041] = "kilowatt";

export const N_km_per_hr = 9007192069054991;

ENUMS[9007192069054991] = "km_per_hr";

export const N_km = 9007192220417532;

ENUMS[9007192220417532] = "km";

export const N_kw_hr = 9007191251924533;

ENUMS[9007191251924533] = "kw_hr";

export const N_l = 9007192691155340;

ENUMS[9007192691155340] = "l";

export const N_lbf = 9007191086312484;

ENUMS[9007191086312484] = "lbf";

export const N_m_per_min = 9007191208978500;

ENUMS[9007191208978500] = "m_per_min";

export const N_m_per_sec = 9007192948847325;

ENUMS[9007192948847325] = "m_per_sec";

export const N_megawatt = 9007192632365214;

ENUMS[9007192632365214] = "megawatt";

export const N_meter = 9007192502734777;

ENUMS[9007192502734777] = "meter";

export const N_mi_per_hr = 9007194188992065;

ENUMS[9007194188992065] = "mi_per_hr";

export const N_microsec = 9007191928525241;

ENUMS[9007191928525241] = "microsec";

export const N_mile = 9007191320210973;

ENUMS[9007191320210973] = "mile";

export const N_millisec = 9007193781384766;

ENUMS[9007193781384766] = "millisec";

export const N_milliwatt = 9007193810245337;

ENUMS[9007193810245337] = "milliwatt";

export const N_minute = 9007193773574448;

ENUMS[9007193773574448] = "minute";

export const N_ml = 9007192304702985;

ENUMS[9007192304702985] = "ml";

export const N_mm = 9007192287925366;

ENUMS[9007192287925366] = "mm";

export const N_month = 9007192916123494;

ENUMS[9007192916123494] = "month";

export const N_nanosec = 9007193653692175;

ENUMS[9007193653692175] = "nanosec";

export const N_nautmile = 9007193990526597;

ENUMS[9007193990526597] = "nautmile";

export const N_newton = 9007191690160911;

ENUMS[9007191690160911] = "newton";

export const N_nm = 9007192288072461;

ENUMS[9007192288072461] = "nm";

export const N_ounce = 9007191756739322;

ENUMS[9007191756739322] = "ounce";

export const N_oz = 9007192070110509;

ENUMS[9007192070110509] = "oz";

export const N_pascal = 9007191181745268;

ENUMS[9007191181745268] = "pascal";

export const N_picosec = 9007194026274698;

ENUMS[9007194026274698] = "picosec";

export const N_pint = 9007194217411433;

ENUMS[9007194217411433] = "pint";

export const N_pound = 9007192986587514;

ENUMS[9007192986587514] = "pound";

export const N_psi = 9007193052403416;

ENUMS[9007193052403416] = "psi";

export const N_quart = 9007193408590039;

ENUMS[9007193408590039] = "quart";

export const N_radian = 9007192509132641;

ENUMS[9007192509132641] = "radian";

export const N_revs = 9007193944016738;

ENUMS[9007193944016738] = "revs";

export const N_rpm = 9007193071704757;

ENUMS[9007193071704757] = "rpm";

export const N_sec = 9007190222245725;

ENUMS[9007190222245725] = "sec";

export const N_slug = 9007193082855475;

ENUMS[9007193082855475] = "slug";

export const N_sq_cm = 9007190673362901;

ENUMS[9007190673362901] = "sq_cm";

export const N_sq_ft = 9007190219822735;

ENUMS[9007190219822735] = "sq_ft";

export const N_sq_in = 9007190621352758;

ENUMS[9007190621352758] = "sq_in";

export const N_sq_m = 9007190630415248;

ENUMS[9007190630415248] = "sq_m";

export const N_sq_mi = 9007190536876283;

ENUMS[9007190536876283] = "sq_mi";

export const N_sq_mm = 9007190603986759;

ENUMS[9007190603986759] = "sq_mm";

export const N_sq_yd = 9007190182574808;

ENUMS[9007190182574808] = "sq_yd";

export const N_tbsp = 9007191098858601;

ENUMS[9007191098858601] = "tbsp";

export const N_therm_ec = 9007193085175687;

ENUMS[9007193085175687] = "therm_ec";

export const N_therm_us = 9007192819396807;

ENUMS[9007192819396807] = "therm_us";

export const N_ton = 9007191865357341;

ENUMS[9007191865357341] = "ton";

export const N_tonne = 9007192984145156;

ENUMS[9007192984145156] = "tonne";

export const N_torr = 9007191848403073;

ENUMS[9007191848403073] = "torr";

export const N_troy_ounce = 9007194149819487;

ENUMS[9007194149819487] = "troy_ounce";

export const N_troy_pound = 9007191827535779;

ENUMS[9007191827535779] = "troy_pound";

export const N_tsp = 9007192029882127;

ENUMS[9007192029882127] = "tsp";

export const N_um = 9007191754881342;

ENUMS[9007191754881342] = "um";

export const N_watt = 9007192594329260;

ENUMS[9007192594329260] = "watt";

export const N_week = 9007193847702628;

ENUMS[9007193847702628] = "week";

export const N_yard = 9007192331946152;

ENUMS[9007192331946152] = "yard";

export const N_year = 9007190800547617;

ENUMS[9007190800547617] = "year";

export const NK_ASSET = 9007190643777247;

ENUMS[9007190643777247] = "NK_ASSET";

export const NK_COLOR = 9007192775278852;

ENUMS[9007192775278852] = "NK_COLOR";

export const NK_CONST = 9007193063933008;

ENUMS[9007193063933008] = "NK_CONST";

export const NK_ENUM = 9007191848843980;

ENUMS[9007191848843980] = "NK_ENUM";

export const NK_FUNC = 9007191066049755;

ENUMS[9007191066049755] = "NK_FUNC";

export const NK_GRAD = 9007193648410069;

ENUMS[9007193648410069] = "NK_GRAD";

export const NK_RECORD = 9007194003427904;

ENUMS[9007194003427904] = "NK_RECORD";

export const NK_TIMER = 9007191692367070;

ENUMS[9007191692367070] = "NK_TIMER";

export const NK_UFAM = 9007192571900208;

ENUMS[9007192571900208] = "NK_UFAM";

export const NK_UNIT = 9007191777207931;

ENUMS[9007191777207931] = "NK_UNIT";

export const NK_VAR = 9007190845812490;

ENUMS[9007190845812490] = "NK_VAR";

export const ORDER_BTLR = 9007193226990082;

ENUMS[9007193226990082] = "ORDER_BTLR";

export const ORDER_BTRL = 9007192523315822;

ENUMS[9007192523315822] = "ORDER_BTRL";

export const ORDER_LRBT = 9007192935571706;

ENUMS[9007192935571706] = "ORDER_LRBT";

export const ORDER_LRTB = 9007192568038206;

ENUMS[9007192568038206] = "ORDER_LRTB";

export const ORDER_RLBT = 9007192915196142;

ENUMS[9007192915196142] = "ORDER_RLBT";

export const ORDER_RLTB = 9007192409601906;

ENUMS[9007192409601906] = "ORDER_RLTB";

export const ORDER_TBLR = 9007191520272206;

ENUMS[9007191520272206] = "ORDER_TBLR";

export const ORDER_TBRL = 9007190678537210;

ENUMS[9007190678537210] = "ORDER_TBRL";

export const ORIENTATION_LANDSCAPE = 9007191010543533;

ENUMS[9007191010543533] = "ORIENTATION_LANDSCAPE";

export const ORIENTATION_PORTRAIT = 9007191978835675;

ENUMS[9007191978835675] = "ORIENTATION_PORTRAIT";

export const OS_AND = 9007193360895287;

ENUMS[9007193360895287] = "OS_AND";

export const OS_IOS = 9007191984026743;

ENUMS[9007191984026743] = "OS_IOS";

export const OS_OSX = 9007190362755304;

ENUMS[9007190362755304] = "OS_OSX";

export const OS_WEB = 9007190607726472;

ENUMS[9007190607726472] = "OS_WEB";

export const OS_WIN = 9007191612412136;

ENUMS[9007191612412136] = "OS_WIN";

export const PK_NAMED = 9007193125983004;

ENUMS[9007193125983004] = "PK_NAMED";

export const PK_POS = 9007191465674587;

ENUMS[9007191465674587] = "PK_POS";

export const PK_REST = 9007191840610765;

ENUMS[9007191840610765] = "PK_REST";

export const PLURAL_DEFAULT = 9007191673733887;

ENUMS[9007191673733887] = "PLURAL_DEFAULT";

export const PLURAL_FEW = 9007191107244612;

ENUMS[9007191107244612] = "PLURAL_FEW";

export const PLURAL_MANY = 9007193773251461;

ENUMS[9007193773251461] = "PLURAL_MANY";

export const PLURAL_ONE = 9007193337328970;

ENUMS[9007193337328970] = "PLURAL_ONE";

export const PLURAL_TWO = 9007191430822928;

ENUMS[9007191430822928] = "PLURAL_TWO";

export const PLURAL_ZERO = 9007191796263072;

ENUMS[9007191796263072] = "PLURAL_ZERO";

export const POP = 9007192026394006;

ENUMS[9007192026394006] = "POP";

export const PRINT_FIRST_PAGE = 9007191751010783;

ENUMS[9007191751010783] = "PRINT_FIRST_PAGE";

export const PRINT_IS_COLOR = 9007192510406563;

ENUMS[9007192510406563] = "PRINT_IS_COLOR";

export const PRINT_LAST_PAGE = 9007191105806867;

ENUMS[9007191105806867] = "PRINT_LAST_PAGE";

export const PRINT_NCOPIES = 9007193080038706;

ENUMS[9007193080038706] = "PRINT_NCOPIES";

export const PRINT_ORIENTATION = 9007192098519467;

ENUMS[9007192098519467] = "PRINT_ORIENTATION";

export const PRINT_PAGENUM = 9007190484000188;

ENUMS[9007190484000188] = "PRINT_PAGENUM";

export const PRINT_PHASE = 9007190644145138;

ENUMS[9007190644145138] = "PRINT_PHASE";

export const PRINT_RESOLUTION = 9007193575630101;

ENUMS[9007193575630101] = "PRINT_RESOLUTION";

export const PRINT_ROWX = 9007190982033607;

ENUMS[9007190982033607] = "PRINT_ROWX";

export const R_a_block_desc = 9007190030980491;

ENUMS[9007190030980491] = "a_block_desc";

export const R_a_block = 9007193255732081;

ENUMS[9007193255732081] = "a_block";

export const R_a_canvas = 9007192149538796;

ENUMS[9007192149538796] = "a_canvas";

export const R_a_client_conn = 9007190019079342;

ENUMS[9007190019079342] = "a_client_conn";

export const R_a_date = 9007191823293908;

ENUMS[9007191823293908] = "a_date";

export const R_a_event = 9007191791712392;

ENUMS[9007191791712392] = "a_event";

export const R_a_family = 9007191614147856;

ENUMS[9007191614147856] = "a_family";

export const R_a_fsm = 9007193322986362;

ENUMS[9007193322986362] = "a_fsm";

export const R_a_gradient_stop = 9007193449929421;

ENUMS[9007193449929421] = "a_gradient_stop";

export const R_a_gradient = 9007194155014896;

ENUMS[9007194155014896] = "a_gradient";

export const R_a_hsv = 9007192252978469;

ENUMS[9007192252978469] = "a_hsv";

export const R_a_html_pulldown = 9007194212296109;

ENUMS[9007194212296109] = "a_html_pulldown";

export const R_a_http_response = 9007190750294694;

ENUMS[9007190750294694] = "a_http_response";

export const R_a_input_field = 9007192954337099;

ENUMS[9007192954337099] = "a_input_field";

export const R_a_internet_link = 9007192819581550;

ENUMS[9007192819581550] = "a_internet_link";

export const R_a_ixdb_index = 9007192727081164;

ENUMS[9007192727081164] = "a_ixdb_index";

export const R_a_ixdb_schema = 9007192635844523;

ENUMS[9007192635844523] = "a_ixdb_schema";

export const R_a_ixdb_store = 9007191371355665;

ENUMS[9007191371355665] = "a_ixdb_store";

export const R_a_meta_rec = 9007194208572544;

ENUMS[9007194208572544] = "a_meta_rec";

export const R_a_micro_step = 9007193135442035;

ENUMS[9007193135442035] = "a_micro_step";

export const R_a_mod_def = 9007190587426296;

ENUMS[9007190587426296] = "a_mod_def";

export const R_a_polar_coord = 9007193787221650;

ENUMS[9007193787221650] = "a_polar_coord";

export const R_a_rect = 9007193669085694;

ENUMS[9007193669085694] = "a_rect";

export const R_a_runtime = 9007191881640948;

ENUMS[9007191881640948] = "a_runtime";

export const R_a_scroll_link_record = 9007192611723630;

ENUMS[9007192611723630] = "a_scroll_link_record";

export const R_a_unit = 9007193478373070;

ENUMS[9007193478373070] = "a_unit";

export const R_a_xy = 9007191434709187;

ENUMS[9007191434709187] = "a_xy";

export const R_a_xyz = 9007191470998331;

ENUMS[9007191470998331] = "a_xyz";

export const RADIAL_GRADIENT = 9007192309010309;

ENUMS[9007192309010309] = "RADIAL_GRADIENT";

export const RIGHT = 9007193840331351;

ENUMS[9007193840331351] = "RIGHT";

export const RTL_SS = 9007190479220938;

ENUMS[9007190479220938] = "RTL_SS";

export const STEP_BEZIER1 = 9007191502952612;

ENUMS[9007191502952612] = "STEP_BEZIER1";

export const STEP_BEZIER2 = 9007191553285469;

ENUMS[9007191553285469] = "STEP_BEZIER2";

export const STEP_LINE = 9007193322169928;

ENUMS[9007193322169928] = "STEP_LINE";

export const STEP_MOVE = 9007193426522407;

ENUMS[9007193426522407] = "STEP_MOVE";

export const TIMEZONE_ANCHORAGE = 9007192361310267;

ENUMS[9007192361310267] = "TIMEZONE_ANCHORAGE";

export const TIMEZONE_ATHENS = 9007190981516388;

ENUMS[9007190981516388] = "TIMEZONE_ATHENS";

export const TIMEZONE_BAKER_ISLAND = 9007191507011446;

ENUMS[9007191507011446] = "TIMEZONE_BAKER_ISLAND";

export const TIMEZONE_BANGKOK = 9007191049117670;

ENUMS[9007191049117670] = "TIMEZONE_BANGKOK";

export const TIMEZONE_CARACAS = 9007191813271397;

ENUMS[9007191813271397] = "TIMEZONE_CARACAS";

export const TIMEZONE_CHICAGO = 9007190415525059;

ENUMS[9007190415525059] = "TIMEZONE_CHICAGO";

export const TIMEZONE_DELHI = 9007193355025641;

ENUMS[9007193355025641] = "TIMEZONE_DELHI";

export const TIMEZONE_DENVER = 9007190633449477;

ENUMS[9007190633449477] = "TIMEZONE_DENVER";

export const TIMEZONE_DHAKA = 9007190570556172;

ENUMS[9007190570556172] = "TIMEZONE_DHAKA";

export const TIMEZONE_DUBAI = 9007190654943714;

ENUMS[9007190654943714] = "TIMEZONE_DUBAI";

export const TIMEZONE_FERNANDO = 9007193555368666;

ENUMS[9007193555368666] = "TIMEZONE_FERNANDO";

export const TIMEZONE_GMT = 9007193944953035;

ENUMS[9007193944953035] = "TIMEZONE_GMT";

export const TIMEZONE_HONG_KONG = 9007190874557581;

ENUMS[9007190874557581] = "TIMEZONE_HONG_KONG";

export const TIMEZONE_HONOLULU = 9007190810715811;

ENUMS[9007190810715811] = "TIMEZONE_HONOLULU";

export const TIMEZONE_JEDDAH = 9007193893625221;

ENUMS[9007193893625221] = "TIMEZONE_JEDDAH";

export const TIMEZONE_KABUL = 9007193654106028;

ENUMS[9007193654106028] = "TIMEZONE_KABUL";

export const TIMEZONE_KARACHI = 9007190273642218;

ENUMS[9007190273642218] = "TIMEZONE_KARACHI";

export const TIMEZONE_KIRITIMATI = 9007193401833546;

ENUMS[9007193401833546] = "TIMEZONE_KIRITIMATI";

export const TIMEZONE_LONDON = 9007194171648235;

ENUMS[9007194171648235] = "TIMEZONE_LONDON";

export const TIMEZONE_LOS_ANGELES = 9007192289237247;

ENUMS[9007192289237247] = "TIMEZONE_LOS_ANGELES";

export const TIMEZONE_MARQUESAS = 9007194114222817;

ENUMS[9007194114222817] = "TIMEZONE_MARQUESAS";

export const TIMEZONE_NEW_YORK = 9007191030228181;

ENUMS[9007191030228181] = "TIMEZONE_NEW_YORK";

export const TIMEZONE_NOUMEA = 9007192814753950;

ENUMS[9007192814753950] = "TIMEZONE_NOUMEA";

export const TIMEZONE_NUKU = 9007191069256452;

ENUMS[9007191069256452] = "TIMEZONE_NUKU";

export const TIMEZONE_PAGO_PAGO = 9007193682191764;

ENUMS[9007193682191764] = "TIMEZONE_PAGO_PAGO";

export const TIMEZONE_PARIS = 9007193076914724;

ENUMS[9007193076914724] = "TIMEZONE_PARIS";

export const TIMEZONE_PRAIA = 9007190257414500;

ENUMS[9007190257414500] = "TIMEZONE_PRAIA";

export const TIMEZONE_RIO = 9007192664222413;

ENUMS[9007192664222413] = "TIMEZONE_RIO";

export const TIMEZONE_SANTIAGO = 9007191908316559;

ENUMS[9007191908316559] = "TIMEZONE_SANTIAGO";

export const TIMEZONE_ST_JOHNS = 9007192657713671;

ENUMS[9007192657713671] = "TIMEZONE_ST_JOHNS";

export const TIMEZONE_SYDNEY = 9007193946321621;

ENUMS[9007193946321621] = "TIMEZONE_SYDNEY";

export const TIMEZONE_TEHRAN = 9007190053395879;

ENUMS[9007190053395879] = "TIMEZONE_TEHRAN";

export const TIMEZONE_TOKYO = 9007192145655909;

ENUMS[9007192145655909] = "TIMEZONE_TOKYO";

export const TIMEZONE_UTC = 9007194004136273;

ENUMS[9007194004136273] = "TIMEZONE_UTC";

export const TIMEZONE_WELLINGTON = 9007193118918360;

ENUMS[9007193118918360] = "TIMEZONE_WELLINGTON";

export const TOUCH_FINGER = 9007193390822830;

ENUMS[9007193390822830] = "TOUCH_FINGER";

export const TOUCH_NONE = 9007194053980865;

ENUMS[9007194053980865] = "TOUCH_NONE";

export const TOUCH_STYLUS = 9007192517172985;

ENUMS[9007192517172985] = "TOUCH_STYLUS";

export const TYPE_ANY = 9007193166326998;

ENUMS[9007193166326998] = "TYPE_ANY";

export const TYPE_ARRAY = 9007192562138289;

ENUMS[9007192562138289] = "TYPE_ARRAY";

export const TYPE_ARRAY2 = 9007193947376185;

ENUMS[9007193947376185] = "TYPE_ARRAY2";

export const TYPE_ARRAY3 = 9007193930598566;

ENUMS[9007193930598566] = "TYPE_ARRAY3";

export const TYPE_ARRAY4 = 9007193980931423;

ENUMS[9007193980931423] = "TYPE_ARRAY4";

export const TYPE_BITS = 9007193317321180;

ENUMS[9007193317321180] = "TYPE_BITS";

export const TYPE_BYTES = 9007191344815103;

ENUMS[9007191344815103] = "TYPE_BYTES";

export const TYPE_COLOR = 9007190326328899;

ENUMS[9007190326328899] = "TYPE_COLOR";

export const TYPE_ENUM = 9007190307525209;

ENUMS[9007190307525209] = "TYPE_ENUM";

export const TYPE_ERR = 9007191320260475;

ENUMS[9007191320260475] = "TYPE_ERR";

export const TYPE_FUNC = 9007190174688282;

ENUMS[9007190174688282] = "TYPE_FUNC";

export const TYPE_IMAGE = 9007192176669305;

ENUMS[9007192176669305] = "TYPE_IMAGE";

export const TYPE_MEAS = 9007193854053742;

ENUMS[9007193854053742] = "TYPE_MEAS";

export const TYPE_NUM = 9007191566577692;

ENUMS[9007191566577692] = "TYPE_NUM";

export const TYPE_OBJECT = 9007194039983755;

ENUMS[9007194039983755] = "TYPE_OBJECT";

export const TYPE_PATTERN = 9007191926742254;

ENUMS[9007191926742254] = "TYPE_PATTERN";

export const TYPE_PTR = 9007191967432934;

ENUMS[9007191967432934] = "TYPE_PTR";

export const TYPE_RECORD = 9007194281227577;

ENUMS[9007194281227577] = "TYPE_RECORD";

export const TYPE_SOUND = 9007190679494275;

ENUMS[9007190679494275] = "TYPE_SOUND";

export const TYPE_STR = 9007190249956539;

ENUMS[9007190249956539] = "TYPE_STR";

export const TYPE_TREE = 9007193022501804;

ENUMS[9007193022501804] = "TYPE_TREE";

export const TYPE_U = 9007192898065963;

ENUMS[9007192898065963] = "TYPE_U";

export const TYPE_VIDEO = 9007192435016199;

ENUMS[9007192435016199] = "TYPE_VIDEO";

export const TYPE_VOID = 9007192290118574;

ENUMS[9007192290118574] = "TYPE_VOID";

export const TYPE_YESNO = 9007190779215148;

ENUMS[9007190779215148] = "TYPE_YESNO";

export const UNICODE_BE = 9007190643288538;

ENUMS[9007190643288538] = "UNICODE_BE";

export const UNICODE_LE = 9007193528641648;

ENUMS[9007193528641648] = "UNICODE_LE";

export const UTF8 = 9007192599909964;

ENUMS[9007192599909964] = "UTF8";

export const V_debug_blocklist = 9007192777431909;

ENUMS[9007192777431909] = "debug_blocklist";

export const V_blackbox_runtime = 9007190789640092;

ENUMS[9007190789640092] = "blackbox_runtime";

export const V_elapsed_raw = 9007190632975073;

ENUMS[9007190632975073] = "elapsed_raw";

export const V_elapsed = 9007191601483304;

ENUMS[9007191601483304] = "elapsed";

export const V_families = 9007192441875844;

ENUMS[9007192441875844] = "families";

export const V_LOCALIZED = 9007192212261205;

ENUMS[9007192212261205] = "LOCALIZED";

export const V_META = 9007194112371461;

ENUMS[9007194112371461] = "META";

export const V_now_raw = 9007192574335121;

ENUMS[9007192574335121] = "now_raw";

export const V_now = 9007192088951800;

ENUMS[9007192088951800] = "now";

export const V_PLACEHOLDER = 9007190655482165;

ENUMS[9007190655482165] = "PLACEHOLDER";

export const V_runtime = 9007191746221364;

ENUMS[9007191746221364] = "runtime";

export const V_time_launched = 9007193857655116;

ENUMS[9007193857655116] = "time_launched";

export const V_unit_to_family = 9007192304366723;

ENUMS[9007192304366723] = "unit_to_family";

export const VAL = 9007192950101122;

ENUMS[9007192950101122] = "VAL";

export const VNP = 9007191438100009;

ENUMS[9007191438100009] = "VNP";

export const WEBSOCK_CLOSE = 9007191180554640;

ENUMS[9007191180554640] = "WEBSOCK_CLOSE";

export const WEBSOCK_ERROR = 9007194030626010;

ENUMS[9007194030626010] = "WEBSOCK_ERROR";

export const WEBSOCK_OPEN = 9007192997448236;

ENUMS[9007192997448236] = "WEBSOCK_OPEN";

export const Y_Angle = 9007191340652178;

ENUMS[9007191340652178] = "Angle";

export const Y_Area = 9007192203099294;

ENUMS[9007192203099294] = "Area";

export const Y_Energy = 9007190240949311;

ENUMS[9007190240949311] = "Energy";

export const Y_Force = 9007190127307486;

ENUMS[9007190127307486] = "Force";

export const Y_Frequency = 9007194035908891;

ENUMS[9007194035908891] = "Frequency";

export const Y_Length = 9007193164009787;

ENUMS[9007193164009787] = "Length";

export const Y_Mass = 9007192445499647;

ENUMS[9007192445499647] = "Mass";

export const Y_Power = 9007193650645924;

ENUMS[9007193650645924] = "Power";

export const Y_Pressure = 9007192495556120;

ENUMS[9007192495556120] = "Pressure";

export const Y_Scalar = 9007191994712031;

ENUMS[9007191994712031] = "Scalar";

export const Y_Speed = 9007194016706446;

ENUMS[9007194016706446] = "Speed";

export const Y_Temperature = 9007191653401759;

ENUMS[9007191653401759] = "Temperature";

export const Y_Time = 9007193033544522;

ENUMS[9007193033544522] = "Time";

export const Y_Volume = 9007192707741773;

ENUMS[9007192707741773] = "Volume", FIELDS[F_env_version] = !0, FIELDS[F_app_version] = !0, FIELDS[F_args] = !0, FIELDS[F_base_to_unit] = !0, FIELDS[F_bchildren] = !0, FIELDS[F_bdepth] = !0, FIELDS[F_bexpanded] = !0, 
FIELDS[F_bkind] = !0, FIELDS[F_bname] = !0, FIELDS[F_bobject] = !0, FIELDS[F_box] = !0, FIELDS[F_boxtot] = !0, FIELDS[F_btracks] = !0, FIELDS[F_callback] = !0, FIELDS[F_cell_id] = !0, FIELDS[F_cell_seq] = !0, 
FIELDS[F_cell] = !0, FIELDS[F_client_bytes_in] = !0, FIELDS[F_client_bytes_out] = !0;

FIELDS[F_client_channel] = !0, FIELDS[F_client_status] = !0, FIELDS[F_code_coverage] = !0, FIELDS[F_cpu_kind] = !0, FIELDS[F_cursor_changed] = !0, FIELDS[F_date_city] = !0, FIELDS[F_date_day] = !0, FIELDS[F_date_hour] = !0, 
FIELDS[F_date_minute] = !0, FIELDS[F_date_month] = !0, FIELDS[F_date_second] = !0, FIELDS[F_date_year] = !0, FIELDS[F_db_name] = !0, FIELDS[F_db_stores] = !0, FIELDS[F_db_ver] = !0, FIELDS[F_evkind] = !0, 
FIELDS[F_fam_base] = !0, FIELDS[F_fam_dim] = !0, FIELDS[F_fam_nonlinear] = !0, FIELDS[F_fam_units] = !0;

FIELDS[F_fsm_state] = !0, FIELDS[F_full_screen] = !0, FIELDS[9007192019487062] = !0, FIELDS[F_gamec_butt_ix] = !0, FIELDS[F_gamec_id] = !0, FIELDS[9007190685355017] = !0, FIELDS[9007190584689303] = !0, 
FIELDS[9007191407266315] = !0, FIELDS[9007191642152981] = !0, FIELDS[F_global_x] = !0, FIELDS[F_global_y] = !0, FIELDS[F_grad_angle] = !0, FIELDS[F_grad_centerx] = !0, FIELDS[F_grad_centery] = !0, FIELDS[F_grad_focusx] = !0, 
FIELDS[F_grad_focusy] = !0, FIELDS[F_grad_radius_inner] = !0, FIELDS[F_grad_radius_outer] = !0, FIELDS[F_grad_shape] = !0, FIELDS[F_grad_stops] = !0;

FIELDS[F_grad_sysobj] = !0, FIELDS[F_hardware_id] = !0, FIELDS[F_height] = !0, FIELDS[F_hist_absorber] = !0, FIELDS[F_hist_cell_cum] = !0, FIELDS[F_hist_cell_id] = !0, FIELDS[F_hist_cell] = !0, FIELDS[F_hist_rawx] = !0, 
FIELDS[F_http_body_type] = !0, FIELDS[F_http_body] = !0, FIELDS[9007192005332123] = !0, FIELDS[9007193563310425] = !0, FIELDS[F_http_headers] = !0, FIELDS[F_http_phase] = !0, FIELDS[F_http_status] = !0, 
FIELDS[F_http_sysobj] = !0, FIELDS[F_hue] = !0, FIELDS[F_in_autofill] = !0, FIELDS[F_in_disabled] = !0, FIELDS[F_in_errmsg] = !0;

FIELDS[F_in_form_ready] = !0, FIELDS[F_in_hint] = !0, FIELDS[F_in_keyboard] = !0, FIELDS[F_in_kind] = !0, FIELDS[F_in_label] = !0, FIELDS[F_in_maxlen] = !0, FIELDS[F_in_maxval] = !0, FIELDS[F_in_minlen] = !0, 
FIELDS[F_in_minval] = !0, FIELDS[F_in_name] = !0, FIELDS[F_in_ok] = !0, FIELDS[F_in_pattern] = !0, FIELDS[F_in_required] = !0, FIELDS[F_in_spellcheck] = !0, FIELDS[F_in_step] = !0, FIELDS[F_in_tab] = !0, 
FIELDS[F_in_tip] = !0, FIELDS[F_in_validator] = !0, FIELDS[F_in_value] = !0, FIELDS[F_index_multi] = !0;

FIELDS[F_index_name] = !0, FIELDS[F_index_unique] = !0, FIELDS[F_is_alt] = !0, FIELDS[F_is_cmd] = !0, FIELDS[F_is_connected] = !0, FIELDS[F_is_ctrl] = !0, FIELDS[F_is_shift] = !0, FIELDS[F_keycode] = !0, 
FIELDS[F_left] = !0, FIELDS[F_link_data] = !0, FIELDS[9007191183148878] = !0, FIELDS[9007192625502279] = !0, FIELDS[F_link_socket] = !0, FIELDS[F_link_state] = !0, FIELDS[F_link_timeout] = !0, FIELDS[F_link_url] = !0, 
FIELDS[F_major_firstx] = !0, FIELDS[F_major_steps] = !0, FIELDS[F_major_stepx] = !0, FIELDS[F_micro_steps] = !0;

FIELDS[F_mod_const] = !0, FIELDS[F_mod_enums] = !0, FIELDS[F_mod_funcs] = !0, FIELDS[F_mod_recs] = !0, FIELDS[F_mod_ufams] = !0, FIELDS[F_mod_vars] = !0, FIELDS[F_monitor_active] = !0, FIELDS[F_ms_dest] = !0, 
FIELDS[F_ms_funcname] = !0, FIELDS[F_ms_kind] = !0, FIELDS[F_ms_module] = !0, FIELDS[F_ms_oldval] = !0, FIELDS[F_ms_newval] = !0, FIELDS[F_ms_where] = !0, FIELDS[F_ncells] = !0, FIELDS[F_notch_height] = !0, 
FIELDS[F_notch_width] = !0, FIELDS[F_opacity] = !0, FIELDS[F_opt_children] = !0, FIELDS[F_opt_disabled] = !0;

FIELDS[F_opt_label] = !0, FIELDS[F_opt_selected] = !0, FIELDS[F_opt_val] = !0, FIELDS[F_os_kind] = !0, FIELDS[F_os_language] = !0, FIELDS[F_os_modal] = !0, FIELDS[F_os_version] = !0, FIELDS[F_pending_delay] = !0, 
FIELDS[9007192438173725] = !0, FIELDS[F_pending_limit] = !0, FIELDS[F_pending_parms] = !0, FIELDS[9007193690019779] = !0, FIELDS[9007192481613845] = !0, FIELDS[F_polar_angle] = !0, FIELDS[F_polar_radius] = !0, 
FIELDS[F_row_kind] = !0, FIELDS[9007191004530853] = !0, FIELDS[F_s_block_id] = !0, FIELDS[9007191211659509] = !0, FIELDS[F_s_position] = !0;

FIELDS[F_s_step_size] = !0, FIELDS[F_s_window_size] = !0, FIELDS[F_saturation] = !0, FIELDS[F_screen_dpi] = !0, FIELDS[F_screen_horz] = !0, FIELDS[F_screen_vert] = !0, FIELDS[F_stop_color] = !0, FIELDS[F_stop_pos] = !0, 
FIELDS[F_store_autoinc] = !0, FIELDS[F_store_indices] = !0, FIELDS[F_store_name] = !0, FIELDS[F_sysobj] = !0, FIELDS[F_top] = !0, FIELDS[F_touch_id] = !0, FIELDS[F_touch_kind] = !0, FIELDS[F_unicode] = !0, 
FIELDS[F_unit_factor] = !0, FIELDS[F_unit_to_base] = !0, FIELDS[F_value] = !0, FIELDS[F_vv_canonical] = !0;

FIELDS[F_vv_cat] = !0, FIELDS[F_vv_data_xy] = !0, FIELDS[F_vv_default] = !0, FIELDS[F_vv_dim] = !0, FIELDS[F_vv_expand] = !0, FIELDS[F_vv_fields] = !0, FIELDS[F_vv_funck] = !0, FIELDS[F_vv_parmk] = !0, 
FIELDS[F_vv_parmn] = !0, FIELDS[F_vv_parms] = !0, FIELDS[F_vv_rec] = !0, FIELDS[F_vv_typek] = !0, FIELDS[F_vv_units] = !0, FIELDS[F_vv_val] = !0, FIELDS[F_when] = !0, FIELDS[F_width] = !0, FIELDS[F_window_horz] = !0, 
FIELDS[F_window_vert] = !0, FIELDS[F_x] = !0, FIELDS[F_y] = !0;

FIELDS[F_z] = !0;

export var families = new a_tree(_M, "$families", 0);

export var unit_to_family = new a_tree(_M, "$unit_to_family", 0);

const SOP_NOP = 6, SOP_LOG = 7, SOP_BATCH_START = 8, SOP_BATCH_END = 9, SOP_TREE_BSON = 10, SOP_TREE_BIN = 11, SOP_CALL = 12, SOP_END = 13, SOP_EOT = 14, SOP_QUIT = 15, SOP_PARM_POS = 16, SOP_PARM_NAMED = 17, SOP_PARM_REST = 18, SOP_BBOX = 19, NOV_0 = 20, NOV_1 = 21, NOV_INT8 = 22, NOV_INT16 = 23, NOV_INT24 = 24, NOV_INT32 = 25, NOV_ENUM = 26, NOV_ERR = 27, NOV_FUNC = 28, NOV_IMAGE = 29, NOV_MEAS = 30, NOV_N = 31, NOV_NUM = 32, NOV_OBJECT = 33, NOV_PATH = 34, NOV_SOUND = 35, NOV_STR = 36, NOV_U = 37, NOV_RELPATH = 38, NOV_VIDEO = 39, NOV_Y = 40, SUB_NUM = 41, SUB_STR = 42, SUB_1 = 43, SUB_INT8 = 44, SUB_INT16 = 45, SUB_INT24 = 46, SUB_INT32 = 47, SUB_ENUM = 48, SUB_POP = 49, SUB_POPALL = 50, NOPOP = 64, OPCODE_MASK = 63;

function opcode_ss(opcode) {
    let ss;
    switch (opcode & OPCODE_MASK) {
      case SOP_NOP:
        ss = "SOP_NOP";
        break;

      case SOP_LOG:
        ss = "SOP_LOG\t";
        break;

      case SOP_BATCH_START:
        ss = "SOP_BATCH_START";
        break;

      case SOP_BATCH_END:
        ss = "SOP_BATCH_END";
        break;

      case SOP_TREE_BSON:
        ss = "SOP_TREE_BSON";
        break;

      case SOP_TREE_BIN:
        ss = "SOP_TREE_BIN";
        break;

      case SOP_CALL:
        ss = "SOP_CALL";
        break;

      case SOP_END:
        ss = "SOP_END";
        break;

      case SOP_EOT:
        ss = "SOP_EOT";
        break;

      case SOP_QUIT:
        ss = "SOP_QUIT";
        break;

      case SOP_PARM_POS:
        ss = "SOP_PARM_POS";
        break;

      case SOP_PARM_NAMED:
        ss = "SOP_PARM_NAMED";
        break;

      case SOP_PARM_REST:
        ss = "SOP_PARM_REST";
        break;

      case SOP_BBOX:
        ss = "SOP_BBOX";
        break;

      case NOV_0:
        ss = "NOV_0";
        break;

      case NOV_1:
        ss = "NOV_1";
        break;

      case NOV_INT8:
        ss = "NOV_INT8";
        break;

      case NOV_INT16:
        ss = "NOV_INT16";
        break;

      case NOV_INT24:
        ss = "NOV_INT24";
        break;

      case NOV_INT32:
        ss = "NOV_INT32";
        break;

      case NOV_ENUM:
        ss = "NOV_ENUM";
        break;

      case NOV_ERR:
        ss = "NOV_ERR";
        break;

      case NOV_FUNC:
        ss = "NOV_FUNC";
        break;

      case NOV_IMAGE:
        ss = "NOV_IMAGE";
        break;

      case NOV_MEAS:
        ss = "NOV_MEAS";
        break;

      case NOV_N:
        ss = "NOV_N";
        break;

      case NOV_NUM:
        ss = "NOV_NUM";
        break;

      case NOV_OBJECT:
        ss = "NOV_OBJECT";
        break;

      case NOV_PATH:
        ss = "NOV_PATH";
        break;

      case NOV_SOUND:
        ss = "NOV_SOUND";
        break;

      case NOV_STR:
        ss = "NOV_STR";
        break;

      case NOV_U:
        ss = "NOV_U";
        break;

      case NOV_RELPATH:
        ss = "NOV_RELPATH";
        break;

      case NOV_VIDEO:
        ss = "NOV_VIDEO";
        break;

      case NOV_Y:
        ss = "NOV_Y";
        break;

      case SUB_NUM:
        ss = "SUB_NUM";
        break;

      case SUB_STR:
        ss = "SUB_STR";
        break;

      case SUB_1:
        ss = "SUB_1";
        break;

      case SUB_INT8:
        ss = "SUB_INT8";
        break;

      case SUB_INT16:
        ss = "SUB_INT16";
        break;

      case SUB_INT24:
        ss = "SUB_INT24";
        break;

      case SUB_INT32:
        ss = "SUB_INT32";
        break;

      case SUB_ENUM:
        ss = "SUB_ENUM";
        break;

      case SUB_POP:
        ss = "SUB_POP";
        break;

      default:
        ss = "???";
    }
    return opcode & NOPOP && (ss += " NOPOP"), ss;
}

export var META = new a_tree(_M, "META", 0);

export var LOCALIZED = new a_tree(_M, "LOCALIZED");

const NULL_FUNC = void 0;

export var aaaa = {};

aaaa.main_init = null, aaaa.main_drawer = null, aaaa.main_module = null, aaaa.mon_init = null, aaaa.mon_drawer = null, aaaa.leave_func = null, aaaa.menubar_func = null, aaaa.derive_func = null_derive_func, 
aaaa.opendoc_func = null, aaaa.orient_func = null;

export function logg(msg) {
    if (console.log(msg), TRACE_LOGG) {
        var elem = document.getElementById("$log");
        null != elem && (elem.style.marginLeft = "10px", elem.innerHTML += msg, elem.innerHTML += "<br>", elem.scrollBy(0, 1e3));
    }
};

function dump_bytes(buf, len) {
    var maxlen = buf.arraybuf.byteLength;
    console.log(`-- dump of buffer, len=${len}, maxlen=${maxlen}`), len > maxlen && (len = maxlen);
    var oldpos = buf.position;
    buf.position = 0;
    for (var nwords = round_down(len / 4), minlen = round_up(lg(nwords, {
        base: 10
    })), i = 0; i < nwords; i++) {
        var pos = buf.position, word = bytes_get_u32(buf);
        console.log(`${str.to_str(pos, {
            min: minlen
        })}: ${str.to_str(word, {
            base: 16,
            min: 8,
            zero_pad: Y
        })}`);
    }
    buf.position = oldpos;
}

export function internal_err(msg) {
    logg("Internal error: " + msg);
    debugger;
};

export function argument_err(msg) {
    logg("Bad argument: " + msg);
    debugger;
};

export function js_color_to_str(color, opacity = 1) {
    return 1 === opacity ? "#" + (color + 16777216).toString(16).substring(1) : `rgba(${r255(color)},${g255(color)},${b255(color)},${opacity.toFixed(3)})`;
};

function js_set_screen_size() {
    if (IS_NODE) SCREEN_H = 1024, SCREEN_V = 768, SCREEN_DPI = 96; else {
        let s = window.screen, dev_ratio = window.devicePixelRatio;
        SCREEN_H = s.width, SCREEN_V = s.height, setv(_M, 0, runtime, F_screen_dpi, SCREEN_DPI = 96 * dev_ratio), setv(_M, 0, runtime, F_screen_horz, SCREEN_H), setv(_M, 0, runtime, F_screen_vert, SCREEN_V), 
        TRACE_RESIZE && console.log(`ratio=${dev_ratio}, sh=${SCREEN_H}, sv=${SCREEN_V} oh=${window.outerWidth}, ov=${window.outerHeight} ih=${window.innerWidth}, iv=${window.innerHeight}, px=${window.pageXOffset}, py=${window.pageYOffset}`), 
        dev_ratio > 1 ? 0 == window.pageXOffset && 0 == window.pageYOffset ? (USABLE_H = window.innerWidth, USABLE_V = window.innerHeight, TRACE_RESIZE && console.log(`mobile, setting usable ${USABLE_H} x ${USABLE_V}`)) : TRACE_RESIZE && console.log("  ignoring changes to usable because panned/zoomed") : (USABLE_H = window.innerWidth, 
        USABLE_V = window.innerHeight, TRACE_RESIZE && console.log(`desktop, setting usable ${USABLE_H} x ${USABLE_V}`));
        const list = [ {
            hh: 320,
            vv: 480,
            ratio: 2,
            actual: 326
        }, {
            hh: 320,
            vv: 568,
            ratio: 2,
            actual: 326
        }, {
            hh: 375,
            vv: 667,
            ratio: 2,
            actual: 326
        }, {
            hh: 414,
            vv: 736,
            ratio: 3,
            actual: 401
        }, {
            hh: 375,
            vv: 812,
            ratio: 2,
            actual: 326
        }, {
            hh: 375,
            vv: 812,
            ratio: 3,
            actual: 458
        }, {
            hh: 414,
            vv: 896,
            ratio: 2,
            actual: 326
        }, {
            hh: 414,
            vv: 896,
            ratio: 3,
            actual: 458
        }, {
            hh: 320,
            vv: 640,
            ratio: 2,
            actual: 306
        }, {
            hh: 320,
            vv: 640,
            ratio: 3,
            actual: 441
        }, {
            hh: 360,
            vv: 640,
            ratio: 4,
            actual: 557
        }, {
            hh: 810,
            vv: 1080,
            ratio: 2,
            actual: 264
        }, {
            hh: 962,
            vv: 601,
            ratio: 1.33,
            actual: 189
        } ];
        for (var item of list) if ((SCREEN_H == item.hh && SCREEN_V == item.vv || SCREEN_H == item.hh && SCREEN_V == item.vv) && item.ratio - dev_ratio < .01) {
            SCREEN_DPI = item.actual / dev_ratio, TRACE_RESIZE && console.log(`overriding DPI to ${SCREEN_DPI}`);
            break;
        }
    }
}

export function js_svg_wrapper(container, opacity) {
    if (container.has_transform) return container.firstChild.firstChild;
    if (container.childNodes.length > 0) {
        var top_elem = container.lastChild;
        if ("svg" == top_elem.tagName) return top_elem;
    }
    if (CHECKS && (container.bounds.width < 0 || container.bounds.height < 0)) debugger;
    var wrapper = document.createElementNS(SVG_NS, "svg");
    wrapper.style.position = "absolute";
    let content_h = container.bounds.width, content_v = container.bounds.height;
    return null != container.div && (content_h = container.div.content_h, content_v = container.div.content_v), wrapper.setAttribute("width", content_h.toFixed(0)), wrapper.setAttribute("height", content_v.toFixed(0)), 
    1 != opacity && wrapper.setAttribute("opacity", opacity.toFixed(3)), container.appendChild(wrapper), wrapper;
};

export function input_set_value(mod, loc, field, newval) {
    setv(mod, loc, field, F_in_value, newval);
    var id = gets(field, F_in_label);
    if (null != id) {
        var dom = document.getElementById(id);
        null != dom && (dom.value = newval);
    }
};

export function input_set_selection(field, options) {
    var start = 1, stop = U;
    for (let property in options) switch (property) {
      case "start":
        start = options.start;
        break;

      case "stop":
        stop = options.stop;
        break;

      default:
        argument_err("bad option: " + property);
    }
    var id = gets(field, F_in_label);
    if (null != id) {
        var dom = document.getElementById(id);
        if (null != dom) stop == U && (stop = 9999999), dom.focus(), dom.setSelectionRange(start - 1, stop); else if (CHECKS) debugger;
    }
};

export function canvb(arg_addr) {
    return get_generic(arg_addr, F_sysobj);
};

export function remote_call(connection, func_name, func_hash, parms) {
    let fix1, i, nparms, parmval, parmpos;
    var socket = get_object(connection, F_client_channel);
    for (null == gg_buf ? gg_buf = new_bytes(SEND_BUF_SIZE, LITTLE_ENDIAN) : gg_buf.position = 0, bytes_put_u8(gg_buf, SOP_BATCH_START), bytes_put_u8(gg_buf, 0), fix1 = gg_buf.position, bytes_put_u32(gg_buf, 0), 
    bytes_put_u8(gg_buf, SOP_CALL), bytes_put_u32(gg_buf, func_hash), nparms = parms.length, bytes_put_u8(gg_buf, nparms), TRACE_ENCODE && logg(str.conv("=> remote call to {}, hash={}, nparms={}", func_name, str.to_str(func_hash, {
        base: 16
    }), nparms)), i = 0; i < nparms; i++) parmval = parms[i], parmpos = gg_buf.position, parmval instanceof a_path ? bytes_put_relpath(gg_buf, parmval, socket.my_client_dest) : bytes_put_val(gg_buf, parmval, 0), 
    TRACE_ENCODE && logg(`  at offset ${parmpos}: parm[${i}]=${str.to_str(parmval)}`);
    bytes_put_u8(gg_buf, SOP_BATCH_END), bytes_fixup_len(gg_buf, fix1);
    var ncum = getn(connection, F_client_bytes_out) + gg_buf.position;
    setv(_M, 0, connection, F_client_bytes_out, ncum), TRACE_CHAN && logg(str.conv("--sending {} bytes ({} cumulative) of remote call to func {}", gg_buf.position, ncum, func_name)), websocket_send(socket, gg_buf, gg_buf.position);
};

export function websocket_open(url, data_handler, status_handler) {
    var sock = new WebSocket(url);
    return sock.onmessage = function(event) {
        data_handler(sock, event.data);
    }, sock.onopen = function(event) {
        status_handler(sock, WEBSOCK_OPEN);
    }, sock.onclose = function(event) {
        status_handler(sock, WEBSOCK_CLOSE);
    }, sock.onerror = function(event) {
        status_handler(sock, WEBSOCK_ERROR);
    }, sock;
};

export function websocket_close(sock) {
    sock.close();
};

export function websocket_send(sock, data, len = U) {
    if (data instanceof ByteArray) {
        len == U && (len = data.position);
        var exactbuf = data.arraybuf.slice(0, len);
        TRACE_CHAN && logg(str.conv("--sock.send binary len={}", len)), sock.send(exactbuf);
    } else "string" == typeof data ? (TRACE_CHAN && logg(str.conv("--sock.send string={}", data.substr(0, 20))), sock.send(data)) : console.log(`### unknown type of data being sent: ${typeof data}`);
};

const CURSOR_ID = "$cursor";

export function cursor_set(curs) {
    if (setv(_M, 0, runtime, F_cursor_changed, Y), curs != g_curr_cursor) {
        switch (g_curr_cursor = curs, curs) {
          case CURS_ARROW:
            document.body.style.cursor = "default";
            break;

          case CURS_FINGER:
            document.body.style.cursor = "pointer";
            break;

          case CURS_HAND:
            document.body.style.cursor = "grab";
            break;

          case CURS_IBEAM:
            document.body.style.cursor = "text";
            break;

          case CURS_HIDE:
            document.body.style.cursor = "none";
            break;

          case CURS_ALIAS:
            document.body.style.cursor = "alias";
            break;

          case CURS_CELL:
            document.body.style.cursor = "cell";
            break;

          case CURS_CONTEXT:
            document.body.style.cursor = "context-menu";
            break;

          case CURS_COPY:
            document.body.style.cursor = "copy";
            break;

          case CURS_CROSSHAIR:
            document.body.style.cursor = "crosshair";
            break;

          case CURS_GRABBING:
            document.body.style.cursor = "grabbing";
            break;

          case CURS_MOVE:
            document.body.style.cursor = "move";
            break;

          case CURS_NOT:
            document.body.style.cursor = "no-drop";
            break;

          case CURS_QUESTION:
            document.body.style.cursor = "help";
            break;

          case CURS_WAIT:
            document.body.style.cursor = "wait";
            break;

          case CURS_ZOOM_IN:
            document.body.style.cursor = "zoom-in";
            break;

          case CURS_ZOOM_OUT:
            document.body.style.cursor = "zoom-out";
            break;

          case CURS_RESIZE_COL:
            document.body.style.cursor = "col-resize";
            break;

          case CURS_RESIZE_ROW:
            document.body.style.cursor = "row_resize";
            break;

          case CURS_RESIZE_N:
            document.body.style.cursor = "n-resize";
            break;

          case CURS_RESIZE_S:
            document.body.style.cursor = "s-resize";
            break;

          case CURS_RESIZE_E:
            document.body.style.cursor = "e-resize";
            break;

          case CURS_RESIZE_W:
            document.body.style.cursor = "w-resize";
            break;

          case CURS_RESIZE_NE:
            document.body.style.cursor = "ne-resize";
            break;

          case CURS_RESIZE_NW:
            document.body.style.cursor = "nw-resize";
            break;

          case CURS_RESIZE_SE:
            document.body.style.cursor = "se-resize";
            break;

          case CURS_RESIZE_SW:
            document.body.style.cursor = "sw-resize";
            break;

          case CURS_DIAG_RIGHT:
            document.body.style.cursor = "nesw-resize";
            break;

          case CURS_DIAG_LEFT:
            document.body.style.cursor = "nwse-resize";
            break;

          default:
            CHECKS && argument_err(`bad cursor: ${curs}`);
        }
        var tag = document.getElementById(CURSOR_ID);
        null != tag && tag.parentElement.removeChild(tag);
    }
};

export function cursor_custom(arg_image, arg_hotspot, arg_xy) {
    document.body.style.cursor = "none";
    var arg_x = getn(arg_xy, F_x), arg_y = getn(arg_xy, F_y), netx = arg_x - getn(arg_hotspot, F_x), nety = arg_y - getn(arg_hotspot, F_y), tag = document.getElementById(CURSOR_ID);
    if (null == tag) draw_image(g_root_block, null, arg_image, {
        idss: CURSOR_ID,
        x: netx,
        y: nety,
        shrink: N,
        grow: N
    }); else {
        var transform_ss = `translate(${netx.toFixed(0)}px,${nety.toFixed(0)}px)`;
        tag.style.transform = transform_ss;
    }
    setv(_M, 0, runtime, F_cursor_changed, Y);
};

export function numeric_arg(val) {
    return void 0 != val && "number" == typeof val && is_numeric(val) == Y ? val : (CHECKS && argument_err("bad numeric parameter"), 0);
};

function str_to_uint8(ss) {
    return new TextEncoder("utf-8").encode(ss);
}

function uint8_to_str(uint8array) {
    return new TextDecoder("utf-8").decode(uint8array);
}

export function new_bytes(len, order = LITTLE_ENDIAN) {
    return new ByteArray(len, order);
};

function bytes_fixup_len(buf, fixpos) {
    var eof = buf.position, fixlen = eof - fixpos - 4;
    buf.position = fixpos, bytes_put_u32(buf, fixlen), buf.position = eof;
}

function bytes_put_relpath(buf, argpath, basis) {
    var i, basisn = basis.key.length, nlevels = argpath.key.length - basis.key.length;
    if (argpath.base != basis.base || nlevels < 0) throw new Error("remote call is sending a path that is not relative to the channel base");
    for (i = 0; i < basisn; i++) if (argpath.key[i] != basis.key[i]) throw new Error(`remote call path argument is not deeper than the base in art ${i}`);
    for (TRACE_ENCODE && logg(`bytes_put_relpath, offset=${buf.position}, nlevels=${nlevels}`), bytes_put_u8(buf, NOV_RELPATH), bytes_put_u8(buf, nlevels), i = 0; i < nlevels; i++) TRACE_ENCODE && logg(`  relpath level=${i}, offset=${buf.position}`), 
    bytes_put_val(buf, argpath.key[basisn + i], 0);
}

function bytes_get_relpath(buf, basis) {
    var i, subscript, net = basis.clone(), nlevels = bytes_get_u8(buf);
    for (TRACE_DECODE && logg(`bytes_get_relpath, nlevels=${nlevels}`), i = 0; i < nlevels; i++) TRACE_DECODE && logg(`  relpath level=${i}, offset=${buf.position}`), subscript = bytes_get_val(buf), net.key.push(subscript);
    return net;
}

export function bytes_put_chunk(buf, ss) {
    for (let i = 0; i < 4; i++) bytes_put_u8(buf, str.from_char(ss.charAt(i)));
    var fixup_offset = buf.position;
    return bytes_put_u32(buf, 0), fixup_offset;
};

export function bytes_get_chunk(buf) {
    let name = "";
    for (let i = 0; i < 4; i++) name += str.to_char(bytes_get_u8(buf));
    return {
        name: name,
        len: bytes_get_u32(buf)
    };
};

export function bytes_put_num(bytes, val) {
    bytes.view.setFloat64(bytes.position, val, bytes.little), bytes.position += 8, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_num(bytes) {
    var val = bytes.view.getFloat64(bytes.position, bytes.little);
    return bytes.position += 8, val;
};

export function bytes_put_bytes(bytes, src, len) {
    bytes_put_u32(bytes, len);
    var dst_view = new Uint8Array(bytes.arraybuf, bytes.position), src_view = new Uint8Array(src.arraybuf, 0, len);
    dst_view.set(src_view, 0), bytes.position += len, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_bytes(bytes) {
    var len = bytes_get_u32(bytes);
    console.log(`bytes_get_bytes, len=${len}, pos=${bytes.position}, totlen=${bytes.arraybuf.byteLength}`);
    var chunk = bytes.arraybuf.slice(bytes.position, bytes.position + len);
    return bytes.position += len, ArrayBuffer_to_ByteArray(chunk, LITTLE_ENDIAN);
};

export function bytes_put_uv(buf, len) {
    len <= 120 ? bytes_put_u8(buf, len) : len < 65536 ? (bytes_put_u8(buf, 121), bytes_put_u16(buf, len)) : len < TWO_24 ? (bytes_put_u8(buf, 122), bytes_put_u8(buf, len / TWO_16), bytes_put_u16(buf, len % TWO_16)) : len < TWO_32 ? (bytes_put_u8(buf, 123), 
    bytes_put_u32(buf, len)) : len < TWO_40 ? (bytes_put_u8(buf, 124), bytes_put_u8(buf, len / TWO_32), bytes_put_u32(buf, len % TWO_32)) : len < TWO_48 ? (bytes_put_u8(buf, 125), bytes_put_u16(buf, len / TWO_32), 
    bytes_put_u32(buf, len % TWO_32)) : len < TWO_56 ? (bytes_put_u8(buf, 126), bytes_put_u8(buf, len / TWO_48), bytes_put_u16(buf, len / TWO_32 % TWO_16), bytes_put_u32(buf, len % TWO_32)) : (bytes_put_u8(buf, 127), 
    bytes_put_u32(buf, len / TWO_32), bytes_put_u32(buf, len % TWO_32));
};

export function bytes_get_uv(buf) {
    var hi, lo, med, b1 = bytes_get_u8(buf);
    switch (b1) {
      case 121:
        return bytes_get_u16(buf);

      case 122:
        return hi = bytes_get_u8(buf), lo = bytes_get_u16(buf), hi * TWO_16 + lo;

      case 123:
        return bytes_get_u32(buf);

      case 124:
        return hi = bytes_get_u8(buf), lo = bytes_get_u32(buf), hi * TWO_32 + lo;

      case 125:
        return hi = bytes_get_u16(buf), lo = bytes_get_u32(buf), hi * TWO_32 + lo;

      case 126:
        return hi = bytes_get_u8(buf), med = bytes_get_u16(buf), lo = bytes_get_u32(buf), hi * TWO_48 + med * TWO_32 + lo;

      case 127:
        return hi = bytes_get_u32(buf), lo = bytes_get_u32(buf), hi * TWO_32 + lo;

      default:
        return b1;
    }
};

export function bytes_put_i8(bytes, val) {
    bytes.view.setInt8(bytes.position, val), bytes.position += 1, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_i8(bytes) {
    var val = bytes.view.getInt8(bytes.position);
    return bytes.position += 1, val;
};

export function bytes_put_i16(bytes, val) {
    bytes.view.setInt16(bytes.position, val, bytes.little), bytes.position += 2, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_i16(bytes) {
    var val = bytes.view.getInt16(bytes.position, bytes.little);
    return bytes.position += 2, val;
};

export function bytes_put_i24(buf, val) {
    bytes_put_u8(buf, val), bytes_put_u8(buf, val >> 8), bytes_put_u8(buf, val >> 16);
};

export function bytes_get_i24(buf) {
    var result, low = bytes_get_u8(buf), med = bytes_get_u8(buf), hig = bytes_get_u8(buf);
    return result = (hig << 16) + (med << 8) + low, 128 & hig && (result |= 4278190080), result;
};

export function bytes_put_i32(bytes, val) {
    bytes.view.setInt32(bytes.position, val, bytes.little), bytes.position += 4, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_i32(bytes) {
    var val = bytes.view.getInt32(bytes.position, bytes.little);
    return bytes.position += 4, val;
};

export function bytes_put_u8(bytes, val) {
    bytes.view.setUint8(bytes.position, val), bytes.position += 1, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_u8(bytes) {
    var val = bytes.view.getUint8(bytes.position);
    return bytes.position += 1, val;
};

export function bytes_put_u16(bytes, val) {
    bytes.view.setUint16(bytes.position, val, bytes.little), bytes.position += 2, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_u16(bytes) {
    var val = bytes.view.getUint16(bytes.position, bytes.little);
    return bytes.position += 2, val;
};

export function bytes_put_u32(bytes, val) {
    bytes.view.setUint32(bytes.position, val, bytes.little), bytes.position += 4, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_u32(bytes) {
    var val = bytes.view.getUint32(bytes.position, bytes.little);
    return bytes.position += 4, val;
};

export function bytes_put_val(buf, val, flag) {
    if ("number" == typeof val) 0 == val ? (bytes_put_u8(buf, flag | NOV_0), TRACE_ENCODE && logg(str.conv(" put_val, offset={}, ZERO", buf.position))) : val == Y ? (bytes_put_u8(buf, flag | NOV_Y), TRACE_ENCODE && logg(str.conv(" put_val, offset={}, Y", buf.position))) : val == N ? (bytes_put_u8(buf, flag | NOV_N), 
    TRACE_ENCODE && logg(str.conv(" put_val, offset={}, N", buf.position))) : val == U ? (bytes_put_u8(buf, flag | NOV_U), TRACE_ENCODE && logg(str.conv(" put_val, offset={}, U", buf.position))) : Number.isNaN(val) ? (bytes_put_u8(buf, flag | NOV_ERR), 
    TRACE_ENCODE && logg(str.conv(" put_val, offset={}, ERR", buf.position))) : (bytes_put_u8(buf, flag | NOV_NUM), TRACE_ENCODE && logg(str.conv(" put_val, offset={}, num={}", buf.position, val)), bytes_put_num(buf, val)); else if ("string" == typeof val) bytes_put_u8(buf, flag | NOV_STR), 
    TRACE_ENCODE && logg(str.conv(" put_val, offset={}, str={}", buf.position, val)), bytes_put_str(buf, val); else if (val instanceof a_path) bytes_put_u8(buf, flag | NOV_PATH), TRACE_ENCODE && logg(str.conv(" put_val, offset={}, path", buf.position)), 
    bytes_put_path(buf, val); else if (val instanceof a_function) {
        bytes_put_u8(buf, flag | NOV_FUNC), TRACE_ENCODE && logg(str.conv(" put_val, offset={}, func", buf.position)), bytes_put_u32(buf, val.hash);
    } else {
        if (!(val instanceof a_meas)) throw val instanceof a_image ? (bytes_put_u8(buf, flag | NOV_IMAGE), TRACE_ENCODE && logg(str.conv(" put_val, offset={}, image", buf.position)), new Error("a_image not yet")) : val instanceof a_sound ? (bytes_put_u8(buf, flag | NOV_SOUND), 
        TRACE_ENCODE && logg(str.conv(" put_val, offset={}, sound", buf.position)), new Error("a_sound not yet")) : (bytes_put_u8(buf, flag | NOV_OBJECT), new Error(`unsupported type ${typeof val}`));
        bytes_put_u8(buf, flag | NOV_MEAS), TRACE_ENCODE && logg(str.conv(" put_val, offset={}, meas", buf.position)), bytes_put_num(buf, val.mag), bytes_put_num(buf, val.unit), bytes_put_num(buf, val.family), 
        bytes_put_str(buf, val.unitss);
    }
};

export function bytes_put_path(buf, mypath) {
    let mykey;
    for (mykey of (mypath.base instanceof a_tree ? (TRACE_ENCODE && logg(str.conv(" put_path, offset={}, hard hash={}", buf.position, mypath.base.sub)), bytes_put_u32(buf, mypath.base.sub)) : (TRACE_ENCODE && logg(str.conv(" put_path, offset={}, soft hash={}", buf.position, mypath.base)), 
    bytes_put_u32(buf, mypath.base)), bytes_put_u8(buf, mypath.key.length), mypath.key)) bytes_put_val(buf, mykey, 0);
};

export function bytes_get_path(buf) {
    let mypath = new a_path(), hash = bytes_get_u32(buf);
    if (mypath.base = TREES[hash], void 0 == mypath.base) throw new Error("can't resolve path base");
    let kind, nkeys = bytes_get_u8(buf);
    for (let i = 0; i < nkeys; i++) switch (kind = bytes_get_u8(buf)) {
      case NOV_STR:
        mypath.key.push(bytes_get_str(buf));
        break;

      case NOV_NUM:
        mypath.key.push(bytes_get_num(buf));
        break;

      default:
        throw new Error("bad op");
    }
    return mypath;
};

export function bytes_put_tree(buf, subtree) {
    let node = path_to_node(subtree);
    bytes_put_u8(buf, SOP_TREE_BIN), bytes_put_subtree(buf, node), bytes_put_u8(buf, SOP_EOT);
};

export function bytes_put_subscript(buf, sub) {
    "string" == typeof sub ? (bytes_put_u8(buf, SUB_STR), TRACE_ENCODE && console.log(str.conv("  at {} SUB_STR [{}]", buf.position, sub)), bytes_put_str(buf, sub)) : 1 == sub ? (bytes_put_u8(buf, SUB_1), 
    TRACE_ENCODE && console.log(str.conv("  at {} SUB_1", buf.position))) : sub >= -TWO_7 && sub < TWO_7 ? (bytes_put_u8(buf, SUB_INT8), TRACE_ENCODE && console.log(str.conv("  at {} SUB_INT8 [{}]", buf.position, sub)), 
    bytes_put_i8(buf, sub)) : sub >= -TWO_15 && sub < TWO_15 ? (bytes_put_u8(buf, SUB_INT16), TRACE_ENCODE && console.log(str.conv("  at {} SUB_INT16 [{}]", buf.position, sub)), bytes_put_i16(buf, sub)) : sub >= -TWO_23 && sub < TWO_23 ? (bytes_put_u8(buf, SUB_INT24), 
    TRACE_ENCODE && console.log(str.conv("  at {} SUB_INT24 [{}]", buf.position, sub)), bytes_put_i24(buf, sub)) : sub >= -TWO_31 && sub < TWO_31 ? (bytes_put_u8(buf, SUB_INT32), TRACE_ENCODE && console.log(str.conv("  at {} SUB_INT32 [{}]", buf.position, sub)), 
    bytes_put_i32(buf, sub)) : is_enum_b(sub) ? (bytes_put_u8(buf, SUB_ENUM), TRACE_ENCODE && console.log(str.conv("  at {} SUB_ENUM [{}]", buf.position, sub)), bytes_put_u32(buf, sub - FIRST_ENUM)) : (bytes_put_u8(buf, SUB_NUM), 
    TRACE_ENCODE && console.log(str.conv("  at {} SUB_NUM [{}]", buf.position, sub)), bytes_put_num(buf, sub));
};

function bytes_put_subtree(buf, node) {
    let flag = 0;
    if (0 == (node.eflags & EF_VAL_IS_U) && (null != node.children && (flag = NOPOP), TRACE_ENCODE && console.log(str.conv("bytes_put_subtree, val={}", node.val)), bytes_put_val(buf, node.val, flag)), null != node.children) {
        for (let child of node.children) bytes_put_subscript(buf, child.sub), bytes_put_subtree(buf, child);
        TRACE_ENCODE && logg(str.conv(" end of children at {} opcode=POP", buf.position)), bytes_put_u8(buf, SUB_POP);
    }
}

export function bytes_get_tree(buf, destp) {
    var opcode, sub_num, sub_str, skip_pop, val, dest = destp.clone();
    outer: for (;;) switch (skip_pop = 0 != ((opcode = bytes_get_u8(buf)) & NOPOP), opcode &= OPCODE_MASK, TRACE_DECODE && console.log(str.conv("get_tree at {} opcode={} skip={}", buf.position, opcode_ss(opcode), skip_pop)), 
    opcode) {
      case SUB_NUM:
        sub_num = bytes_get_num(buf), dest.key.push(sub_num), TRACE_DECODE && console.log(str.conv("  SUB_NUM [{}]", sub_num));
        break;

      case SUB_STR:
        sub_str = bytes_get_str(buf), dest.key.push(sub_str), TRACE_DECODE && console.log(str.conv("  SUB_STR [{}]", sub_str));
        break;

      case SUB_1:
        dest.key.push(1), sub_num = 1, TRACE_DECODE && console.log("  SUB_1");
        break;

      case SUB_INT8:
        sub_num = bytes_get_i8(buf), dest.key.push(sub_num), TRACE_DECODE && console.log(str.conv("  SUB_INT8 [{}]", sub_num));
        break;

      case SUB_INT16:
        sub_num = bytes_get_i16(buf), dest.key.push(sub_num), TRACE_DECODE && console.log(str.conv("  SUB_INT16 [{}]", sub_num));
        break;

      case SUB_INT24:
        sub_num = bytes_get_i24(buf), dest.key.push(sub_num), TRACE_DECODE && console.log(str.conv("  SUB_INT24 [{}]", sub_num));
        break;

      case SUB_INT32:
        sub_num = bytes_get_i32(buf), dest.key.push(sub_num), TRACE_DECODE && console.log(str.conv("  SUB_INT32 [{}]", sub_num));
        break;

      case SUB_ENUM:
        sub_num = (val = bytes_get_u32(buf)) + FIRST_ENUM, dest.key.push(sub_num), TRACE_DECODE && console.log(str.conv("  SUB_ENUM [{}]", sub_num));
        break;

      case SUB_POP:
        dest.key.pop();
        break;

      case SOP_EOT:
        TRACE_DECODE && console.log("  SOP_EOT");
        break outer;

      case SOP_BATCH_END:
        TRACE_DECODE && console.log("  ERROR in stream, forgot to send SOP_EOT"), buf.position -= 1;
        break outer;

      default:
        val = bytes_get_val2(buf, opcode), TRACE_DECODE && console.log(str.conv("  storing value {}, dest={}", val, dest)), setv(_M, 0, dest, val), skip_pop || dest.key.pop();
    }
    TRACE_DECODE && console.log(str.conv("..end get_tree at {}", buf.position));
};

export function bytes_put_micro(buf, micro) {
    TRACE_ENCODE && console.log(str.conv("  put_micro at {} .kind {}", buf.position, micro.kind)), bytes_put_u32(buf, micro.kind), bytes_put_u32(buf, Math.round(100 * micro.when)), bytes_put_uv(buf, micro.module), 
    bytes_put_uv(buf, micro.where), micro.kind & OPS_THAT_USE_PATH && (TRACE_ENCODE && console.log(str.conv("  put_micro .path at {}", buf.position)), bytes_put_path(buf, micro.path), bytes_put_val(buf, micro.oldval, 0), 
    bytes_put_val(buf, micro.newval, 0));
};

export function bytes_get_micro(buf) {
    let micro = {};
    return TRACE_DECODE && console.log(str.conv("  get_micro at {} .kind", buf.position)), micro.kind = bytes_get_u32(buf), TRACE_DECODE && console.log(str.conv("     .kind={}", micro.kind)), micro.when = bytes_get_u32(buf) / 100, 
    micro.module = bytes_get_uv(buf), micro.where = bytes_get_uv(buf), micro.kind & OPS_THAT_USE_PATH && (TRACE_DECODE && console.log(str.conv("  path={}", micro.path)), micro.path = bytes_get_path(buf), 
    micro.oldval = bytes_get_val(buf), micro.newval = bytes_get_val(buf)), micro;
};

export function bytes_put_str(bytes, str) {
    var i, utf8 = [], strlen = str.length;
    for (i = 0; i < strlen; i++) {
        var charcode = str.charCodeAt(i);
        charcode < 128 ? utf8.push(charcode) : charcode < 2048 ? utf8.push(192 | charcode >> 6, 128 | 63 & charcode) : charcode < 55296 || charcode >= 57344 ? utf8.push(224 | charcode >> 12, 128 | charcode >> 6 & 63, 128 | 63 & charcode) : (i++, 
        charcode = 65536 + ((1023 & charcode) << 10 | 1023 & str.charCodeAt(i)), utf8.push(240 | charcode >> 18, 128 | charcode >> 12 & 63, 128 | charcode >> 6 & 63, 128 | 63 & charcode));
    }
    var len8 = utf8.length;
    for (bytes_put_uv(bytes, len8), i = 0; i < len8; i++) bytes.view.setUint8(bytes.position, utf8[i]), bytes.position += 1, bytes.position > bytes.length && (bytes.length = bytes.position);
};

export function bytes_get_str(bytes) {
    var i, len = bytes_get_uv(bytes), str = "";
    for (i = 0; i < len; i++) {
        var value = bytes_get_u8(bytes);
        if (value < 128) str += String.fromCharCode(value); else if (value > 191 && value < 224) str += String.fromCharCode((31 & value) << 6 | 63 & bytes_get_u8(bytes)), i += 1; else if (value > 223 && value < 240) str += String.fromCharCode((15 & value) << 12 | (63 & bytes_get_u8(bytes)) << 6 | 63 & bytes_get_u8(bytes)), 
        i += 2; else {
            var charCode = ((7 & value) << 18 | (63 & bytes_get_u8(bytes)) << 12 | (63 & bytes_get_u8(bytes)) << 6 | 63 & bytes_get_u8(bytes)) - 65536;
            str += String.fromCharCode(charCode >> 10 | 55296, 1023 & charCode | 56320), i += 3;
        }
    }
    return str;
};

export function bytes_get_val(buf) {
    return bytes_get_val2(buf, bytes_get_u8(buf));
};

function bytes_get_val2(buf, valkind) {
    var val_meas, val_hash, val_func;
    switch (TRACE_DECODE && console.log(str.conv("get_val at {}", buf.position)), valkind) {
      case NOV_NUM:
        return bytes_get_num(buf);

      case NOV_STR:
        return bytes_get_str(buf);

      case NOV_INT8:
        return bytes_get_i8(buf);

      case NOV_INT16:
        return bytes_get_i16(buf);

      case NOV_INT24:
        return bytes_get_i24(buf);

      case NOV_INT32:
        return bytes_get_i32(buf);

      case NOV_0:
        return 0;

      case NOV_1:
        return 1;

      case NOV_N:
        return N;

      case NOV_U:
        return U;

      case NOV_Y:
        return Y;

      case NOV_ERR:
        return ERR;

      case NOV_FUNC:
        return val_hash = bytes_get_u32(buf), null == (val_func = FUNCS[val_hash]) && CHECKS && internal_err("missing inverse for func"), val_func;

      case NOV_MEAS:
        return (val_meas = new a_meas()).mag = bytes_get_num(buf), val_meas.unit = bytes_get_num(buf), val_meas.family = bytes_get_num(buf), val_meas.unitss = bytes_get_str(buf), val_meas;

      case NOV_PATH:
        return bytes_get_path(buf);

      case NOV_IMAGE:
      case NOV_OBJECT:
      case NOV_SOUND:
      case NOV_VIDEO:
        return ERR;

      default:
        throw new Error(str.conv("bad valkind: {}", valkind));
    }
}

export function loc(base_ss, base_lang, module, stringx, options = null) {
    let langx = getn(runtime, F_ui_language), table = "", plural = U;
    for (let property in options) switch (property) {
      case "langx":
        langx = options.langx;
        break;

      case "plural":
        plural = options.plural;
        break;

      case "table":
        table = options.table;
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (langx == base_lang || 0 == stringx) return base_ss;
    if (stringx == U) return U_STR;
    if (Number.isNaN(stringx)) return ERR_STR;
    let ss = gets(LOCALIZED, langx, module, stringx);
    return ss == U_STR ? CHECKS ? base_ss + "🦠" : base_ss : ss;
};

export function set_ui_language(lang) {
    is_enum_b(lang) ? (setv(_M, 0, runtime, F_ui_language, lang), refresh_all()) : internal_err("bad language selection");
};

export function clock_tick() {
    now_raw = sys_rawtime(), elapsed_raw = now_raw - time_launched_raw, now = sys_dilatedime(), elapsed = now - time_launched;
};

export function zap_clock() {
    let raw = sys_rawtime();
    time_launched_raw = raw, time_launched = raw, now_raw = raw, now = raw, elapsed = 0, elapsed_raw = 0, g_era_raw = raw, g_era_dilated = raw;
};

export function sys_rawtime() {
    return .001 * Date.now();
};

export function sys_dilatedime() {
    let net = g_era_dilated + (now_raw - g_era_raw) * g_time_scale;
    return TRACE_TIME && logg(str.conv(">> now, now_raw={n3}, era_dilated={n3}, era_raw={n3}, scale={n3}, net={n3}", now_raw, g_era_dilated, g_era_raw, g_time_scale, net)), net;
};

export function coverage(name) {
    inc(_M, 0, adr(runtime, F_code_coverage, name));
};

export function unfreeze_calc(f) {
    return null != f.parms ? f.code.apply(null, f.parms) : f.code();
};

export function unfreeze_draw(b, f) {
    null != f.parms ? f.code.apply(null, [ b ].concat(f.parms)) : f.code(b);
};

export function unfreeze_track(b, event, f) {
    return null != f.parms ? f.tracker.apply(null, [ b, event ].concat(f.parms)) : f.tracker(b, event);
};

var g_old_mon_h = 0, g_old_mon_v = 0;

export function monitored_draw(b, options) {
    var is_dead = !1;
    for (let property in options) switch (property) {
      case "dead":
        is_dead = options.dead == Y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    is_dead && (b.bflags |= BFLAG_DEAD), b.bflags &= ~BFLAG_IDE, b.bounds.width == g_old_mon_h && b.bounds.height == g_old_mon_v || (g_old_mon_h = b.bounds.width, g_old_mon_v = b.bounds.height, post_resize_event(b, monitored_draw_F.tracker)), 
    monitored_draw_F.code(b);
};

export function monitored_init() {
    loom_clear_all(), zap_clock(), aaaa.main_init();
};

export function resolve_filepath(mypath) {
    var f = null;
    return "[" == mypath.substr(0, 1) && ("[APP_RESOURCES]" == mypath.substr(0, 15) ? f = mypath.substr(15) : "[APP_STORAGE]" == mypath.substr(0, 13) ? f = mypath.substr(13) : "[DOCUMENTS]" == mypath.substr(0, 11) ? f = mypath.substr(11) : "[DESKTOP]" == mypath.substr(0, 9) ? f = mypath.substr(9) : "[USER]" == mypath.substr(0, 6) && (f = mypath.substr(6))), 
    null == f && (f = mypath), f;
};

export function debug_blackbox_send(url, port, id, filename, options) {
    var bbox_conn = new a_tree(_M, "$debug_blackbox_send", 0);
    subscribe_start(_M, 0, bbox_conn, url, port, id, U, null, {
        status_handler: function(conn) {
            var status = getn(conn, F_client_status);
            TRACE_BLACKBOX && console.log(`>> bbox_send_progress, status=${str.to_str(status)}`);
            switch (status) {
              case CSTATUS_CONNECTED:
                var buf = new_bytes(SEND_BUF_SIZE, LITTLE_ENDIAN);
                bytes_put_u8(buf, SOP_BATCH_START), bytes_put_u8(buf, 0);
                var fixpos1 = buf.position;
                bytes_put_u32(buf, 0), bytes_put_u8(buf, SOP_BBOX), bytes_put_str(buf, filename);
                void 0 != options.mail_addr && (mail_subj = options.mail_addr);
                var mail_subj = "";
                void 0 != options.mail_subj && (mail_subj = options.mail_subj);
                var mail_body = "";
                void 0 != options.mail_body && (mail_body = options.mail_body), bytes_put_str(buf, ""), bytes_put_str(buf, mail_subj), bytes_put_str(buf, mail_body);
                var fixpos2 = buf.position;
                bytes_put_u32(buf, 0), debug_blackbox_encode(buf, options), bytes_fixup_len(buf, fixpos2), bytes_put_u8(buf, SOP_BATCH_END), bytes_fixup_len(buf, fixpos1);
                var sock = get_object(conn, F_client_channel);
                websocket_send(sock, buf, buf.position);
            }
        }
    });
};

export function debug_blackbox_write(mypath, options) {
    var buf = new_bytes(SEND_BUF_SIZE, LITTLE_ENDIAN);
    debug_blackbox_encode(buf, options), TRACE_BLACKBOX && console.log(str.conv("-- writing blackbox file to {}", mypath)), os_write_bytes(mypath, buf);
};

export function debug_blackbox_encode(buf, options) {
    var micro, ss, kind = "black box", note = "";
    for (var property in options) switch (property) {
      case "kind":
        kind = options.kind;
        break;

      case "note":
        note = options.note;
        break;

      case "mail_addr":
      case "mail_subj":
      case "mail_body":
        break;

      default:
        argument_err("bad option: " + property);
    }
    var fix1 = bytes_put_chunk(buf, "bbox");
    for (ss of (bytes_put_u16(buf, 1), bytes_put_str(buf, gets(runtime, F_app_name)), bytes_put_str(buf, gets(runtime, F_app_version)), bytes_put_num(buf, getn(runtime, F_os_kind)), bytes_put_num(buf, getn(runtime, F_os_language)), 
    bytes_put_str(buf, gets(runtime, F_os_version)), bytes_put_u16(buf, getn(runtime, F_screen_dpi)), bytes_put_u32(buf, getn(runtime, F_window_horz)), bytes_put_u32(buf, getn(runtime, F_window_vert)), bytes_put_num(buf, time_launched), 
    bytes_put_str(buf, kind), bytes_put_str(buf, note), bytes_put_u32(buf, getn(runtime, F_major_firstx)), bytes_put_uv(buf, MODULES.length), MODULES)) bytes_put_str(buf, ss);
    bytes_fixup_len(buf, fix1), TRACE_BLACKBOX && console.log(str.conv("  blackbox had {} major steps", tree_count(adr(runtime, F_major_steps))));
    var fix2 = bytes_put_chunk(buf, "majr");
    bytes_put_tree(buf, adr(runtime, F_major_steps)), bytes_fixup_len(buf, fix2);
    var fix3 = bytes_put_chunk(buf, "micr");
    for (micro of (bytes_put_uv(buf, g_micro.length), g_micro)) bytes_put_micro(buf, micro);
    bytes_put_u8(buf, SOP_EOT), bytes_fixup_len(buf, fix3);
};

export function debug_blackbox_read(fileobj, callback) {
    g_old_mon_h = 0, os_read_bytes(fileobj, new a_function(_M, "await_bbox_read", function(buf) {
        if ("bbox" != bytes_get_chunk(buf).name) return void callback.code(-2);
        if (1 != bytes_get_u16(buf)) return void callback.code(-3);
        var app_name = bytes_get_str(buf), app_ver = bytes_get_str(buf), os_kind = bytes_get_num(buf), os_lang = bytes_get_num(buf), os_ver = bytes_get_str(buf), screen_dpi = bytes_get_u16(buf), window_h = bytes_get_u32(buf), window_v = bytes_get_u32(buf), dead_launched = bytes_get_num(buf), kind = bytes_get_str(buf), note = bytes_get_str(buf), firstx = bytes_get_u32(buf);
        TRACE_DEBUG && console.log(str.conv("app_ver={}, os_ver={}, dpi={}, h={}, v={}", app_ver, os_ver, screen_dpi, window_h, window_v));
        setv(_M, 0, blackbox_runtime, F_app_name, app_name), setv(_M, 0, blackbox_runtime, F_app_version, app_ver), setv(_M, 0, blackbox_runtime, F_os_kind, os_kind), setv(_M, 0, blackbox_runtime, F_os_language, os_lang), 
        setv(_M, 0, blackbox_runtime, F_os_version, os_ver), setv(_M, 0, blackbox_runtime, F_screen_dpi, screen_dpi), setv(_M, 0, blackbox_runtime, F_window_horz, window_h), setv(_M, 0, blackbox_runtime, F_window_vert, window_v), 
        setv(_M, 0, blackbox_runtime, F_debug_kind, kind), setv(_M, 0, blackbox_runtime, F_debug_note, note), setv(_M, 0, blackbox_runtime, F_screen_horz, window_h), setv(_M, 0, blackbox_runtime, F_screen_vert, window_v);
        var i, nmods = bytes_get_uv(buf);
        for (BBOX_MODULES = [], i = 0; i < nmods; i++) BBOX_MODULES.push(bytes_get_str(buf));
        if ("majr" != bytes_get_chunk(buf).name) return void callback.code(-2);
        if (trunc_tree(_M, 0, adr(blackbox_runtime, F_major_steps)), bytes_get_u8(buf) != SOP_TREE_BIN) throw new Error("bad opcode");
        bytes_get_tree(buf, adr(blackbox_runtime, F_major_steps)), TRACE_DEBUG && console.log(str.conv("  read of {} major steps", tree_count(adr(blackbox_runtime, F_major_steps))));
        if (g_micro.length = 0, "micr" != bytes_get_chunk(buf).name) return void callback.code(-2);
        var micro, dead_nmicro = bytes_get_uv(buf);
        for (g_blackbox_micro = [], i = 0; i < dead_nmicro; i++) micro = bytes_get_micro(buf), g_blackbox_micro.push(micro);
        var dead_nmajor = tree_count(adr(blackbox_runtime, F_major_steps));
        TRACE_DEBUG && console.log(str.conv("  read of {} micro steps, {} major", dead_nmicro, dead_nmajor));
        setv(_M, 0, blackbox_runtime, F_major_stepx, dead_nmajor), setv(_M, 0, blackbox_runtime, F_major_firstx, firstx), loom_clear_all(), time_launched = dead_launched, elapsed = micro.when, g_time_scale = 0, 
        g_era_dilated = now = dead_launched + elapsed, g_era_raw = now_raw, do_micro_fwd(0, dead_nmicro, g_blackbox_micro), callback.code(Y);
    }));
};

function arraybuffer_to_str(arraybuffer) {
    return String.fromCharCode.apply(null, new Uint8Array(arraybuffer));
}

function arraybuf_begins(ss, arraybuf) {
    for (var myarray = new Uint8Array(arraybuf), len = ss.length, i = 0; i < len; i++) if (ss.charCodeAt(i) != myarray[i]) return !1;
    return !0;
}

const SUBOPT_ECHO = 1, SUBOPT_ADD_IP = 2;

export function subscribe_start(mod, loc, connection, arg_url, arg_port, arg_id, arg_rate, arg_dest, _options) {
    var flags = 0, handler = null;
    for (var property in _options) switch (property) {
      case "echo":
        _options.echo == Y && (flags |= SUBOPT_ECHO);
        break;

      case "add_ip":
        _options.add_ip == Y && (flags |= SUBOPT_ADD_IP);
        break;

      case "status_handler":
        handler = _options.status_handler;
        break;

      default:
        argument_err("bad option: " + property);
    }
    "localhost" == arg_url && (arg_url = "ws://127.0.0.1");
    var net = arg_url + ":" + arg_port + "/BE01/" + str.num_to_hex(arg_id) + "/SUBS/" + str.to_str(flags, {
        base: 16,
        min: 4,
        zero_pad: Y
    });
    TRACE_CHAN && logg(`>> subscribing to ${net}`);
    var sock = new WebSocket(net);
    sock.binaryType = "arraybuffer", sock.my_client_dest = arg_dest, sock.my_id = arg_id, sock.my_first = !0, setv(mod, 0, connection, F_client_channel, sock), setv(mod, loc, connection, F_client_bytes_in, 0), 
    setv(mod, loc, connection, F_client_bytes_out, 0), setv(mod, loc, connection, F_client_status, CSTATUS_CONNECTING), null != handler && handler(connection), sock.onopen = function(evt) {
        TRACE_CHAN && logg(str.conv(">> on_open, id={}", arg_id)), setv(mod, loc, connection, F_client_status, CSTATUS_CONNECTED), null != handler && handler(connection);
    }, sock.onclose = function(evt) {
        TRACE_CHAN && logg(str.conv(">> on_close, id={}", arg_id)), getn(connection, F_client_status) != CSTATUS_NO_ANSWER && (setv(mod, loc, connection, F_client_status, U), null != handler && handler(connection));
    }, sock.onerror = function(evt) {
        TRACE_CHAN && logg(str.conv(">> on_error, id={}", arg_id)), setv(mod, loc, connection, F_client_status, CSTATUS_NO_ANSWER), null != handler && handler(connection);
    }, sock.onmessage = function(evt) {
        TRACE_CHAN && logg(str.conv(">> on_message, id={}, len={}", arg_id, evt.data.byteLength)), 129 == evt.data.byteLength && console.log("BUF>>" + arraybuffer_to_str(evt.data));
        var ignore = !1;
        (sock.my_first && (sock.my_first = !1, ignore = arraybuf_begins("HTTP/1.1 101 ", evt.data)), ignore) || (process_client_batches(ArrayBuffer_to_ByteArray(evt.data, LITTLE_ENDIAN), arg_dest), null != handler && handler(connection));
    };
};

export function subscribe_stop(connection) {
    var sock = get_object(connection, F_client_channel);
    setv(_M, 0, connection, F_client_status, CSTATUS_DISCONNECTING), TRACE_CHAN && logg(str.conv(">> subscribe_stop, id={}", sock.my_id)), sock.close(1e3, "subscribe_stop");
};

function process_client_batches(mybuf, dest) {
    var opcode;
    if ((opcode = bytes_get_u8(mybuf)) == SOP_BATCH_START) {
        bytes_get_u8(mybuf);
        var pos, len = bytes_get_u32(mybuf), chunk_start = mybuf.position;
        if (TRACE_CLIENT && logg(`process_client_batches, chunk_len=${len}`), len > mybuf.arraybuf.byteLength) {
            console.log("Crazy chunk length");
            debugger;
        } else {
            bigloop: for (;;) switch (pos = mybuf.position, opcode = bytes_get_u8(mybuf), TRACE_DECODE && logg(`at ${pos}: ${opcode_ss(opcode)}`), opcode) {
              case SOP_NOP:
                break;

              case SOP_LOG:
                logg(">> SERVER: " + bytes_get_str(mybuf));
                break;

              case SOP_TREE_BSON:
                break;

              case SOP_TREE_BIN:
                bytes_get_tree(mybuf, dest);
                break;

              case SOP_CALL:
                bytes_get_u32(mybuf);
                for (var val, nparms = bytes_get_u8(mybuf), parmvals = [], i = 0; i < nparms; i++) val = bytes_get_val(mybuf), parmvals.push(val);
                break;

              case SOP_BATCH_END:
                break bigloop;

              default:
                logg(`-- bad opcode: ${opcode}`);
                debugger;
                break bigloop;
            }
            TRACE_CHAN && logg(`SUB: after parsing chunk, pos=${mybuf.position}, expect=${chunk_start + len}`);
        }
    } else logg(`Expected SOP_BATCH_START, got 0x${opcode.toString(16)}`);
}

export function http_encodeURIComponent(ss, _options) {
    var plusflag = !1;
    for (let property in _options) switch (property) {
      case "plus":
        plusflag = _options.plus == Y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    var tt = encodeURIComponent(ss);
    return plusflag && (tt = tt.replace(/%20/g, "+")), tt;
};

export function http_decodeURIComponent(ss, _options) {
    var plusflag = !1;
    for (let property in _options) switch (property) {
      case "plus":
        plusflag = _options.plus == Y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    return plusflag && (ss = ss.replace(/\+/g, " ")), decodeURIComponent(ss);
};

const http_encodeURI = encodeURI, http_decodeURI = decodeURI;

export function http_request(module, loc, url, _options) {
    let id = 0, method = "GET", encoding = ENCODE_FORM_URL, sendbuf = null, port = 80, timeout = 10, response = null, nocache = !1;
    for (let property in _options) switch (property) {
      case "id":
        id = _options.id;
        break;

      case "method":
        method = _options.method;
        break;

      case "encoding":
        encoding = _options.encoding;
        break;

      case "nocache":
        nocache = _options.nocache == Y;
        break;

      case "send":
        sendbuf = _options.send;
        break;

      case "port":
        port = _options.port;
        break;

      case "timeout":
        timeout = _options.timeout;
        break;

      case "response":
        response = _options.response;
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (null == response && argument_err("response field is required"), setv(module, loc, response, F_http_status, 0), setv(module, loc, response, F_http_phase, HTTP_START), "http" != url.substr(0, 4) && (url = "http://" + url), 
    80 != port && (url += ":" + port), nocache) switch (method) {
      case "GET":
      case "HEAD":
        var timestamp = new Date().getTime();
        url.indexOf("&") >= 0 ? url += "&" + timestamp : url += "?" + timestamp;
    }
    let request = new XMLHttpRequest();
    request.timeout = 1e3 * timeout, request.onerror = function(evt) {
        TRACE_CHAN && logg(`### on_error, id=${id}, url=${url}, ready=${request.readyState}, status=${request.status}`);
        setv(module, loc, response, F_http_phase, HTTP_DONE), setv(module, loc, response, F_http_status, 400);
    }, request.onabort = function(evt) {
        TRACE_CHAN && logg(`### on_abort, id=${id}, url=${url}, ready=${request.readyState}, status=${request.status}`);
        setv(module, loc, response, F_http_phase, HTTP_DONE), setv(module, loc, response, F_http_status, 400);
    }, request.ontimeout = function(evt) {
        TRACE_CHAN && logg(`### on_timeout, id=${id}, url=${url}, ready=${request.readyState}, status=${request.status}`);
        setv(module, loc, response, F_http_phase, HTTP_TIMEOUT), setv(module, loc, response, F_http_status, 408);
    }, request.onreadystatechange = function(evt) {
        TRACE_CHAN && logg(`### on_change, id=${id}, url=${url}, ready=${request.readyState}, status=${request.status}`);
        switch (request.readyState) {
          case 2:
            setv(module, loc, response, F_http_phase, HTTP_HEADERS), setv(module, loc, response, F_http_headers, request.getAllResponseHeaders());
            break;

          case 3:
            setv(module, loc, response, F_http_phase, HTTP_BUSY);
            break;

          case 4:
            switch (setv(module, loc, response, F_http_phase, HTTP_DONE), setv(module, loc, response, F_http_status, request.status), request.responseType) {
              case "arraybuffer":
              case "blob":
                setv(module, loc, response, F_http_body_type, BODY_BINARY);
                break;

              case "json":
                setv(module, loc, response, F_http_body_type, BODY_JSON);
                break;

              case "document":
                setv(module, loc, response, F_http_body_type, BODY_HTML);
                break;

              default:
                setv(module, loc, response, F_http_body_type, BODY_PLAIN);
            }
            "" != request.responseText && setv(module, loc, response, F_http_body, request.responseText), TRACE_CHAN && logg(`### on_change response=${request.responseText}`);
        }
    }, request.open(method, url), request.send(sendbuf);
};

function js_to_langx(langss) {
    var os_lang = LANG_ENG;
    switch (langss.substring(0, 2)) {
      case "am":
        os_lang = LANG_AMH;
        break;

      case "ar":
        os_lang = LANG_ARA;
        break;

      case "be":
        os_lang = LANG_BEL;
        break;

      case "bn":
        os_lang = LANG_BEN;
        break;

      case "bg":
        os_lang = LANG_BUL;
        break;

      case "ca":
        os_lang = LANG_CAT;
        break;

      case "zh":
        os_lang = "CN" == langss.substr(3, 2) ? LANG_CHS : LANG_CHT;
        break;

      case "hr":
        os_lang = LANG_CRO;
        break;

      case "cs":
        os_lang = LANG_CZE;
        break;

      case "da":
        os_lang = LANG_DAN;
        break;

      case "nl":
        os_lang = LANG_NED;
        break;

      case "en":
        os_lang = LANG_ENG;
        break;

      case "es":
        os_lang = LANG_ESL;
        break;

      case "fi":
        os_lang = LANG_FIN;
        break;

      case "fr":
        os_lang = LANG_FRA;
        break;

      case "ka":
        os_lang = LANG_GEO;
        break;

      case "de":
        os_lang = LANG_DEU;
        break;

      case "el":
        os_lang = LANG_GRE;
        break;

      case "gu":
        os_lang = LANG_GUJ;
        break;

      case "he":
        os_lang = LANG_HEB;
        break;

      case "hi":
        os_lang = LANG_HIN;
        break;

      case "hu":
        os_lang = LANG_HUN;
        break;

      case "is":
        os_lang = LANG_ICE;
        break;

      case "id":
        os_lang = LANG_IND;
        break;

      case "it":
        os_lang = LANG_ITA;
        break;

      case "ja":
        os_lang = LANG_JAP;
        break;

      case "ko":
        os_lang = LANG_KOR;
        break;

      case "ms":
        os_lang = LANG_MAL;
        break;

      case "mr":
        os_lang = LANG_MAR;
        break;

      case "no":
        os_lang = LANG_NOR;
        break;

      case "or":
        os_lang = LANG_ORI;
        break;

      case "fa":
        os_lang = LANG_PER;
        break;

      case "pl":
        os_lang = LANG_POL;
        break;

      case "pt":
        os_lang = LANG_POR;
        break;

      case "pa":
        os_lang = LANG_PUN;
        break;

      case "ro":
        os_lang = LANG_ROM;
        break;

      case "ru":
        os_lang = LANG_RUS;
        break;

      case "sk":
        os_lang = LANG_SLK;
        break;

      case "sl":
        os_lang = LANG_SLV;
        break;

      case "sv":
        os_lang = LANG_SVE;
        break;

      case "tl":
        os_lang = LANG_TAG;
        break;

      case "ta":
        os_lang = LANG_TAM;
        break;

      case "te":
        os_lang = LANG_TEL;
        break;

      case "th":
        os_lang = LANG_THA;
        break;

      case "tu":
        os_lang = LANG_TUR;
        break;

      case "uk":
        os_lang = LANG_UKR;
        break;

      case "ur":
        os_lang = LANG_URD;
        break;

      case "vi":
        os_lang = LANG_VIE;
    }
    return os_lang;
}

export function alert(msg) {
    if (IS_NODE) debugger;
    window.alert(msg);
};

export function halt(msg) {
    logg("halt: " + msg);
    debugger;
    window.alert(msg);
};

export function quit(errcode = 0) {
    if (logg(`inside quit, errorcode=${errcode}`), IS_NODE) debugger;
    window.open("", "_parent", ""), window.close();
};

export function debug_where_to_name(targ_mod, targ_line) {
    let node = path_to_node(adr(META, targ_mod, F_mod_funcs));
    if (null == node || null == node.children) return "[unknown]";
    let probe, lo = 0, hi = node.children.length - 1;
    for (;probe = (lo + hi) / 2, !(hi - lo < 2); ) targ_line < node.children[probe].sub ? hi = probe : lo = probe;
    return targ_line < node.children[lo].sub ? "<top level>" : targ_line >= node.children[hi].sub ? node.children[hi].val : node.children[lo].val;
};

export function debug_jump(targ_major, is_blackbox) {
    if (is_numeric(targ_major) == Y) {
        var curr_micros, curr_runtime, curr_stepx, curr_raw, targ_raw, micro;
        is_blackbox == Y ? (curr_micros = g_blackbox_micro, curr_runtime = blackbox_runtime) : (curr_micros = g_micro, curr_runtime = runtime);
        var nmicro = curr_micros.length, nmajor = tree_count(adr(curr_runtime, F_major_steps));
        if (targ_raw = (targ_major = clamp(Math.round(targ_major), 1, nmajor + 1)) > nmajor ? nmicro : getn(curr_runtime, F_major_steps, targ_major, F_hist_rawx), curr_raw = (curr_stepx = getn(curr_runtime, F_major_stepx)) > nmajor ? nmicro : getn(curr_runtime, F_major_steps, curr_stepx, F_hist_rawx), 
        TRACE_JUMP && console.log(str.conv("-- debug_jump, major_step={}, targ_raw={}, curr_raw={}", targ_major, targ_raw, curr_raw)), curr_raw < targ_raw) do_micro_fwd(curr_raw, targ_raw, curr_micros); else if (curr_raw > targ_raw) for (;curr_raw > targ_raw; ) (micro = curr_micros[curr_raw -= 1]).kind == LOGK_DELTA && (fix_value(micro.path, micro.oldval), 
        TRACE_JUMP && console.log(str.conv("  backwards step {} at {} from {} to {}", curr_raw, micro.path, micro.newval, micro.oldval)));
        setv(_M, 0, curr_runtime, F_major_stepx, targ_major);
    }
};

function do_micro_fwd(curr_raw, targ_raw, micros) {
    for (var micro; curr_raw < targ_raw; ) (micro = micros[curr_raw]).kind == LOGK_DELTA && fix_value(micro.path, micro.newval), curr_raw += 1;
}

function fix_value(path, newval) {
    setv(_M, 0, path, newval);
    let lastx = path.key.length - 1;
    if (lastx >= 0 && path.key[lastx] == F_in_value) {
        TRACE_JUMP && logg("  ->> fixing input field"), path.key[lastx] = F_in_label;
        let id = path_getv(path, EF_VAL_IS_STR), dom = document.getElementById(id);
        null != dom && (dom.value = newval), path.key[lastx] = F_in_value;
    }
}

export function debug_get_micro(targ_major) {
    if (is_err_enum_b(targ_major)) return;
    let kind, funcname, ix, rx, start_raw, end_raw, nmicro = g_micro.length, nmajor = tree_count(adr(runtime, F_major_steps));
    if (targ_major = clamp(Math.round(targ_major), 1, nmajor + 1), trunc_tree(_M, 0, adr(runtime, F_micro_steps)), targ_major == U) start_raw = 1, end_raw = nmicro; else {
        if (targ_major > nmajor) return;
        targ_major = max(targ_major, 1), start_raw = getn(runtime, F_major_steps, targ_major, F_hist_rawx), end_raw = targ_major + 1 > nmajor ? nmicro : getn(runtime, F_major_steps, targ_major + 1, F_hist_rawx) - 1;
    }
    end_raw -= 1;
    let skipflag = !1;
    for (rx = start_raw -= 1; rx <= end_raw; rx++) {
        switch (g_micro[rx].kind) {
          case LOGK_DELTA:
            kind = MICRO_DELTA;
            break;

          case LOGK_RENUM:
            kind = MICRO_RENUM;
            break;

          case MARK_TRUNC_BEG:
            kind = MICRO_TRUNC, skipflag = !0;
            break;

          case MARK_CLEAR_BEG:
            kind = MICRO_CLEAR, skipflag = !0;
            break;

          case MARK_CLEAR_END:
          case MARK_TRUNC_END:
            kind = 0, skipflag = !1;
            break;

          default:
            kind = ERR;
        }
        0 == kind || skipflag || (setv(_M, 0, runtime, F_micro_steps, ix = rx + 1, F_ms_kind, kind), setv(_M, 0, runtime, F_micro_steps, ix, F_ms_module, g_micro[rx].mod), setv(_M, 0, runtime, F_micro_steps, ix, F_ms_where, g_micro[rx].where), 
        funcname = debug_where_to_name(g_micro[rx].mod, g_micro[rx].where), setv(_M, 0, runtime, F_micro_steps, ix, F_ms_funcname, funcname), setv(_M, 0, runtime, F_micro_steps, ix, F_ms_dest, g_micro[rx].path), 
        setv(_M, 0, runtime, F_micro_steps, ix, F_ms_oldval, g_micro[rx].oldval), setv(_M, 0, runtime, F_micro_steps, ix, F_ms_newval, g_micro[rx].newval));
    }
};

export function debug_clear_future() {
    let micro_end, major_end = getn(runtime, F_major_stepx);
    1 == major_end && (major_end = 2);
    let major_sub = major_end - 1, node = path_to_node(adr(runtime, F_major_steps));
    node.children.length > major_sub && (micro_end = getn(runtime, F_major_steps, major_end, F_hist_rawx), node.children.length = major_sub, g_currseq += 1, node.seq = g_currseq, g_micro.length = micro_end, 
    TRACE_JUMP && logg(str.conv(">> debug_clear_future, major_sub={} micro_end={}", major_sub, micro_end)));
};

export function hist_get_code(module_enum, where) {
    let lines;
    if (null === (lines = g_code[module_enum])) return null;
    let nlines = lines.length;
    return nlines < 2 ? null : where < 1 || where >= nlines ? "" : lines[where];
};

export function vars_ptr_to_value_ptr(vars_ptr) {
    debugger;
    return null;
};

export function set_auto_size(myblock, width, height) {
    myblock.bounds.width = width, myblock.bounds.height = width, setv(_M, 0, myblock.extra, F_box, F_width, width), setv(_M, 0, myblock.extra, F_box, F_height, height);
};

export function type_of(path) {
    let pathx = path_to_pathx(path);
    return null !== pathx && pathx.exists ? node_get_type(pathx.lev[pathx.lastx].node) : TYPE_U;
};

export function sound_play_file(path) {
    logg("sound_play_file ${path}"), new Audio(path).play();
};

export function sound_play(snd, _options = null) {
    let offset = 0;
    for (let property in _options) switch (property) {
      case "loop":
        snd.loopf = _options.loop === Y;
        break;

      case "notify":
        snd.notifyf = _options.notify === Y;
        break;

      case "offset":
        offset = _options.offset;
        break;

      case "id":
        snd.id = _options.id;
        break;

      default:
        argument_err("bad option: " + property);
    }
    var startx = 0;
    if (0 == snd.curx && 1 == snd.numx) {
        if (snd.audio[0].readyState < 3) return void logg("skipping not ready sound");
    } else snd.curx, startx >= snd.numx && (startx = 0);
    for (var myaudio, tryx = startx; ;) {
        if (0 == (myaudio = snd.audio[tryx]).currentTime || myaudio.ended) {
            TRACE_SOUND && logg(`-- slot at ix ${tryx} is idle`);
            break;
        }
        if (TRACE_SOUND && logg(`-- slot at ix ${tryx} is busy`), (tryx += 1) >= snd.numx && (tryx = 0), tryx == startx) {
            (myaudio = myaudio.cloneNode()).currentTime = 0, snd.audio.push(myaudio), snd.curx = snd.numx, snd.numx += 1, TRACE_SOUND && logg(`-- wrapped around, added copy, num=${snd.numx}`);
            break;
        }
    }
    0 != offset && (myaudio.currentTime = offset), snd.loopf && (myaudio.loop = !0), myaudio.play();
};

export function sound_pause(snd) {
    snd.pause_position = snd.audio.currentTime, snd.audio.pause();
};

export function sound_resume(snd) {
    snd.audio.play();
};

export function conv_degK_to_degC(degK) {
    return degK - 273.15;
};

export function conv_degC_to_degK(degC) {
    return degC + 273.15;
};

export function conv_degK_to_degF(degK) {
    return 9 * degK / 5 - 459.67;
};

export function conv_degF_to_degK(degF) {
    return 5 * (degF + 459.67) / 9;
};

export function is_field_b(subscript) {
    return void 0 != FIELDS[subscript];
};

export function is_field(subscript) {
    return void 0 == FIELDS[subscript] ? N : Y;
};

export function is_odd(n) {
    return n == U ? U : is_numeric(n) === Y ? Math.round(n) % 2 != 0 ? Y : N : ERR;
};

export function is_even(n) {
    return n == U ? U : is_numeric(n) === Y ? Math.round(n) % 2 == 0 ? Y : N : ERR;
};

export function is_integer(n) {
    return n == U ? U : is_not_numeric(n) == Y ? ERR : n == INFINITY || n == -INFINITY ? N : Number.isInteger(n) ? Y : N;
};

export function is_enum(n) {
    return n >= FIRST_ENUM && n <= LAST_ENUM ? Y : N;
};

export function is_err(n) {
    return Number.isNaN(n) ? Y : N;
};

export function is_err_u(n) {
    return Number.isNaN(n) || n === U ? Y : N;
};

export function is_numeric(n) {
    return Number.isNaN(n) || n === U || n >= FIRST_ENUM && n <= LAST_ENUM ? N : Y;
};

export function is_not_numeric(n) {
    return Number.isNaN(n) || n === U || n >= FIRST_ENUM && n <= LAST_ENUM ? Y : N;
};

export function is_err_enum(n) {
    return Number.isNaN(n) || n >= FIRST_ENUM && n <= LAST_ENUM ? Y : N;
};

export function is_finite(n) {
    return is_numeric(n) === Y && n !== INFINITY && n !== NEG_INFINITY ? Y : N;
};

export function clamp(a, lo, hi) {
    return is_err_enum_b(a) ? ERR : a === U ? U : Math.max(lo, Math.min(a, hi));
};

export function uzero(n) {
    return n === U ? 0 : n;
};

export function distance_sq(a, b) {
    let x1 = getn(a, F_x), y1 = getn(a, F_y), x2 = getn(b, F_x), y2 = getn(b, F_y);
    if (is_err_enum_b(x1) || is_err_enum_b(x2) || is_err_enum_b(y1) || is_err_enum_b(y2)) return ERR;
    if (x1 === U || x2 === U || y1 === U || y2 === U) return U;
    let dx = x1 - x2, dy = y1 - y2;
    return dx * dx + dy * dy;
};

export function distance(a, b) {
    let x1 = getn(a, F_x), y1 = getn(a, F_y), x2 = getn(b, F_x), y2 = getn(b, F_y);
    if (is_err_enum_b(x1) || is_err_enum_b(x2) || is_err_enum_b(y1) || is_err_enum_b(y2)) return ERR;
    if (x1 === U || x2 === U || y1 === U || y2 === U) return U;
    let dx = x1 - x2, dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
};

function distance_xy(ax, ay, bx, by) {
    let dx = ax - bx, dy = ay - by;
    return Math.sqrt(dx * dx + dy * dy);
}

export function distance_to_segment(p, a, b) {
    let px = getn(p, F_x), py = getn(p, F_y), vx = getn(a, F_x), vy = getn(a, F_y), wx = getn(b, F_x), wy = getn(b, F_y);
    if (is_err_enum_b(px) || is_err_enum_b(py) || is_err_enum_b(vx) || is_err_enum_b(vy) || is_err_enum_b(wx) || is_err_enum_b(wy)) return ERR;
    if (px === U || py === U || vx === U || vy === U || wx === U || wy === U) return U;
    let dx = vx - wx, dy = vy - wy, l2 = dx * dx + dy * dy;
    if (l2 <= 1e-6) return distance_xy(px, py, vx, vy);
    let t = ((px - vx) * (wx - vx) + (py - vy) * (wy - vy)) / l2;
    return t <= 0 ? distance_xy(px, py, vx, vy) : t >= 1 ? distance_xy(px, py, wx, wy) : distance_xy(px, py, vx + t * (wx - vx), vy + t * (wy - vy));
};

export function sign(n) {
    return is_err_enum_b(n) ? ERR : n === U ? U : 0 === n ? 0 : n > 0 ? 1 : -1;
};

export function abs(n) {
    return is_err_enum_b(n) ? ERR : n === U ? U : n >= 0 ? n : -n;
};

export function power(base, expon) {
    let result;
    return is_err_enum_b(base) || is_err_enum_b(expon) ? ERR : base === U || expon === U ? U : (result = Math.pow(base, expon)) >= FIRST_ENUM && result <= LAST_ENUM ? ERR : result;
};

export var log = logg;

export function hypot(a, b) {
    return sqrt(add(mul(a, a), mul(b, b)));
};

export function lg(n, options) {
    let base = E;
    return is_err_enum_b(n) || n < 0 ? ERR : n === U ? U : null !== options && options.hasOwnProperty("base") ? (base = options.base, Number.isNaN(base) || base < 0 ? ERR : base === U ? U : Math.log(n) / Math.log(base)) : Math.log(n);
};

export function factorial(n) {
    let result;
    if (Number.isNaN(n) || n >= FIRST_ENUM && n <= LAST_ENUM) return ERR;
    if (n === U) return U;
    if (n < 0) return ERR;
    for (result = n; n > 2; ) result *= --n;
    return result;
};

export function sqrt(n) {
    return is_err_enum_b(n) ? ERR : n === U ? U : n < 0 ? ERR : Math.sqrt(n);
};

export function min(...args) {
    let a, i, result = INFINITY, empty = !0;
    for (i = 0; i < args.length; i++) {
        if (is_err_enum_b(a = args[i])) return ERR;
        a !== U && a < result && (result = a, empty = !1);
    }
    return empty ? U : result;
};

export function max(...args) {
    let a, i, result = NEG_INFINITY, empty = !0;
    for (i = 0; i < args.length; i++) {
        if (is_err_enum_b(a = args[i])) return ERR;
        a !== U && a > result && (result = a, empty = !1);
    }
    return empty ? U : result;
};

export function fract(n) {
    return is_err_enum_b(n) ? ERR : n === U ? U : n >= 0 ? n - Math.floor(n) : n - Math.ceil(n);
};

export function magnitude(n) {
    return n.mag;
};

export function to_unit(n, targunit) {
    let factor, conversionf;
    return is_err_enum_b(n.mag) || !is_enum_b(targunit) ? ERR : n.mag === U || n.family === U ? U : null !== (conversionf = get_func(families, n.family, F_fam_units, targunit, F_base_to_unit)) ? conversionf.code(n.mag) : (factor = getn(families, n.family, F_fam_units, targunit, F_unit_factor)) === U ? (CHECKS && internal_err("no conversion ratio found in the family for the target unit"), 
    ERR) : div(n.mag, factor);
};

export function to_meas(mag, unit) {
    let familyx;
    return (familyx = getn(unit_to_family, unit)) === U ? (halt(), meas(ERR, N_each, Y_Scalar)) : meas(mag, unit, familyx);
};

export function mm_to_dots(b, mm) {
    return Math.round(mm / 25.4 * b.dpi);
};

export function cm_to_dots(b, cm) {
    return Math.round(cm / 2.54 * b.dpi);
};

export function pt_to_dots(b, pt) {
    return Math.round(pt / 72 * b.dpi);
};

export function pc_to_dots(b, picas) {
    return Math.round(picas / 6 * b.dpi);
};

export function in_to_dots(b, inch) {
    return Math.round(inch * b.dpi);
};

export function dots_to_mm(b, dots) {
    return Math.round(dots / b.dpi * 25.4);
};

export function dots_to_cm(b, dots) {
    return dots / b.dpi * 2.54;
};

export function dots_to_pt(b, dots) {
    return Math.round(dots / b.dpi * 72);
};

export function dots_to_in(b, dots) {
    return dots / b.dpi;
};

function unit_to_pixels(block, meas, unit, roundf = !1) {
    let result;
    switch (result = 0, unit) {
      case al:
        argument_err("asking for phys size of a non-physical unit");
        break;

      case px:
        result = roundf ? Math.round(meas) : meas;
        break;

      case pt:
        result = pt_to_dots(block, meas), roundf && (result = Math.round(result));
        break;

      default:
        argument_err("unsupported unit type");
    }
    return result;
}

export function interpolate(a_cur, a_min, a_max, b_min, b_max, _options = null) {
    let clamped = !1, rounded = !1;
    if (null !== _options && (_options.hasOwnProperty("round") && (rounded = _options.round), _options.hasOwnProperty("clamp") && (clamped = _options.clamp)), is_err_enum_b(a_cur) || is_err_enum_b(a_min) || is_err_enum_b(a_max) || is_err_enum_b(b_min) || is_err_enum_b(b_max)) return ERR;
    if (a_cur === U || a_min === U || a_max === U || b_min === U || b_max === U) return U;
    if (a_min === a_max) return b_min;
    if (clamped) {
        if (a_cur <= a_min) return b_min;
        if (a_cur >= a_max) return b_max;
    } else {
        if (a_cur === INFINITY) return INFINITY;
        if (a_cur === NEG_INFINITY) return NEG_INFINITY;
    }
    return rounded ? Math.round(b_min + (b_max - b_min) * (a_cur - a_min) / (a_max - a_min)) : b_min + (b_max - b_min) * (a_cur - a_min) / (a_max - a_min);
};

export function local_to_global(block, options) {
    let gxy, lx = U, ly = U;
    for (let property in options) switch (property) {
      case "x":
        lx = options.x;
        break;

      case "y":
        ly = options.y;
        break;

      case "xy":
        lx = getn(options.xy, F_x), ly = getn(options.xy, F_y);
        break;

      default:
        argument_err("bad option: " + property);
    }
    gxy = local_to_global_p(block, new Point(lx, ly));
    let result = new a_tree(_M, "local_to_global");
    return setv(_M, 0, result, F_x, gxy.x), setv(_M, 0, result, F_y, gxy.y), result;
};

export function solve_point(options) {
    let basis, basis_l, basis_t, basis_w, basis_h, x, y, pin = 5, dx = 0, dy = 0, round = !1;
    for (let property in options) switch (property) {
      case "basis":
        options.basis instanceof Rectangle ? (basis_l = (basis = options.basis).left, basis_t = basis.top, basis_w = basis.width, basis_h = basis.height) : options.basis instanceof a_path || options.basis instanceof a_tree ? (basis_l = getn(basis = options.basis, F_left), 
        basis_t = getn(basis, F_top), basis_w = getn(basis, F_width), basis_h = getn(basis, F_height)) : argument_err("basis must be a a_path or a_rect");
        break;

      case "dx":
        dx = options.dx;
        break;

      case "dy":
        dy = options.dy;
        break;

      case "pin":
        pin = options.pin, CHECKS && (pin < 1 || pin > 9) && argument_err("bad pin value");
        break;

      case "round":
        round = options.round == Y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    switch (null === basis && argument_err("missing basis"), is_numeric(basis_l) == Y && is_numeric(basis_t) == Y && is_numeric(basis_w) == Y && is_numeric(basis_h) == Y || argument_err("bad basis"), (pin - 1) % 3) {
      case 0:
        x = basis_l;
        break;

      case 1:
        x = basis_l + basis_w / 2;
        break;

      case 2:
        x = basis_l + basis_w;
    }
    switch ((pin - 1) / 3 >> 0) {
      case 0:
        y = basis_t;
        break;

      case 1:
        y = basis_t + basis_h / 2;
        break;

      case 2:
        y = basis_t + basis_h;
    }
    return x += dx, y += dy, round && (x = Math.round(x), y = Math.round(y)), point_as_tree(x, y);
};

export function solve_cellsize(totwidth, ncells, gapfract) {
    return totwidth / (ncells + (ncells + 1) * gapfract);
};

export function solve_rect(options) {
    let basis_l, basis_t, basis_w, basis_h, centerx = U, centery = U, dx = U, dy = U, left = U, right = U, top = U, bottom = U, width = U, height = U, inset = U, inset_n = U, inset_s = U, inset_e = U, inset_w = U, inset_y = U, inset_x = U, aspect = U, pin = 1, round = !1, error = !1, basis = null, horz_specified = !1, vert_specified = !1;
    for (let property in options) switch (property) {
      case "basis":
        options.basis instanceof Rectangle ? (basis_l = (basis = options.basis).left, basis_t = basis.top, basis_w = basis.width, basis_h = basis.height) : options.basis instanceof a_path || options.basis instanceof a_tree ? (basis_l = getn(basis = options.basis, F_left), 
        basis_t = getn(basis, F_top), basis_w = getn(basis, F_width), basis_h = getn(basis, F_height)) : argument_err("basis must be a path or tree");
        break;

      case "aspect":
        aspect = options.aspect;
        break;

      case "left":
        left = options.left, horz_specified = !0;
        break;

      case "top":
        top = options.top, vert_specified = !0;
        break;

      case "top_left":
        left = getn(options.top_left, F_x), top = getn(options.top_left, F_y), horz_specified = !0, vert_specified = !0;
        break;

      case "right":
        right = options.right, horz_specified = !0;
        break;

      case "bottom":
        bottom = options.bottom, vert_specified = !0;
        break;

      case "cx":
        centerx = options.cx;
        break;

      case "cy":
        centery = options.cy;
        break;

      case "dx":
        dx = options.dx;
        break;

      case "dy":
        dy = options.dy;
        break;

      case "height":
        height = options.height;
        break;

      case "width":
        width = options.width;
        break;

      case "inset":
        inset = options.inset;
        break;

      case "inset_n":
        inset_n = options.inset_n;
        break;

      case "inset_s":
        inset_s = options.inset_s;
        break;

      case "inset_e":
        inset_e = options.inset_e;
        break;

      case "inset_w":
        inset_w = options.inset_w;
        break;

      case "inset_y":
        inset_y = options.inset_y;
        break;

      case "inset_x":
        inset_x = options.inset_x;
        break;

      case "pin":
        pin = options.pin, CHECKS && (pin < 1 || pin > 9) && argument_err("bad pin value");
        break;

      case "round":
        round = options.round;
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (null !== basis) {
        if (dx !== U && (basis_l += dx), dy !== U && (basis_t += dy), inset !== U && (basis_l += inset, basis_t += inset, basis_w -= 2 * inset, basis_h -= 2 * inset), inset_y !== U && (basis_t += inset_y, basis_h -= 2 * inset_y), 
        inset_x !== U && (basis_l += inset_x, basis_w -= 2 * inset_x), inset_n !== U && (basis_t += inset_n, basis_h -= inset_n), inset_s !== U && (basis_h -= inset_s), inset_e !== U && (basis_w -= inset_e), 
        inset_w !== U && (basis_l += inset_w, basis_w -= inset_w), !horz_specified) switch ((pin - 1) % 3) {
          case 0:
            left = basis_l;
            break;

          case 1:
            centerx = basis_l + basis_w / 2;
            break;

          case 2:
            right = basis_l + basis_w;
        }
        if (!vert_specified) switch (Math.floor((pin - 1) / 3)) {
          case 0:
            top = basis_t;
            break;

          case 1:
            centery = basis_t + basis_h / 2;
            break;

          case 2:
            bottom = basis_t + basis_h;
        }
        aspect !== U && (width = (height = basis_w / aspect) <= basis_h ? basis_w : (height = basis_h) * aspect);
    }
    return left !== U ? width !== U || (right !== U ? width = right - left : centerx !== U ? width = 2 * (centerx - left) : null !== basis ? width = basis_w - (left - basis_l) : error = !0) : right !== U ? width !== U ? left = right - width : centerx !== U ? left = right - (width = 2 * (right - centerx)) : null !== basis ? left = right - (width = basis_w) : error = !0 : centerx !== U ? width !== U ? left = centerx - width / 2 : null !== basis ? left = centerx - (width = basis_w) / 2 : error = !0 : error = !0, 
    top !== U ? height !== U || (bottom !== U ? height = bottom - top : centery !== U ? height = 2 * (centery - top) : null !== basis ? height = basis_h - (top - basis_t) : error = !0) : bottom !== U ? height !== U ? top = bottom - height : centery !== U ? top = bottom - (height = 2 * (bottom - centery)) : null !== basis ? top = bottom - (height = basis_h) : error = !0 : centery !== U ? height !== U ? top = centery - height / 2 : null !== basis ? top = centery - (height = basis_h) / 2 : error = !0 : error = !0, 
    CHECKS && error && argument_err("insufficient info to determine rectangle"), round && (left = Math.round(left), top = Math.round(top), width = Math.round(width), height = Math.round(height)), rect_as_tree(left, top, width, height);
};

function count_drawable(slices) {
    let slice, n = 0;
    for (slice of slices) null !== slice.drawer && (n += 1);
    return n;
}

const HORZ = !0, VERT = !1, SMALLER = !0, BIGGER = !1;

function calc_slice_edge(orient, sizing, targix, gap_fract, slices) {
    let sx, cum_gap, drawx, slice, edge;
    for (drawx = 0, cum_gap = 0, sx = 0; ;) if (slice = slices[sx], sx += 1, null === slice.drawer) cum_gap += orient === HORZ ? slice.box.width : slice.box.height; else {
        if ((drawx += 1) === targix) {
            edge = orient === HORZ ? sizing === SMALLER ? slice.box.left : slice.box.left + slice.box.width : sizing === SMALLER ? slice.box.top : slice.box.top + slice.box.height;
            break;
        }
        cum_gap = 0;
    }
    if (sizing === SMALLER) edge -= cum_gap * gap_fract; else {
        for (cum_gap = 0; !(sx >= slices.length) && (slice = slices[sx], sx += 1, null === slice.drawer); ) cum_gap += orient === HORZ ? slice.box.width : slice.box.height;
        edge += cum_gap * gap_fract;
    }
    return edge;
}

export function solve_grid_dim(ncells, avail, cellwidth, gapwidth, indent) {
    let ncols = 1, celltot = cellwidth + gapwidth;
    for (avail -= 2 * indent + cellwidth; avail >= celltot; ) ncols += 1, avail -= celltot;
    let nrows = round_up(ncells / ncols);
    for (;(ncols - 1) * nrows >= ncells; ) ncols -= 1;
    let result = new a_tree(_M, "solve_grid_dim");
    return setv(_M, 0, result, F_x, ncols), setv(_M, 0, result, F_y, nrows), result;
};

export function solve_grid_rect(b, col1, row1, col2, row2, _options = null) {
    let left, top, right, bottom, icol1, icol2, irow1, irow2, gap = .5;
    for (let property in _options) switch (property) {
      case "gap":
        gap = _options.gap;
        break;

      default:
        argument_err("bad option: " + property);
    }
    let spec = null;
    if (null !== b && null !== b.div && null != b.div.grid_func && (spec = b.div), null === spec || is_err_enum_b(col1) || is_err_enum_b(row1) || is_err_enum_b(col2) || is_err_enum_b(row2)) return CHECKS && argument_err("bad arguments to function"), 
    ERR_TREE;
    if (col1 === U || row1 === U || col2 === U || row2 === U) return U_TREE;
    let ncols = count_drawable(spec.horz_slices), nrows = count_drawable(spec.vert_slices);
    return icol2 = col2, irow1 = row1, irow2 = row2, (icol1 = col1) < 1 && (icol1 = 1), icol2 < 1 && (icol2 = 1), irow1 < 1 && (irow1 = 1), irow2 < 1 && (irow2 = 1), icol1 > ncols && (icol1 = ncols), icol2 > ncols && (icol2 = ncols), 
    irow1 > nrows && (irow1 = nrows), irow2 > nrows && (irow2 = nrows), rect_as_tree(left = calc_slice_edge(HORZ, SMALLER, icol1, gap, spec.horz_slices), top = calc_slice_edge(VERT, SMALLER, irow1, gap, spec.vert_slices), (right = calc_slice_edge(HORZ, BIGGER, icol2, gap, spec.horz_slices)) - left, (bottom = calc_slice_edge(VERT, BIGGER, irow2, gap, spec.vert_slices)) - top);
};

export function round(n, _options = null) {
    let mult = 1;
    if (is_err_enum_b(n)) return ERR;
    if (0 === n) return 0;
    if (n === U) return U;
    for (let property in _options) switch (property) {
      case "multiple":
        if (is_err_enum_b(mult = _options.multiple) || 0 == mult) return ERR;
        break;

      default:
        argument_err("bad option: " + property);
    }
    return 1 == mult ? Math.round(n) : Math.round(n * mult) / mult;
};

export function round_up(n, _options = null) {
    let mult = 1;
    if (is_err_enum_b(n)) return ERR;
    if (0 === n) return 0;
    if (n === U) return U;
    for (let property in _options) switch (property) {
      case "multiple":
        if (is_err_enum_b(mult = _options.multiple) || 0 == mult) return ERR;
        break;

      default:
        argument_err("bad option: " + property);
    }
    return 1 == mult ? Math.ceil(n) : Math.ceil(n / mult) * mult;
};

export function round_down(n, _options = null) {
    let mult = 1;
    if (is_err_enum_b(n)) return ERR;
    if (0 === n) return 0;
    if (n === U) return U;
    for (let property in _options) switch (property) {
      case "multiple":
        if (is_err_enum_b(mult = _options.multiple) || 0 == mult) return ERR;
        break;

      default:
        argument_err("bad option: " + property);
    }
    return 1 == mult ? Math.floor(n) : Math.floor(n / mult) * mult;
};

export function round_zero(number, _options = null) {
    return number >= 0 ? round_down(number, _options) : round_up(number, _options);
};

export function mod(input, divisor, options = null) {
    let result1, result2, one_flag = !1, neg_flag = !1;
    if (is_err_enum_b(input) || is_err_enum_b(divisor)) return ERR;
    if (input == U || divisor === U) return U;
    if (0 === input) return 0;
    if ((divisor = Math.floor(divisor)) <= 0) return ERR;
    if (null !== options) for (let property in options) switch (property) {
      case "one":
        one_flag = options.one === Y;
        break;

      case "neg":
        neg_flag = options.neg === Y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (one_flag) {
        if (neg_flag && argument_err("neg_flag and one_flag together not yet implemented"), input <= 0) {
            return divisor - -input % divisor;
        }
        return 1 + (input - 1) % divisor;
    }
    return result1 = input % divisor, neg_flag ? (result2 = result1 < 0 ? result1 + divisor : result1 - divisor, Math.abs(result1) < Math.abs(result2) ? result1 : result2) : (result1 < 0 && (result1 += divisor), 
    result1);
};

export function idiv(input, divisor, options) {
    let neg, result, one_flag = !1;
    if (is_err_enum_b(input) || is_err_enum_b(divisor)) return ERR;
    if (input === U || divisor === U) return U;
    if (0 === input) return 0;
    if ((divisor = Math.floor(divisor)) <= 0) return ERR;
    if (neg = !1, input < 0 && (neg = !0, input = -input), null !== options) for (let property in options) switch (property) {
      case "one":
        one_flag = options.one === Y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    return result = one_flag ? 1 + Math.floor((input - 1) / divisor) : Math.floor(input / divisor), neg && (result = -result), result;
};

export function cos(n) {
    let radians;
    return radians = n.mag, Number.isNaN(radians) || radians >= FIRST_ENUM && radians <= LAST_ENUM ? ERR : radians === U ? U : Math.cos(radians);
};

export function sin(n) {
    let radians;
    return radians = n.mag, Number.isNaN(radians) || radians >= FIRST_ENUM && radians <= LAST_ENUM ? ERR : radians === U ? U : Math.sin(radians);
};

export function tan(n) {
    let radians;
    return radians = n.mag, Number.isNaN(radians) || radians >= FIRST_ENUM && radians <= LAST_ENUM ? ERR : radians === U ? U : Math.tan(radians);
};

export function arc_cos(n) {
    return meas(n === U ? U : n > 1 || n < -1 ? ERR : Math.acos(n), N_radian, Y_Angle);
};

export function arc_sin(n) {
    return meas(n === U ? U : n > 1 || n < -1 ? ERR : Math.asin(n), N_radian, Y_Angle);
};

export function arc_tan(n) {
    let mag;
    return Number.isNaN(n) || n >= FIRST_ENUM && n <= LAST_ENUM ? mag = ERR : n === U ? mag = U : (mag = Math.atan(n)) < 0 && (mag += TAU), meas(mag, N_radian, Y_Angle);
};

export function arc_tan2(y, x) {
    let mag;
    return Number.isNaN(x) || x >= FIRST_ENUM && x <= LAST_ENUM || Number.isNaN(y) || y >= FIRST_ENUM && y <= LAST_ENUM ? mag = ERR : x === U || y === U ? mag = U : (mag = Math.atan2(y, x)) < 0 && (mag += TAU), 
    meas(mag, N_radian, Y_Angle);
};

export function random() {
    return Math.random();
};

export function random_range(MIN, MAX) {
    return MIN + Math.random() * (MAX - MIN);
};

export function random_int(MIN, MAX) {
    return MIN + Math.floor(Math.random() * (MAX - MIN + 1));
};

export function random_set(...list) {
    var n = list.length;
    switch (n) {
      case 0:
        return U;

      case 1:
        return list[0];

      default:
        return list[random_int(0, n - 1)];
    }
};

const WORDS = [ "abac", "abas", "abba", "abbe", "abbs", "abed", "abet", "abid", "abos", "abri", "abut", "abye", "abys", "acai", "acca", "aced", "acer", "aces", "ache", "achy", "acid", "acme", "acne", "acre", "acta", "acts", "adaw", "adds", "addy", "adit", "ados", "adry", "adze", "aeon", "aero", "aery", "aesc", "afar", "affy", "afro", "agar", "agas", "aged", "agee", "agen", "ager", "ages", "agha", "agin", "agio", "agma", "agog", "agon", "ague", "ahed", "ahem", "ahis", "ahoy", "aias", "aide", "aids", "aiga", "aims", "aine", "ains", "airn", "airs", "airt", "airy", "aits", "aitu", "ajar", "ajee", "aked", "akee", "akes", "akin", "amah", "amas", "ambo", "amen", "amia", "amid", "amie", "amin", "amir", "amis", "ammo", "amok", "amps", "amus", "anan", "anas", "ance", "ands", "anes", "anew", "anga", "anis", "ankh", "anna", "anno", "anns", "anoa", "anon", "anow", "ansa", "anta", "ante", "anti", "ants", "anus", "apay", "aped", "aper", "apes", "apex", "apod", "apos", "apps", "apse", "apso", "apts", "aqua", "arak", "arar", "arba", "arbs", "arch", "arco", "arcs", "ards", "area", "ared", "areg", "ares", "aret", "arew", "arfs", "aria", "arid", "aris", "arks", "arms", "army", "arna", "arow", "arpa", "arse", "arsy", "arti", "arts", "arty", "arum", "arvo", "asar", "asci", "asea", "ashy", "asks", "asps", "atap", "ates", "atma", "atoc", "atok", "atom", "atop", "atua", "aufs", "auks", "aune", "aunt", "aura", "auto", "avas", "aver", "aves", "avid", "avos", "avow", "away", "awed", "awee", "awes", "awns", "awny", "awry", "axed", "axes", "axis", "axon", "ayah", "ayes", "ayin", "ayre", "ayus", "azan", "azon", "azym", "baba", "babe", "babu", "baby", "bach", "back", "bacs", "bade", "bads", "baff", "baft", "bagh", "bags", "baht", "bait", "baju", "bake", "bams", "banc", "band", "bane", "bang", "bani", "bank", "bans", "bant", "baps", "bapu", "barb", "bard", "bare", "barf", "bark", "barm", "barn", "barp", "bars", "base", "bash", "bask", "bass", "bast", "bate", "bath", "bats", "batt", "baud", "bauk", "baur", "bawd", "bawn", "bawr", "baye", "bays", "bayt", "bead", "beak", "beam", "bean", "bear", "beat", "beau", "beck", "bede", "beds", "bedu", "beef", "been", "beep", "beer", "bees", "beet", "bego", "begs", "bein", "bema", "bend", "bene", "beni", "benj", "bens", "bent", "bere", "berg", "berk", "berm", "best", "beta", "bete", "beth", "bets", "bevy", "beys", "bhat", "bhut", "bias", "bibb", "bibs", "bice", "bide", "bidi", "bids", "bien", "bier", "biff", "biga", "bigg", "bigs", "bike", "bima", "bind", "bine", "bing", "bink", "bins", "bint", "biog", "bios", "bird", "birk", "biro", "birr", "bise", "bish", "bisk", "bist", "bite", "bito", "bits", "bitt", "bize", "boab", "boak", "boar", "boas", "boat", "boba", "bobs", "bock", "bode", "bods", "body", "boep", "boet", "boff", "bogs", "bogy", "boho", "bohs", "bois", "boke", "boko", "boks", "boma", "bomb", "bona", "bond", "bone", "bong", "bonk", "bony", "boob", "booh", "book", "boom", "boon", "boor", "boos", "boot", "bops", "bora", "bord", "bore", "bork", "borm", "born", "bors", "bort", "bosh", "bosk", "boss", "bota", "both", "bots", "bott", "bouk", "boun", "bout", "bowr", "bows", "boxy", "boyf", "boyg", "boyo", "boys", "bozo", "brad", "brae", "brag", "brak", "bran", "bras", "brat", "braw", "bray", "bred", "bree", "brei", "bren", "brer", "brew", "brey", "brie", "brig", "brik", "brim", "brin", "brio", "bris", "brit", "brod", "brog", "broo", "bros", "brow", "brrr", "brus", "brut", "brux", "buat", "buba", "bubo", "bubs", "bubu", "buck", "buda", "budi", "budo", "buds", "buff", "bufo", "bugs", "buhr", "buik", "buke", "bumf", "bump", "bums", "buna", "bund", "bung", "bunk", "bunn", "buns", "bunt", "buoy", "bura", "burb", "burd", "burg", "burk", "burn", "burp", "burr", "burs", "bury", "bush", "busk", "buss", "bust", "busy", "bute", "buts", "butt", "buys", "buzz", "byde", "byes", "byke", "byre", "byte", "caba", "cabs", "caca", "cade", "cadi", "cads", "cafe", "caff", "cage", "cags", "cagy", "caid", "cain", "cake", "caky", "cama", "came", "camo", "camp", "cams", "cane", "cang", "cann", "cans", "cant", "cany", "capa", "cape", "caph", "capi", "capo", "caps", "carb", "card", "care", "cark", "carn", "carp", "carr", "cars", "cart", "casa", "case", "cash", "cask", "cast", "cate", "cats", "cauf", "cauk", "caum", "caup", "cava", "cave", "cavy", "cawk", "caws", "cays", "ceas", "ceca", "cede", "cedi", "cees", "cens", "cent", "cepe", "ceps", "cere", "cero", "cert", "cess", "cete", "chad", "chai", "cham", "chao", "chap", "char", "chas", "chat", "chav", "chaw", "chay", "chef", "cher", "chew", "chez", "chia", "chib", "chic", "chid", "chik", "chin", "chip", "chis", "chit", "chiv", "chiz", "choc", "chog", "chon", "chop", "chou", "chow", "chub", "chug", "chum", "chut", "ciao", "cide", "cids", "cigs", "cine", "cion", "cire", "cist", "cite", "cito", "cits", "city", "cive", "coat", "coax", "cobb", "cobs", "coca", "coch", "cock", "coco", "coda", "code", "cods", "coed", "coff", "coft", "cogs", "coho", "coif", "coin", "coir", "coit", "coke", "coky", "coma", "comb", "come", "comm", "comp", "coms", "cond", "cone", "conf", "coni", "conk", "conn", "cons", "cony", "coof", "cook", "coom", "coon", "coop", "coos", "coot", "cope", "cops", "copy", "cord", "core", "corf", "cork", "corm", "corn", "cors", "cory", "cose", "cosh", "coss", "cost", "cosy", "cote", "coth", "cots", "cott", "coup", "cour", "cove", "cowk", "cowp", "cows", "cowy", "coxa", "coxy", "coys", "coze", "cozy", "crab", "crag", "cram", "cran", "crap", "craw", "cray", "cred", "cree", "crem", "crew", "crib", "crim", "cris", "crit", "croc", "crog", "crop", "crow", "crud", "crue", "crus", "crux", "cube", "cubs", "cuds", "cued", "cues", "cuff", "cuif", "cuit", "cuke", "cunt", "cups", "curb", "curd", "cure", "curf", "curn", "curr", "curs", "curt", "cush", "cusk", "cusp", "cuss", "cute", "cuts", "cwms", "cyan", "cyma", "cyme", "cyst", "cyte", "czar", "dabs", "dace", "dack", "dada", "dado", "dads", "daes", "daff", "daft", "dago", "dags", "dahs", "dais", "daks", "dame", "damn", "damp", "dams", "dang", "dank", "dans", "dant", "daps", "darb", "dare", "darg", "dari", "dark", "darn", "dart", "dash", "data", "date", "dato", "daub", "daud", "daur", "daut", "davy", "dawd", "dawk", "dawn", "daws", "dawt", "days", "daze", "dead", "deaf", "dean", "dear", "deaw", "debe", "debs", "debt", "deck", "deco", "deed", "deek", "deem", "deen", "deep", "deer", "dees", "deet", "deev", "defi", "deft", "defy", "degs", "deid", "deif", "deke", "deme", "demo", "demy", "dene", "deni", "dens", "dent", "deny", "dere", "derm", "dern", "dero", "derv", "desi", "desk", "deus", "deva", "devs", "dews", "dewy", "dexy", "deys", "dhak", "dhow", "dibs", "dice", "dich", "dick", "dict", "dido", "didy", "dieb", "died", "dies", "diet", "diff", "difs", "digs", "dika", "dike", "dime", "dimp", "dims", "dine", "ding", "dink", "dino", "dins", "dint", "dips", "dipt", "dire", "dirk", "dirt", "disa", "disc", "dish", "disk", "diss", "dita", "dite", "dits", "ditt", "ditz", "diva", "dive", "divi", "divs", "dixi", "dixy", "djin", "doab", "doat", "dobs", "doby", "dock", "doco", "docs", "dodo", "dods", "doek", "doen", "doer", "does", "doff", "doge", "dogs", "dogy", "dohs", "doit", "dojo", "dome", "doms", "domy", "dona", "done", "dong", "dons", "doob", "dook", "doom", "doon", "door", "doos", "dopa", "dope", "dops", "dopy", "dorb", "dore", "dork", "dorm", "dorp", "dorr", "dors", "dort", "dory", "dose", "dosh", "doss", "dost", "dote", "doth", "dots", "doty", "douc", "douk", "doum", "doun", "doup", "dour", "dout", "doux", "dove", "dowd", "dowf", "down", "dowp", "dows", "dowt", "doxy", "doys", "doze", "dozy", "drab", "drac", "drad", "drag", "dram", "drap", "drat", "draw", "dray", "dree", "dreg", "drek", "drew", "drey", "drib", "drip", "drop", "drow", "drub", "drug", "drum", "drys", "dsos", "duad", "duan", "duar", "dubs", "duce", "duci", "duck", "duct", "dude", "duds", "dued", "dues", "duet", "duff", "dugs", "duit", "duka", "duke", "duma", "dumb", "dump", "dune", "dung", "dunk", "duns", "dunt", "duos", "dupe", "dups", "dura", "dure", "durn", "duro", "durr", "dush", "dusk", "dust", "duty", "dwam", "dyad", "dyed", "dyer", "dyes", "dyke", "dyne", "dzho", "dzos", "each", "eans", "eard", "earn", "ears", "ease", "east", "easy", "eath", "eats", "eaus", "eaux", "eave", "ebbs", "ebon", "ecad", "ecce", "ecco", "eche", "echo", "echt", "ecod", "ecos", "ecru", "ecus", "eddo", "eddy", "edge", "edgy", "edhs", "edit", "eech", "eery", "eevn", "effs", "efts", "egad", "eger", "eggs", "eggy", "egis", "egma", "egos", "ehed", "eide", "eiks", "eina", "eine", "eish", "eked", "ekes", "ekka", "emes", "emeu", "emic", "emir", "emit", "emma", "emmy", "emos", "empt", "emus", "emyd", "emys", "ends", "enes", "enew", "engs", "enow", "enuf", "envy", "eoan", "eons", "epee", "epha", "epic", "epos", "eras", "ered", "eres", "erev", "ergo", "ergs", "eric", "erks", "erne", "erns", "eros", "errs", "erst", "eruv", "eses", "esky", "esne", "espy", "esse", "ests", "etas", "etat", "etch", "eten", "ethe", "eths", "etic", "etna", "etui", "euge", "eugh", "euks", "euoi", "euro", "even", "ever", "eves", "evet", "evoe", "evos", "ewer", "ewes", "ewks", "ewts", "exam", "exec", "exed", "exes", "exit", "exon", "expo", "eyas", "eyed", "eyen", "eyer", "eyes", "eyne", "eyot", "eyra", "eyre", "eyry", "fabs", "face", "fact", "fade", "fado", "fads", "fady", "faff", "fags", "fahs", "faik", "fain", "fair", "faix", "fake", "fame", "fand", "fane", "fang", "fank", "fano", "fans", "fard", "fare", "farm", "faro", "fars", "fart", "fash", "fast", "fate", "fats", "faun", "faur", "faut", "faux", "fava", "fave", "fawn", "faws", "fays", "faze", "fear", "feat", "feck", "feds", "feeb", "feed", "feen", "feer", "fees", "feet", "fegs", "fehm", "fehs", "feis", "feme", "fems", "fend", "feni", "fens", "fent", "feod", "fere", "ferm", "fern", "fess", "fest", "feta", "fete", "fets", "fett", "feud", "feus", "feys", "fiar", "fiat", "fibs", "fice", "fico", "fido", "fids", "fief", "fier", "fife", "fifi", "figo", "figs", "fike", "fiky", "find", "fine", "fini", "fink", "fino", "fins", "fire", "firk", "firm", "firn", "firs", "fisc", "fish", "fisk", "fist", "fits", "fitt", "five", "fixt", "fizz", "foam", "fobs", "foci", "foen", "foes", "fogs", "fogy", "fohn", "fohs", "foid", "foin", "fond", "fone", "fons", "font", "food", "foot", "fops", "fora", "forb", "ford", "fore", "fork", "form", "fort", "foss", "foud", "four", "fous", "foxy", "foys", "fozy", "frab", "frae", "frag", "frap", "fras", "frat", "frau", "fray", "free", "fret", "frib", "frig", "fris", "frit", "friz", "froe", "frog", "from", "fros", "frow", "frug", "fubs", "fuci", "fuck", "fuds", "fuff", "fugs", "fugu", "fuji", "fume", "fums", "fumy", "fund", "fung", "funk", "funs", "furr", "furs", "fury", "fusc", "fuse", "fuss", "fust", "futz", "fuze", "fuzz", "fyce", "fyke", "fyrd", "gabs", "gaby", "gade", "gadi", "gads", "gaed", "gaen", "gaes", "gaff", "gaga", "gage", "gags", "gaid", "gain", "gair", "gait", "gajo", "gama", "gamb", "game", "gamp", "gams", "gamy", "gane", "gang", "gans", "gant", "gape", "gapo", "gaps", "gapy", "garb", "gare", "gari", "gars", "gart", "gash", "gasp", "gast", "gate", "gath", "gats", "gaud", "gaum", "gaun", "gaup", "gaur", "gaus", "gave", "gawd", "gawk", "gawp", "gays", "gaze", "gazy", "gean", "gear", "geat", "geck", "geds", "geed", "geek", "geep", "gees", "geez", "geit", "gems", "gena", "gene", "gens", "gent", "genu", "geos", "gere", "germ", "gert", "gest", "geta", "gets", "geum", "ghat", "ghee", "ghis", "gibe", "gibs", "gids", "gied", "gien", "gies", "gift", "giga", "gigs", "gimp", "ging", "gink", "ginn", "gins", "gios", "gips", "gird", "girn", "giro", "girr", "girt", "gism", "gist", "gite", "gits", "give", "gizz", "gjus", "gnar", "gnat", "gnaw", "gnow", "gnus", "goad", "goaf", "goas", "goat", "gobo", "gobs", "goby", "gods", "goer", "goes", "goey", "goff", "gogo", "gone", "gong", "gonk", "gons", "good", "goof", "goog", "gook", "goon", "goop", "goor", "goos", "gora", "gore", "gori", "gorm", "gorp", "gory", "gosh", "goss", "goth", "gouk", "gout", "govs", "gowd", "gowf", "gowk", "gown", "goys", "grab", "grad", "gram", "gran", "grat", "grav", "gray", "gree", "gren", "grew", "grex", "grey", "grid", "grig", "grim", "grin", "grip", "gris", "grit", "grog", "grok", "grot", "grow", "grub", "grue", "grum", "guan", "guar", "gubs", "guck", "gude", "gues", "guff", "guga", "guid", "gump", "gums", "gung", "gunk", "guns", "gups", "gurn", "gurs", "guru", "gush", "gust", "guts", "guvs", "guys", "gybe", "gymp", "gyms", "gyny", "gyps", "gyre", "gyri", "gyro", "gyte", "gyve", "habu", "hack", "hade", "hadj", "hads", "haed", "haem", "haen", "haes", "haet", "haff", "haft", "hagg", "hags", "haha", "hahs", "haik", "hain", "hair", "haji", "hajj", "haka", "hake", "haku", "hame", "hams", "hand", "hang", "hank", "hant", "haps", "hapu", "hard", "hare", "hark", "harm", "harn", "haro", "harp", "hart", "hash", "hask", "hasp", "hast", "hate", "hath", "hats", "haud", "hauf", "haut", "have", "hawk", "hawm", "haws", "hays", "haze", "hazy", "head", "heap", "hear", "heat", "hebe", "hech", "heck", "heed", "heft", "hehs", "heid", "heir", "heme", "hemp", "hems", "hend", "hens", "hent", "heps", "hept", "herb", "herd", "here", "herm", "hern", "hero", "hers", "hery", "hesp", "hest", "hete", "heth", "hets", "hewn", "hews", "heys", "hick", "hide", "hied", "hies", "high", "hike", "hims", "hind", "hing", "hins", "hint", "hioi", "hips", "hipt", "hire", "hish", "hisn", "hiss", "hist", "hits", "hive", "hiya", "hizz", "hoar", "hoas", "hoax", "hobo", "hobs", "hock", "hods", "hoed", "hoer", "hoes", "hogg", "hogh", "hogs", "hoha", "hohs", "hoik", "hoka", "hoke", "hoki", "homa", "home", "homo", "homs", "homy", "hond", "hone", "hong", "honk", "hons", "hood", "hoof", "hook", "hoon", "hoop", "hoot", "hope", "hops", "hora", "hore", "hori", "horn", "hors", "hose", "hoss", "host", "hote", "hots", "houf", "hour", "hout", "hove", "howe", "howf", "howk", "hows", "hoya", "hoys", "hubs", "huck", "hued", "huer", "hues", "huff", "huge", "hugs", "hugy", "huhu", "huia", "huic", "huis", "huma", "humf", "hump", "hums", "hung", "hunh", "hunk", "huns", "hunt", "hups", "hurt", "hush", "husk", "huso", "huss", "huts", "hwan", "hyed", "hyen", "hyes", "hyke", "hymn", "hype", "hypo", "hyps", "hyte", "iamb", "ibex", "ibis", "iced", "icer", "ices", "ichs", "icky", "icon", "idea", "idee", "idem", "ides", "iffy", "igad", "iggs", "ikan", "ikat", "ikon", "imam", "imid", "immy", "impi", "imps", "inby", "inch", "info", "ingo", "inia", "inks", "inky", "inns", "inro", "inti", "into", "ions", "iota", "ired", "ires", "irid", "iris", "irks", "iron", "isba", "isit", "isms", "isna", "isos", "itas", "itch", "item", "iure", "iwis", "ixia", "izar", "jabs", "jack", "jade", "jafa", "jaga", "jagg", "jags", "jake", "jaks", "jamb", "jams", "jane", "jann", "jape", "japs", "jark", "jarp", "jars", "jasp", "jass", "jasy", "jato", "jauk", "jaup", "java", "jaws", "jaxy", "jays", "jazy", "jazz", "jean", "jeat", "jedi", "jeed", "jeep", "jeer", "jees", "jeez", "jefe", "jeff", "jehu", "jeon", "jerk", "jess", "jest", "jete", "jets", "jeux", "jews", "jiao", "jibb", "jibe", "jibs", "jiff", "jigs", "jimp", "jink", "jinn", "jins", "jinx", "jird", "gism", "jive", "jivy", "jozz", "jobe", "jobs", "jock", "joco", "joes", "joey", "jogs", "john", "join", "joke", "joky", "jomo", "jong", "jook", "jors", "josh", "joss", "jota", "jots", "jouk", "jour", "jows", "joys", "juba", "jube", "juco", "judo", "juds", "judy", "juga", "jugs", "juju", "juke", "juku", "jump", "junk", "jupe", "jura", "jure", "jury", "just", "jute", "juts", "juve", "jynx", "kabs", "kade", "kadi", "kaed", "kaes", "kafs", "kago", "kagu", "kaid", "kaie", "kaif", "kaik", "kaim", "kain", "kais", "kaka", "kaki", "kaks", "kama", "kame", "kami", "kana", "kane", "kang", "kans", "kant", "kaon", "kapa", "kaph", "kara", "kark", "karn", "karo", "kart", "kata", "kati", "kats", "kava", "kawa", "kaws", "kayo", "kays", "kazi", "kbar", "keas", "kebs", "keck", "keds", "keef", "keek", "keen", "keep", "keet", "kefs", "kegs", "keir", "keks", "kemb", "kemp", "keno", "kens", "kent", "kepi", "keps", "kept", "kerb", "kerf", "kern", "kero", "kesh", "kest", "keta", "kete", "keto", "kets", "keys", "khaf", "khan", "khat", "khet", "khis", "khor", "khud", "kibe", "kick", "kids", "kief", "kier", "kiff", "kifs", "kina", "kind", "kine", "king", "kink", "kino", "kins", "kipe", "kipp", "kips", "kirk", "kirn", "kirs", "kish", "kiss", "kist", "kite", "kith", "kits", "kiva", "kiwi", "knag", "knap", "knar", "knee", "knew", "knit", "knob", "knop", "knot", "know", "knub", "knur", "knut", "koan", "koap", "koas", "kobo", "kobs", "koff", "koha", "kois", "koji", "kond", "konk", "kons", "kook", "koph", "kops", "kora", "kore", "koro", "kors", "koru", "koss", "koto", "kows", "krab", "kris", "ksar", "kudo", "kudu", "kueh", "kues", "kufi", "kuia", "kuku", "kuna", "kune", "kuri", "kuru", "kuta", "kuti", "kutu", "kuzu", "kvas", "kyak", "kyar", "kyat", "kybo", "kyes", "kynd", "kyne", "kype", "kyte", "kyus", "mabe", "mace", "mach", "mack", "macs", "made", "mads", "maes", "mage", "magg", "magi", "mags", "maid", "maik", "maim", "main", "mair", "make", "maki", "mako", "maks", "mama", "mams", "mana", "mand", "mane", "mang", "mani", "mano", "mans", "many", "maps", "mara", "marc", "mard", "mare", "marg", "mark", "marm", "mars", "mart", "mary", "masa", "mase", "mash", "mask", "mass", "mast", "masu", "mate", "math", "mats", "matt", "maty", "maud", "maun", "maut", "mawk", "mawn", "mawr", "maws", "maxi", "maya", "mayo", "mays", "maze", "mazy", "mead", "mean", "meat", "meck", "meds", "meed", "meek", "meer", "mees", "meet", "meff", "mega", "megs", "mein", "meme", "memo", "mems", "mend", "mene", "meng", "meno", "ment", "menu", "meou", "meow", "merc", "mere", "meri", "merk", "mesa", "mese", "mesh", "mess", "meta", "mete", "meth", "mets", "meus", "meve", "mews", "meze", "mezz", "mhos", "mibs", "mica", "mice", "mich", "mick", "mico", "mics", "midi", "mids", "mien", "miff", "migg", "migs", "miha", "mihi", "mike", "mime", "mina", "mind", "mine", "ming", "mini", "mink", "mino", "mint", "minx", "miny", "mips", "mire", "miri", "mirk", "miro", "mirs", "mirv", "miry", "mise", "miso", "miss", "mist", "mite", "mitt", "mity", "mixt", "mixy", "mizz", "mnas", "moai", "moan", "moas", "moat", "mobe", "mobs", "moby", "moch", "mock", "mocs", "mode", "modi", "mods", "moer", "moes", "mofo", "mogs", "mohr", "moit", "mojo", "moke", "moki", "moko", "mome", "momi", "moms", "mona", "mong", "monk", "mono", "mons", "mony", "mood", "mooi", "mook", "moon", "moop", "moor", "moos", "moot", "mope", "mops", "mopy", "mora", "more", "morn", "mors", "mort", "mose", "mosh", "mosk", "moss", "most", "mote", "moth", "moti", "mots", "mott", "motu", "moue", "moup", "mous", "move", "mowa", "mown", "mows", "moxa", "moya", "moys", "moze", "mozo", "mozz", "much", "muck", "muds", "muff", "mugg", "mugs", "muid", "muir", "mumm", "mump", "mums", "mumu", "mung", "muni", "muns", "munt", "muon", "mura", "mure", "murk", "murr", "muse", "mush", "musk", "muso", "muss", "must", "mute", "muti", "muts", "mutt", "muzz", "mycs", "myna", "myth", "myxo", "mzee", "nabe", "nabk", "nabs", "nach", "nada", "nads", "naff", "naga", "nags", "naif", "naik", "nain", "name", "nams", "namu", "nana", "nane", "nans", "naoi", "naos", "napa", "nape", "naps", "narc", "nard", "nare", "nark", "nary", "nats", "nave", "navy", "nays", "naze", "nazi", "neap", "near", "neat", "nebs", "neck", "neds", "need", "neem", "neep", "nefs", "negs", "neif", "neks", "nema", "nemn", "nene", "neon", "neps", "nerd", "nerk", "nesh", "ness", "nest", "nete", "nets", "nett", "neuk", "neum", "neve", "nevi", "news", "newt", "next", "nibs", "nice", "nick", "nide", "nidi", "nids", "nied", "nief", "nies", "nife", "niff", "nigh", "nimb", "nims", "nine", "nipa", "nips", "nish", "nisi", "nite", "nits", "nixe", "nixy", "noah", "nobs", "nock", "node", "nodi", "nods", "noes", "nogg", "nogs", "noir", "noma", "nome", "noms", "nona", "none", "nong", "noni", "nook", "noon", "noop", "nope", "nori", "nork", "norm", "nose", "nosh", "nosy", "nota", "note", "nott", "noun", "noup", "nous", "nout", "nova", "nown", "nows", "nowt", "nowy", "noys", "nubs", "nude", "nuff", "nuke", "numb", "nuns", "nurd", "nurr", "nurs", "nuts", "nyas", "nyed", "nyes", "oafs", "oaks", "oaky", "oars", "oary", "oast", "oath", "oats", "obas", "obes", "obey", "obia", "obis", "obit", "oboe", "obos", "ocas", "occy", "oche", "octa", "odah", "odas", "odds", "odea", "odes", "odic", "odor", "odso", "ofay", "offs", "ogam", "ogee", "ogre", "ohed", "ohia", "ohms", "ohos", "oiks", "oink", "oint", "okas", "okay", "okeh", "okes", "okra", "okta", "ombu", "omen", "omer", "omit", "omov", "once", "oner", "ones", "onie", "onos", "onst", "onto", "onus", "onyx", "oofs", "oofy", "oohs", "ooms", "oons", "oont", "oops", "oose", "oosy", "oots", "ooze", "oozy", "opah", "oped", "open", "opes", "oppo", "opts", "opus", "orad", "orbs", "orby", "orca", "orcs", "ordo", "ords", "ores", "orfe", "orfs", "orgy", "orra", "orts", "oryx", "orzo", "osar", "oses", "ossa", "otic", "otto", "ouch", "ouds", "ouks", "ouma", "oupa", "ouph", "oups", "ourn", "ours", "oust", "outs", "ouzo", "oven", "over", "ovum", "owed", "ower", "owes", "owns", "owre", "owse", "owts", "oxen", "oxer", "oxes", "oxid", "oxim", "oyer", "oyes", "oyez", "paca", "pace", "pack", "paco", "pacs", "pact", "pacy", "padi", "pads", "page", "pahs", "paid", "paik", "pain", "pair", "pais", "pams", "pand", "pane", "pang", "pans", "pant", "papa", "pape", "paps", "para", "pard", "pare", "park", "parp", "parr", "pars", "part", "pase", "pash", "pass", "past", "pate", "path", "pats", "patu", "paty", "paua", "pave", "pavs", "pawa", "pawk", "pawn", "paws", "pays", "peag", "peak", "pean", "pear", "peas", "peat", "peba", "pech", "peck", "pecs", "peds", "peed", "peek", "peen", "peep", "peer", "pees", "pegh", "pegs", "pehs", "pein", "peke", "pend", "pene", "peni", "penk", "pens", "pent", "peon", "pepo", "peps", "pere", "peri", "perk", "perm", "pern", "perp", "pert", "perv", "peso", "pest", "pets", "pews", "pfft", "pfui", "phat", "phew", "phis", "phiz", "phoh", "phon", "phos", "phot", "phut", "pian", "pias", "pica", "pice", "pick", "pics", "pied", "pier", "pies", "piet", "pigs", "pika", "pike", "piki", "pima", "pimp", "pina", "pine", "ping", "pink", "pins", "pint", "piny", "pion", "pioy", "pipa", "pipe", "pipi", "pips", "pipy", "pirn", "pirs", "pise", "pish", "piso", "piss", "pita", "pith", "pits", "pity", "pium", "pixy", "pize", "poas", "pock", "poco", "pods", "poem", "poep", "poet", "pogo", "pogy", "pois", "poke", "poky", "pome", "pomo", "pomp", "poms", "pond", "pone", "pong", "ponk", "pons", "pont", "pony", "pood", "poof", "pooh", "pook", "poon", "poop", "poor", "poos", "poot", "pope", "pops", "pore", "pork", "porn", "port", "pory", "pose", "posh", "poss", "post", "posy", "pote", "pots", "pott", "pouf", "pouk", "pour", "pout", "pown", "pows", "poxy", "pozz", "prad", "pram", "prao", "prat", "prau", "pray", "pree", "prem", "prep", "prex", "prey", "prez", "prig", "prim", "proa", "prob", "prod", "prof", "prog", "prom", "proo", "prop", "pros", "prow", "pruh", "prys", "psis", "psst", "ptui", "pube", "pubs", "puce", "puck", "puds", "pudu", "puer", "puff", "pugh", "pugs", "puha", "puir", "puja", "puka", "puke", "puku", "puma", "pump", "pumy", "puna", "pung", "punk", "puns", "punt", "puny", "pupa", "pups", "pupu", "pure", "puri", "purr", "purs", "push", "puss", "puts", "putt", "putz", "puys", "pyas", "pyat", "pyes", "pyet", "pyic", "pyin", "pyne", "pyot", "pyre", "pyro", "qadi", "qaid", "qats", "qoph", "quad", "quag", "quai", "quat", "quay", "quep", "quey", "quid", "quin", "quip", "quit", "quiz", "quod", "quop", "rabi", "raca", "race", "rach", "rack", "racy", "rade", "rads", "raff", "raft", "raga", "rage", "ragg", "ragi", "rags", "rahs", "raia", "raid", "raik", "rain", "rais", "rait", "raja", "rake", "raki", "raku", "rami", "ramp", "rams", "rana", "rand", "rang", "rani", "rank", "rant", "rape", "raps", "rapt", "rare", "rark", "rase", "rash", "rasp", "rast", "rata", "rate", "rath", "rato", "rats", "ratu", "raun", "rave", "rawn", "raws", "raya", "rays", "raze", "razz", "read", "reak", "ream", "rean", "reap", "rear", "rebs", "reck", "recs", "redd", "rede", "redo", "reds", "reed", "reef", "reek", "reen", "rees", "refs", "reft", "rego", "regs", "rehs", "reif", "reik", "rein", "reis", "reke", "rems", "rend", "renk", "rens", "rent", "reny", "reos", "repo", "repp", "reps", "resh", "rest", "rete", "rets", "revs", "rews", "rhea", "rhos", "rhus", "rias", "riba", "ribs", "rice", "rich", "rick", "ricy", "ride", "rids", "riem", "rife", "riff", "rifs", "rift", "rigg", "rigs", "rima", "rime", "rims", "rimu", "rimy", "rind", "rine", "ring", "rink", "rins", "riot", "ripe", "ripp", "rips", "ript", "rise", "risk", "risp", "rite", "rits", "ritt", "ritz", "riva", "rive", "rivo", "riza", "road", "roam", "roan", "roar", "robe", "robs", "roch", "rock", "rocs", "rode", "rods", "roed", "roes", "roin", "roji", "roke", "roks", "roky", "roma", "romp", "roms", "rone", "rong", "ront", "rood", "roof", "rook", "room", "roon", "roop", "roos", "root", "rope", "ropy", "rore", "rort", "rory", "rose", "rost", "rosy", "rota", "rote", "roti", "roto", "rots", "roue", "roum", "roup", "rout", "roux", "rove", "rows", "rowt", "rube", "rubs", "ruby", "ruck", "rucs", "rudd", "rude", "ruds", "rued", "ruer", "rues", "ruff", "ruga", "rugs", "ruin", "rukh", "rume", "rump", "rums", "rund", "rune", "rung", "runs", "runt", "rurp", "ruru", "rusa", "ruse", "rush", "rusk", "rust", "ruth", "ruts", "ryas", "ryes", "ryfe", "ryke", "rynd", "ryot", "rype", "sabe", "sabs", "sack", "sacs", "sade", "sadi", "sado", "sads", "safe", "saft", "saga", "sage", "sago", "sags", "sagy", "saic", "said", "saim", "sain", "sair", "sais", "sake", "saki", "sama", "same", "samp", "sams", "sand", "sane", "sang", "sank", "sans", "sant", "saps", "sard", "sari", "sark", "sars", "sash", "sass", "sate", "sati", "saut", "save", "savs", "sawn", "saws", "saxe", "says", "scab", "scad", "scag", "scam", "scan", "scar", "scat", "scaw", "scog", "scop", "scot", "scow", "scry", "scud", "scug", "scum", "scup", "scur", "scut", "scye", "seam", "sean", "sear", "seas", "seat", "sech", "seco", "secs", "sect", "seed", "seek", "seem", "seen", "seep", "seer", "sees", "sego", "segs", "seif", "seik", "seir", "seis", "sekt", "seme", "semi", "sena", "send", "sene", "sens", "sent", "seps", "sept", "sera", "sere", "serf", "serk", "serr", "sers", "sese", "sesh", "sess", "seta", "sets", "sett", "sewn", "sews", "sext", "sexy", "seys", "shad", "shag", "shah", "sham", "shan", "shat", "shaw", "shay", "shea", "shed", "shes", "shet", "shew", "shim", "shin", "ship", "shir", "shit", "shiv", "shmo", "shod", "shoe", "shog", "shoo", "shop", "shot", "show", "shri", "shun", "shut", "shwa", "sibb", "sibs", "sice", "sich", "sick", "sics", "sida", "side", "sidh", "sien", "sies", "sift", "sigh", "sign", "sijo", "sika", "sike", "sima", "simi", "simp", "sims", "sind", "sine", "sing", "sinh", "sink", "sins", "sipe", "sips", "sire", "siri", "sirs", "siss", "sist", "site", "sith", "sits", "sitz", "size", "sizy", "sjoe", "skag", "skas", "skat", "skaw", "skee", "skeg", "sken", "skeo", "skep", "sker", "sket", "skew", "skid", "skim", "skin", "skio", "skip", "skis", "skit", "skry", "skua", "skug", "skyf", "skyr", "smee", "smew", "smir", "smit", "smog", "smug", "smur", "smut", "snab", "snag", "snap", "snar", "snaw", "sneb", "sned", "snee", "snib", "snig", "snip", "snit", "snob", "snod", "snog", "snot", "snow", "snub", "snug", "snye", "soak", "soap", "soar", "soba", "sobs", "soca", "sock", "socs", "soda", "sods", "sofa", "soft", "sogs", "soho", "sohs", "soja", "soke", "soma", "some", "soms", "somy", "sone", "song", "sons", "sook", "soom", "soon", "soop", "soot", "soph", "sops", "sora", "sorb", "sord", "sore", "sori", "sorn", "sort", "soss", "soth", "sots", "souk", "soum", "soup", "sour", "sous", "sout", "sovs", "sowf", "sowm", "sown", "sowp", "sows", "soya", "soys", "spae", "spag", "spam", "span", "spar", "spas", "spat", "spaw", "spay", "spaz", "spec", "sped", "spek", "spet", "spew", "spic", "spie", "spif", "spik", "spim", "spin", "spit", "spiv", "spod", "spot", "spry", "spud", "spue", "spug", "spun", "spur", "sris", "stab", "stag", "stap", "star", "stat", "staw", "stay", "sted", "stem", "sten", "step", "stet", "stew", "stey", "stie", "stim", "stir", "stoa", "stob", "stop", "stot", "stow", "stub", "stud", "stum", "stun", "stye", "suba", "subs", "such", "suck", "sudd", "suds", "sued", "suer", "sues", "suet", "sugh", "suid", "suit", "sukh", "suks", "sumo", "sump", "sums", "sumy", "sung", "sunk", "sunn", "suns", "supe", "sups", "suqs", "sura", "surd", "sure", "surf", "suss", "susu", "swab", "swad", "swag", "swam", "swan", "swap", "swat", "sway", "swee", "swey", "swig", "swim", "swiz", "swob", "swop", "swot", "swum", "sybo", "syce", "syed", "syen", "syes", "syke", "sync", "synd", "syne", "sype", "syph", "tabi", "tabs", "tabu", "tace", "tach", "tack", "taco", "tact", "tads", "taed", "taes", "tags", "taha", "tahr", "taig", "tain", "tais", "tait", "taka", "take", "taki", "taks", "taky", "tame", "tamp", "tams", "tana", "tane", "tang", "tanh", "tank", "tans", "taos", "tapa", "tape", "taps", "tapu", "tara", "tare", "tarn", "taro", "tarp", "tars", "tart", "tash", "task", "tass", "tate", "tath", "tats", "tatt", "tatu", "taus", "taut", "tava", "tavs", "tawa", "taws", "tawt", "taxa", "taxi", "tays", "tead", "teak", "team", "tear", "teas", "teat", "tech", "tecs", "teds", "tedy", "teed", "teek", "teem", "teen", "teer", "tees", "teff", "tefs", "tegg", "tegs", "tegu", "tehr", "teme", "temp", "tems", "tend", "tene", "tens", "tent", "tepa", "terf", "term", "tern", "test", "tete", "teth", "tets", "tews", "text", "thae", "than", "thar", "that", "thaw", "thee", "them", "then", "thew", "they", "thig", "thin", "thio", "thir", "this", "thon", "thou", "thro", "thru", "thud", "thug", "thus", "tiar", "tice", "tich", "tick", "tics", "tide", "tids", "tidy", "tied", "tier", "ties", "tiff", "tift", "tige", "tigs", "tika", "tike", "tiki", "time", "tind", "tine", "ting", "tink", "tins", "tint", "tiny", "tipi", "tips", "tipt", "tire", "tiro", "tirr", "tite", "titi", "tits", "tivy", "tizz", "toad", "toby", "tock", "toco", "tocs", "tods", "tody", "toea", "toed", "toes", "toey", "toff", "toft", "tofu", "toga", "toge", "togs", "toho", "toit", "toke", "toko", "tomb", "tome", "tomo", "toms", "tone", "tong", "tonk", "tons", "tony", "took", "toom", "toon", "toot", "tope", "toph", "topi", "topo", "tops", "tora", "torc", "tore", "tori", "torn", "toro", "torr", "tors", "tort", "tory", "tosa", "tose", "tosh", "toss", "tost", "tote", "tots", "touk", "toun", "tour", "tout", "town", "tows", "towt", "towy", "toyo", "toys", "toze", "trad", "tram", "trap", "trat", "tray", "tree", "tref", "trek", "tres", "tret", "trew", "trey", "trez", "trie", "trig", "trim", "trin", "trio", "trip", "trod", "trog", "tron", "trop", "trot", "trow", "troy", "true", "trug", "trye", "tryp", "tsar", "tsks", "tuan", "tuba", "tube", "tubs", "tuck", "tufa", "tuff", "tuft", "tugs", "tuis", "tump", "tums", "tuna", "tund", "tune", "tung", "tuns", "tuny", "tups", "turd", "turf", "turk", "turm", "turn", "tush", "tusk", "tuts", "tutu", "tuzz", "twae", "twas", "tway", "twee", "twig", "twin", "twit", "twos", "tyde", "tyed", "tyee", "tyer", "tyes", "tygs", "tyin", "tyke", "tymp", "tynd", "tyne", "type", "typo", "typp", "typy", "tyre", "tyro", "tyte", "tzar", "udon", "udos", "ueys", "ufos", "ughs", "ukes", "umbo", "umph", "umps", "umpy", "unai", "unau", "unbe", "unce", "unci", "unco", "unde", "undo", "undy", "unis", "unit", "unto", "upas", "upby", "updo", "upgo", "upon", "upsy", "upta", "urao", "urbs", "urde", "urds", "urdy", "urea", "ures", "urge", "uric", "urns", "urps", "ursa", "urus", "urva", "used", "user", "uses", "utas", "utes", "utis", "utus", "uvae", "uvas", "uvea", "vacs", "vade", "vaes", "vagi", "vags", "vain", "vair", "vamp", "vane", "vang", "vans", "vant", "vara", "vare", "vars", "vary", "vasa", "vase", "vast", "vats", "vatu", "vaus", "vaut", "vavs", "vaws", "veep", "veer", "vees", "vega", "vego", "vehm", "vein", "vena", "vend", "vent", "vera", "verb", "verd", "vers", "vert", "very", "vest", "veto", "vets", "vext", "viae", "vias", "vibe", "vibs", "vice", "vide", "vids", "vied", "vier", "vies", "view", "viga", "vigs", "vims", "vina", "vine", "vino", "vins", "vint", "viny", "vire", "visa", "vise", "vita", "vite", "viva", "vive", "vivo", "vizy", "voar", "voes", "void", "vors", "vote", "vows", "vrot", "vrou", "vrow", "vugg", "vugh", "vugs", "vums", "wabs", "wack", "wadd", "wade", "wadi", "wads", "wadt", "wady", "waes", "waff", "waft", "wage", "wags", "waid", "waif", "wain", "wair", "wais", "wait", "waka", "wake", "wakf", "wame", "wand", "wane", "wang", "wank", "wans", "want", "wany", "waps", "waqf", "warb", "ward", "ware", "wark", "warm", "warn", "warp", "wars", "wart", "wary", "wase", "wash", "wasm", "wasp", "wast", "wate", "wats", "watt", "wauk", "waur", "wave", "wavy", "wawa", "wawe", "waws", "waxy", "ways", "weak", "wean", "wear", "webs", "weds", "weed", "week", "weem", "ween", "weep", "weer", "wees", "weet", "weft", "weid", "weir", "weka", "wemb", "wems", "wena", "wend", "wens", "went", "wept", "were", "wero", "wert", "west", "weta", "wets", "wexe", "weys", "whae", "wham", "whap", "what", "whee", "when", "whet", "whew", "whey", "whid", "whig", "whim", "whin", "whio", "whip", "whir", "whit", "whiz", "whoa", "whom", "whop", "whot", "whow", "whup", "whys", "wice", "wich", "wick", "wide", "wife", "wigs", "wimp", "wind", "wine", "wing", "wink", "winn", "wino", "wins", "winy", "wipe", "wire", "wiry", "wise", "wish", "wisp", "wiss", "wist", "wite", "with", "wits", "wive", "woad", "wock", "woes", "wofs", "wogs", "woke", "woks", "womb", "wonk", "wons", "wont", "wood", "woof", "woon", "woos", "woot", "wops", "word", "wore", "work", "worm", "worn", "wort", "wost", "wots", "wove", "wowf", "wows", "wrap", "wren", "writ", "wuds", "wudu", "wuss", "wych", "wyes", "wynd", "wynn", "wyns", "wyte", "xyst", "yaba", "yack", "yads", "yaff", "yagi", "yags", "yahs", "yaks", "yams", "yang", "yank", "yapp", "yaps", "yard", "yare", "yark", "yarn", "yarr", "yate", "yaud", "yaup", "yawn", "yawp", "yaws", "yawy", "yays", "ybet", "yead", "yeah", "yean", "year", "yeas", "yebo", "yech", "yede", "yeed", "yegg", "yens", "yeps", "yerd", "yerk", "yesk", "yest", "yeti", "yett", "yeuk", "yeve", "yews", "ygoe", "yids", "yike", "yins", "yipe", "yips", "yird", "yirk", "yirr", "yite", "ympe", "ympt", "yobs", "yock", "yode", "yodh", "yods", "yoga", "yogh", "yogi", "yoke", "yoks", "yomp", "yond", "yoni", "yont", "yoof", "yoop", "yore", "york", "yorp", "youk", "your", "yous", "yowe", "yows", "yuan", "yuca", "yuch", "yuck", "yuft", "yuga", "yugs", "yuke", "yuko", "yuks", "yuky", "yump", "yunx", "yups", "yurt", "yutz", "yuzu", "ywis", "zack", "zags", "zany", "zaps", "zarf", "zati", "zeas", "zebu", "zeds", "zees", "zein", "zeks", "zeps", "zerk", "zero", "zest", "zeta", "zeze", "zhos", "ziff", "zigs", "zimb", "zinc", "zine", "zing", "zins", "zips", "zite", "ziti", "zits", "zizz", "zobo", "zobu", "zoea", "zoic", "zona", "zone", "zonk", "zoom", "zoon", "zoos", "zoot", "zori", "zouk", "zupa", "zurf", "zyga", "zyme" ];

export function random_word4() {
    return WORDS[random_int(0, WORDS.length - 1)];
};

const PERLIN_YWRAPB = 4, PERLIN_YWRAP = 1 << PERLIN_YWRAPB, PERLIN_ZWRAPB = 8, PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB, PERLIN_SIZE = 4095;

let perlin, perlin_octaves = 4, perlin_attenuation = .5;

function scaled_cosine(i) {
    return .5 * (1 - Math.cos(i * Math.PI));
}

export function perlin_noise(x) {
    var y = 0, z = 0;
    if (null == perlin) {
        perlin = new Array(PERLIN_SIZE + 1);
        for (let i = 0; i < PERLIN_SIZE + 1; i++) perlin[i] = Math.random();
    }
    x < 0 && (x = -x), y < 0 && (y = -y), z < 0 && (z = -z);
    let rxf, ryf, n1, n2, n3, xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi, r = 0, ampl = 1;
    for (let o = 0; o < perlin_octaves; o++) {
        let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB);
        rxf = scaled_cosine(xf), ryf = scaled_cosine(yf), n1 = perlin[of & PERLIN_SIZE], n1 += rxf * (perlin[of + 1 & PERLIN_SIZE] - n1), n2 = perlin[of + PERLIN_YWRAP & PERLIN_SIZE], n1 += ryf * ((n2 += rxf * (perlin[of + PERLIN_YWRAP + 1 & PERLIN_SIZE] - n2)) - n1), 
        n2 = perlin[(of += PERLIN_ZWRAP) & PERLIN_SIZE], n2 += rxf * (perlin[of + 1 & PERLIN_SIZE] - n2), n3 = perlin[of + PERLIN_YWRAP & PERLIN_SIZE], n2 += ryf * ((n3 += rxf * (perlin[of + PERLIN_YWRAP + 1 & PERLIN_SIZE] - n3)) - n2), 
        r += (n1 += scaled_cosine(zf) * (n2 - n1)) * ampl, ampl *= perlin_attenuation, xi <<= 1, yi <<= 1, yf *= 2, zi <<= 1, zf *= 2, (xf *= 2) >= 1 && (xi++, xf--), yf >= 1 && (yi++, yf--), zf >= 1 && (zi++, 
        zf--);
    }
    return r;
};

export function set_clock(targ_sec) {
    targ_sec == U && (targ_sec = now_raw);
    let delta = targ_sec - now;
    TRACE_TIME && logg(str.conv(" >> set_clock, targ={n3}, now={n3}, delta={n3}, old_dilated={n3}", targ_sec, now, delta, g_era_dilated)), g_era_dilated += delta, loom_delta_clock(delta);
};

export function set_clock_scale(newscale) {
    TRACE_TIME && logg(str.conv(" >> set_clock_scale, {n3}", newscale)), newscale != g_time_scale && (g_time_scale = newscale, g_era_dilated = now, g_era_raw = now_raw);
};

const SS_DATE = 0;

export function day_of_year(d) {
    var monthLengths = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], year = d.getFullYear();
    (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) && (monthLengths[1] = 29);
    for (var dayInYear = 0, i = 0; i < d.getMonth() - 1; i++) dayInYear += monthLengths[i];
    return dayInYear += d.getDate();
};

function push_system_modal() {
    let depth = getn(runtime, F_os_modal);
    setv(_M, 0, runtime, F_os_modal, depth + 1);
}

function pop_system_modal() {
    let depth = getn(runtime, F_os_modal);
    setv(_M, 0, runtime, F_os_modal, depth + 1);
}

var g_style = null;

export function css_append(css) {
    null != g_style && g_style.parentNode.removeChild(g_style), (g_style = document.createElement("style")).innerHTML = css, document.head.appendChild(g_style);
};

export function os_command(cmd, ...parms) {
    debugger;
};

export function os_run(filepath, ...parms) {
    debugger;
};

export function os_open(filepath) {
    debugger;
};

export function os_file_name(fileobj) {
    return fileobj.name;
};

export function os_read_str(fileobj, callback) {
    var reader = new FileReader();
    reader.onload = (readerEvent => {
        var content = readerEvent.target.result;
        callback.code(content);
    }), reader.readAsText(fileobj);
};

export function os_read_bytes(fileobj, callback) {
    var reader = new FileReader();
    reader.onload = (readerEvent => {
        var mybuf = ArrayBuffer_to_ByteArray(readerEvent.target.result, LITTLE_ENDIAN);
        callback.code(mybuf);
    }), reader.readAsArrayBuffer(fileobj);
};

export function os_write_str(filename, text) {
    var a = document.createElement("a"), blob = new Blob([ text ], {
        type: "text/plain"
    });
    a.href = URL.createObjectURL(blob), a.download = filename, a.click();
};

export function os_write_bytes(filename, bytes) {
    var link = document.createElement("a"), data = bytes.arraybuf.slice(0, bytes.position), blob = new Blob([ data ], {
        type: "application/octet-stream"
    });
    link.href = URL.createObjectURL(blob), link.download = filename + ".bbox", link.style.visibility = "hidden", document.body.appendChild(link), link.click(), document.body.removeChild(link);
};

export function file_write_str(mypath, mybuf) {
    debugger;
};

export function os_pick_files(title, callback, options) {
    var extra = null, os_input = document.createElement("input");
    os_input.type = "file";
    for (let property in options) switch (property) {
      case "extra":
        extra = options.extra;
        break;

      case "prompt":
        options.prompt;
        break;

      case "suffixes":
        os_input.accept = fix_suffixes(options.suffixes);
        break;

      case "multiple":
        os_input.multiple = options.multiple == Y;
        break;

      default:
        argument_err("bad property: " + property);
    }
    function fix_suffixes(raw) {
        var net = raw.replace(/\*/g, "");
        return net = net.replace(/;/g, ", ");
    }
    os_input.onchange = (e => {
        var file = e.target.files[0];
        logg(`  in onChange, name=${file.name}, size=${file.size}, type=${file.type}`);
        var list = new a_tree(_M, "os_pick_files"), ix = 1;
        for (let f of e.target.files) setv(_M, 0, list, ix, f), ix += 1;
        callback.code(list, extra);
    }), logg(`ask file, accept=${os_input.accept}`), os_input.click();
};

export function os_pick_save(title, callback, options) {
    debugger;
};

export function os_pick_dir(title, callback, options) {
    debugger;
};

export function os_clipboard_copy(msg) {
    const el = document.createElement("textarea");
    el.value = msg, document.body.appendChild(el), el.select(), document.execCommand("copy"), document.body.removeChild(el);
};

export function os_clipboard_paste() {
    return "ERROR";
};

export function loom_timer(func, options) {
    let elem = alloc_loom_elem(options);
    return elem.nreps < 1 ? U : (elem.func = func, elem.evkind = EV_TIMER, TRACE_LOOM && logg("-- loom_timer, id=" + String(elem.id)), now >= elem.time && elem.prereq == U && (TRACE_LOOM && logg("-- loom_timer, firing immediate"), 
    elem.countx = 1, call_deferred_func(elem), elem.last_seen = now, elem.time = elem.interval, elem.is_relative = !0, 1 == elem.nreps) ? U : (g_loom.push(elem), elem.id));
};

export function loom_animate_curve(container, p1, c1, p2, options) {
    debugger;
    return null;
};

export function loom_animate_box(container, p1, c1, p2, width1, height1, width2, height2, options) {
    debugger;
    return null;
};

export function loom_clear(options) {
    let lx, group, id;
    for (let property in options) switch (property) {
      case "id":
        id = options.id;
        break;

      case "group":
        group = options.group;
        break;

      default:
        argument_err("bad property: " + property);
    }
    for (lx = g_loom.length; lx--; ) g_loom[lx].group != group && g_loom[lx].id != id || loom_clearx(lx);
};

export function loom_clear_all() {
    let lx, item;
    for (lx = g_loom.length; lx--; ) (item = g_loom[lx]).group == IDE_GROUP && item.evkind == EV_TIMER && call_deferred_func(item), loom_clearx(lx);
};

export function loom_delta_clock(delta) {
    let lx, item;
    for (lx = g_loom.length; lx--; ) item = g_loom[lx], TRACE_LOOM && logg(str.conv("loom_delta, lx={}, time={n3}, is_rel={bool}", lx, item.time, item.is_relative)), item.is_relative && (item.time += delta, 
    TRACE_LOOM && logg(str.conv("  -- adjusted loom item time to {n3}", item.time)));
};

export function loom_animate_num_linear(valpath, options) {
    return loom_animate_num_bezier(valpath, U, U, U, U, options);
};

export function loom_animate_num_bezier(valpath, x1, y1, x2, y2, options) {
    let busypath = null, endval = 0, duration = 1, group = U, is_dilated = !0;
    for (let property in options) switch (property) {
      case "busyflag":
        busypath = options.busyflag;
        break;

      case "endval":
        endval = options.endval;
        break;

      case "duration":
        duration = options.duration.mag;
        break;

      case "group":
        group = options.group;
        break;

      case "is_dilated":
        is_dilated = options.is_dilated == Y;
        break;

      default:
        argument_err("bad property in options: " + property);
    }
    let startval = path_getv(valpath, EF_VAL_IS_NUM);
    if (TRACE_ANIMATION && logg(str.conv("adding bez animation startval={n,3}, endval={n,3}, duration={}", startval, endval, duration)), startval !== endval) {
        let anim = new a_loom_anim_num();
        return g_num_animations.push(anim), path_setv(_M, WHERE_LOOM, busypath, Y), anim.valpath = valpath.clone(), anim.busypath = busypath.clone(), anim.startval = startval, anim.endval = endval, anim.is_dilated = is_dilated, 
        anim.starttime = is_dilated ? now : now_raw, anim.duration = duration, anim.bez_x1 = x1, anim.bez_y1 = y1, anim.bez_x2 = x2, anim.bez_y2 = y2, anim.id = loom_next_id(), anim.id;
    }
    return U;
};

export function random_color() {
    return random_int(0, 16777215);
};

export function hsv_to_color(hsv_rec) {
    return hsv(getn(hsv_rec, F_hue), getn(hsv_rec, F_saturation), getn(hsv_rec, F_value));
};

export function hsv(h, s, v) {
    if (is_err_enum_b(h) || is_err_enum_b(s) || is_err_enum_b(v)) return ERR;
    if (h === U || s === U || v === U) return U;
    v < 0 && (v = 0), v > 100 && (v = 100), s < 0 && (s = 0), s > 100 && (s = 100);
    let r = 0, g = 0, b = 0, tempS = s / 100, tempV = v / 100, hi = Math.floor(h / 60) % 6, f = h / 60 - Math.floor(h / 60), p = tempV * (1 - tempS), q = tempV * (1 - f * tempS), t = tempV * (1 - (1 - f) * tempS);
    switch (hi) {
      case 0:
        r = tempV, g = t, b = p;
        break;

      case 1:
        r = q, g = tempV, b = p;
        break;

      case 2:
        r = p, g = tempV, b = t;
        break;

      case 3:
        r = p, g = q, b = tempV;
        break;

      case 4:
        r = t, g = p, b = tempV;
        break;

      case 5:
        r = tempV, g = p, b = q;
    }
    return Math.round(255 * r) << 16 | Math.round(255 * g) << 8 | Math.round(255 * b);
};

export function color_to_hsv(rgb) {
    if (is_err_enum_b(rgb)) return {
        h: ERR
    };
    if (rgb === U) return {
        h: U
    };
    let r = rgb >> 16 & 255, g = rgb >> 8 & 255, b = 255 & rgb, max = Math.max(r, g, b), min = Math.min(r, g, b), hue = 0, saturation = 0, value = 0;
    hue = max === min ? 0 : max === r ? (60 * (g - b) / (max - min) + 360) % 360 : max === g ? 60 * (b - r) / (max - min) + 120 : 60 * (r - g) / (max - min) + 240, value = max, saturation = 0 === max ? 0 : (max - min) / max;
    let hsv = new a_tree(_M, "hsv");
    return setv(_M, 0, hsv, F_hue, Math.round(hue)), setv(_M, 0, hsv, F_saturation, Math.round(100 * saturation)), setv(_M, 0, hsv, F_value, Math.round(value / 255 * 100)), hsv;
};

export function color_tweak(rgb, deltah, deltas, deltav) {
    var hsv_rec = color_to_hsv(rgb);
    return hsv(getn(hsv_rec, F_hue) + deltah, getn(hsv_rec, F_saturation) + deltas, getn(hsv_rec, F_value) + deltav);
};

export function r255(pixel) {
    return is_err_enum_b(pixel) || pixel < 0 ? ERR : pixel === U ? U : pixel >>> 16 & 255;
};

export function g255(pixel) {
    return is_err_enum_b(pixel) || pixel < 0 ? ERR : pixel === U ? U : pixel >>> 8 & 255;
};

export function b255(pixel) {
    return is_err_enum_b(pixel) || pixel < 0 ? ERR : pixel === U ? U : 255 & pixel;
};

export function a255(pixel) {
    return is_err_enum_b(pixel) || pixel < 0 ? ERR : pixel === U ? U : pixel >>> 24 & 255;
};

export function r1(pixel) {
    return is_err_enum_b(pixel) || pixel < 0 ? ERR : pixel === U ? U : (pixel >>> 16 & 255) / 255;
};

export function g1(pixel) {
    return is_err_enum_b(pixel) || pixel < 0 ? ERR : pixel === U ? U : (pixel >>> 8 & 255) / 255;
};

export function b1(pixel) {
    return is_err_enum_b(pixel) || pixel < 0 ? ERR : pixel === U ? U : (255 & pixel) / 255;
};

export function a1(pixel) {
    return is_err_enum_b(pixel) || pixel < 0 ? ERR : pixel === U ? U : (pixel >>> 24 & 255) / 255;
};

export function rgb255(r, g, b, a = 0) {
    let ri, gi, bi, ai;
    return is_err_enum_b(r) || is_err_enum_b(g) || is_err_enum_b(b) || is_err_enum_b(a) ? ERR : r === U || g === U || b === U || a === U ? U : (ri = r < 0 ? 0 : r > 255 ? 255 : r, gi = g < 0 ? 0 : g > 255 ? 255 : g, 
    bi = b < 0 ? 0 : b > 255 ? 255 : b, (ai = a < 0 ? 0 : a > 255 ? 255 : a) << 24 | ri << 16 | gi << 8 | bi);
};

export function rgb1(r, g, b, a = 0) {
    let ri, gi, bi, ai;
    return is_err_enum_b(r) || is_err_enum_b(g) || is_err_enum_b(b) || is_err_enum_b(a) ? ERR : r === U || g === U || b === U || a === U ? U : (r < 0 ? r = 0 : r > 1 && (r = 1), g < 0 ? g = 0 : g > 1 && (g = 1), 
    b < 0 ? b = 0 : b > 1 && (b = 1), a < 0 ? a = 0 : a > 1 && (a = 1), (ai = Math.round(255 * a)) << 24 | (ri = Math.round(255 * r)) << 16 | (gi = Math.round(255 * g)) << 8 | (bi = Math.round(255 * b)));
};

export function tree_count(targ) {
    let pathx, node;
    if (targ instanceof a_tree) node = targ, null != g_curr_block && node.eflags & NF_STATEFUL && add_node_dependency(node); else if (targ instanceof a_path) {
        if (pathx = path_to_pathx(targ), null != g_curr_block && pathx.basepath.base.eflags & NF_STATEFUL && add_pathx_dependency(pathx), null === pathx || !pathx.exists) return 0;
        node = pathx.lev[pathx.lastx].node;
    } else argument_err("expected path or tree");
    return null === node || null === node.children ? 0 : node.children.length;
};

export function tree_lo(targ, dependency = !0) {
    let pathx, node, sub;
    if (targ instanceof a_tree) node = targ, dependency && null != g_curr_block && node.eflags & NF_STATEFUL && add_node_dependency(node); else if (targ instanceof a_path) {
        if (pathx = path_to_pathx(targ), dependency && null != g_curr_block && pathx.basepath.base.eflags & NF_STATEFUL && add_pathx_dependency(pathx), null === pathx || !pathx.exists) return U;
        node = pathx.lev[pathx.lastx].node;
    } else argument_err("expected path or tree");
    return null === node || null === node.children || 0 === node.children.length ? U : is_numeric(sub = node.children[0].sub) == Y ? sub : U;
};

export function tree_hi(targ, dependency = !0) {
    let pathx, node, sub, ix;
    if (targ instanceof a_tree) node = targ, dependency && null != g_curr_block && node.eflags & NF_STATEFUL && add_node_dependency(node); else if (targ instanceof a_path) {
        if (pathx = path_to_pathx(targ), dependency && null != g_curr_block && pathx.basepath.base.eflags & NF_STATEFUL && add_pathx_dependency(pathx), null === pathx || !pathx.exists) return U;
        node = pathx.lev[pathx.lastx].node;
    } else argument_err("expected path or tree");
    if (null === node || null === node.children || 0 === node.children.length) return U;
    for (ix = node.children.length - 1; ix >= 0; ) {
        if (is_numeric(sub = node.children[ix].sub) == Y) return sub;
        ix -= 1;
    }
    return U;
};

export function tree_next_lo(targ, dependency = !0) {
    let ix = tree_lo(targ, dependency);
    return ix === U ? 1 : ix - 1;
};

export function tree_next_hi(targ, dependency = !0) {
    let ix = tree_hi(targ, dependency);
    return ix === U ? 1 : ix + 1;
};

export function tree_sibling_hi(curr) {
    let px = path_to_pathx(curr);
    if (null == px || !px.exists || 0 == px.lastx) return null;
    let parent = px.lev[px.lastx - 1].node, subx = px.lev[px.lastx].subx;
    if ((subx += 1) >= parent.children.length) return null;
    let result = curr.clone(), next_sub = parent.children[subx].sub;
    return result.key[result.key.length - 1] = next_sub, result;
};

export function tree_sibling_lo(curr) {
    let px = path_to_pathx(curr);
    if (null == px || !px.exists || 0 == px.lastx) return null;
    let parent = px.lev[px.lastx - 1].node, subx = px.lev[px.lastx].subx;
    if ((subx -= 1) < 0) return null;
    let result = curr.clone(), next_sub = parent.children[subx].sub;
    return result.key[result.key.length - 1] = next_sub, result;
};

export function tree_seqx(targ, targ_seq, options) {
    let pathx, node, sub, ix, n, curr, rev = !1;
    if (is_numeric(targ_seq) !== Y) return U;
    if (targ instanceof a_tree) node = targ; else if (targ instanceof a_path) {
        if (null === (pathx = path_to_pathx(targ)) || !pathx.exists) return U;
        node = pathx.lev[pathx.lastx].node;
    } else argument_err("expected path or tree");
    if (null === node || null === node.children || 0 === node.children.length) return U;
    for (let property in options) switch (property) {
      case "rev":
        rev = options.rev == Y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (n = node.children.length, targ_seq < 1 || targ_seq > n) return U;
    for (curr = 1, ix = 0; ix < n; ix++) if (is_numeric(sub = rev ? node.children[n - 1 - ix].sub : node.children[ix].sub) == Y) {
        if (curr == targ_seq) return sub;
        curr += 1;
    }
    return U;
};

let g_sortkeys;

function collate_indirect(a, b) {
    let result, val1, val2, key;
    for (key of g_sortkeys) if (0 !== (result = collate_open(val1 = get_generic(a, key), val2 = get_generic(b, key)))) return result;
    return 0;
}

export function tree_index(base, ...sortkeys) {
    let p, result = new a_tree(_M, "tree_index");
    g_sortkeys = sortkeys;
    let list = [], myloop = new a_loop({
        across: base
    });
    for (;myloop.next(); ) p = myloop.path.clone(), list.push(p);
    for (p of (list.sort(collate_indirect), list)) append_val(null, 0, p, adr(result));
    return result;
};

export function tree_find(node, targval) {
    let myloop = new a_loop({
        across: node
    });
    for (;myloop.next(); ) if (eq2(targval, myloop.val)) return myloop.index;
    return U;
};

export function last_subscript(t) {
    return null == t || 0 == t.key.length ? ERR : t.key[t.key.length - 1];
};

function escape_plain_for_html(old) {
    let cc, net = "", pos = 0, len = old.length;
    for (;pos < len; ) {
        switch (cc = old.charAt(pos), pos += 1, cc) {
          case "\r":
            pos < len && "\n" == old.charAt(pos) && (pos += 1), cc = "<br>";
            break;

          case "\n":
            cc = "<br>";
            break;

          case "<":
            cc = "&lt;";
            break;

          case ">":
            cc = "&gt;";
            break;

          case "&":
            cc = "&amp;";
            break;

          case "'":
            cc = "&apos;";
        }
        net += cc;
    }
    return net;
}

export function draw_str(container, ss, options) {
    let avail_h, avail_v, leftover, mytxt, net_ss, trailing, backcolor = U, bold = !1, border = 0, bordercolor = BLACK, box = null, boxarg = null, color = BLACK, corner = 0, dest_x = U, dest_y = U, embed = !1, font = null, html = !1, indent = 0, is_input = !1, is_selectable = !1, italic = !1, just = CENTER, leading = U, metrics = null, opacity = 1, shadowx = 0, shadowy = 0, shadowr = 0, shadowc = BLACK, shrink = !0, shrink_min = 6, size = pt_to_dots(container, 10), strike = !1, uhide = !1, und = !1, vert = .5, wrap = !1;
    function set_text(myss) {
        var final_ss;
        html ? (wrap || (mytxt.style.whiteSpace = "nowrap"), final_ss = myss) : (mytxt.style.whiteSpace = wrap ? "pre-wrap" : "pre", final_ss = escape_plain_for_html(myss)), mytxt.innerHTML = final_ss;
    }
    null != ss && "string" != typeof ss && (ss = str.to_str(ss));
    for (let property in options) switch (property) {
      case "backcolor":
        backcolor = options.backcolor;
        break;

      case "bold":
        bold = options.bold === Y;
        break;

      case "border":
        border = options.border;
        break;

      case "border_color":
        bordercolor = options.border_color;
        break;

      case "box":
        boxarg = options.box;
        break;

      case "color":
        color = options.color;
        break;

      case "input":
        is_input = options.input === Y;
        break;

      case "fill":
        backcolor = options.fill;
        break;

      case "font":
        font = options.font;
        break;

      case "html":
        html = options.html === Y;
        break;

      case "indent":
        indent = options.indent;
        break;

      case "italic":
        italic = options.italic === Y;
        break;

      case "just":
        just = options.just;
        break;

      case "leading":
        leading = options.leading;
        break;

      case "metrics":
        metrics = options.metrics;
        break;

      case "opacity":
        opacity = clamp(numeric_arg(options.opacity), 0, 1);
        break;

      case "corner":
        corner = options.corner;
        break;

      case "sel":
        is_selectable = options.sel === Y;
        break;

      case "shadowx":
        shadowx = options.shadowx;
        break;

      case "shadowy":
        shadowy = options.shadowy;
        break;

      case "shadowr":
        shadowr = options.shadowr;
        break;

      case "shadowc":
        shadowc = options.shadowc;
        break;

      case "shrink":
        shrink = options.shrink === Y;
        break;

      case "shrink_min":
        shrink_min = options.shrink_min;
        break;

      case "size":
        size = options.size;
        break;

      case "strike":
        strike = options.strike === Y;
        break;

      case "hide_u":
        uhide = options.hide_u === Y;
        break;

      case "und":
        und = options.und === Y;
        break;

      case "vert":
        (vert = options.vert) < 0 && (vert = 0), vert > 1 && (vert = 1);
        break;

      case "wrap":
        wrap = options.wrap === Y;
        break;

      case "xy":
        dest_x = getn(options.xy, F_x), dest_y = getn(options.xy, F_y);
        break;

      case "x":
        dest_x = options.x;
        break;

      case "y":
        dest_y = options.y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (dest_x != U) {
        if (dest_y == U) return void (CHECKS && argument_err("x was specified, but not y"));
    } else {
        if (dest_y != U) return void (CHECKS && argument_err("y was specified, but not x"));
        if (null == boxarg) box = container.bounds; else if (boxarg instanceof a_tree || boxarg instanceof a_path) box = tree_to_rect(boxarg); else {
            if (!(boxarg instanceof Rectangle)) return void (CHECKS && argument_err("bad box"));
            box = boxarg;
        }
    }
    if (size <= 1) {
        if (null == box) return;
        size = box.height * size;
    }
    if (container.is_measuring) {
        if (null != box && box.width != U && box.height != U) return container.max_h = Math.max(container.max_h, box.left + box.width), void (container.max_v = Math.max(container.max_v, box.top + box.height));
        shrink = !1, just = LEFT, vert = 0, backcolor = U, border = 0;
    }
    if (leading == U ? leading = 1.16 * size : leading < 2 && (leading *= size), net_ss = ss === U_STR ? uhide ? "" : "U" : null == ss || "" == ss ? " " : ss, null == font && (font = ""), "$" === font.charAt(0) && !0, 
    null == box ? (avail_h = GIANT_WIDTH, avail_v = GIANT_WIDTH, backcolor = U, border = 0, shrink = !1) : (avail_h = box.width == U ? GIANT_WIDTH : just == CENTER ? box.width - 2 * indent : box.width - indent, 
    avail_v = box.height == U ? GIANT_WIDTH : box.height, backcolor !== U && draw_rect(container, {
        box: box,
        color: backcolor,
        corner: corner
    }), border > 0 && draw_rect(container, {
        box: box,
        stroke: bordercolor,
        width: border,
        corner: corner,
        pos: 1
    })), avail_h <= 10 || "" == net_ss || " " == net_ss) return void (null !== metrics && (setv(_M, 0, metrics, F_x, 0), setv(_M, 0, metrics, F_y, 0)));
    if (null != container.can) {
        let ctx = container.ctx;
        switch (ctx.save(), ctx.globalAlpha = opacity, "" === font || "_sans" === font ? font = "sans-serif" : "_serif" === font ? font = "serif" : "_typewriter" === font && (font = "monospace"), ctx.font = size.toFixed(1) + "px " + font, 
        ctx.fillStyle = js_color_to_str(color), 0 != shadowr && (ctx.shadowColor = js_color_to_str(shadowc), ctx.shadowOffsetX = shadowx, ctx.shadowOffsetY = shadowy, ctx.shadowBlur = shadowr), just) {
          case LEFT:
          case FLUSH:
            ctx.textAlign = "left", null != box && (dest_x = box.left);
            break;

          case CENTER:
            ctx.textAlign = "center", null != box && (dest_x = box.left + box.width / 2);
            break;

          case RIGHT:
            ctx.textAlign = "right", null != box && (dest_x = box.left + box.width);
            break;

          default:
            CHECKS && argument_err("bad just"), ctx.textAlign = "left";
        }
        if (ctx.textBaseline = "top", null != box && (dest_y = box.top), null !== metrics) {
            var tm = ctx.measureText(net_ss);
            setv(_M, 0, metrics, F_x, tm.width), setv(_M, 0, metrics, F_y, 1.3 * size);
        } else ctx.fillText(net_ss, dest_x, dest_y);
        return void ctx.restore();
    }
    mytxt = document.createElement("div"), is_selectable || (mytxt.style.webkitUserSelect = "none", mytxt.style.userSelect = "none"), mytxt.style.position = "absolute", mytxt.style.visibility = "hidden", 
    shadowr > 0 && (mytxt.style.textShadow = `${shadowx}px ${shadowy}px ${shadowr}px ${js_color_to_str(shadowc)}`), null == box ? (mytxt.style.left = dest_x.toFixed(1) + "px", mytxt.style.top = dest_y.toFixed(1) + "px") : wrap && (mytxt.style.width = avail_h.toFixed(1) + "px"), 
    set_attrib(mytxt, just, opacity, font, bold, italic, color, und, strike, size, leading), set_text(net_ss), container.appendChild(mytxt);
    let rbox = mytxt.getBoundingClientRect();
    TRACE_TEXT && logg(str.conv(" size={}x{}, avail={}x{}", rbox.width, rbox.height, avail_h, avail_v)), trailing = 0, leading > size && (trailing = leading - size);
    let renderedv = rbox.height - trailing;
    if (shrink && null != box && (rbox.width > avail_h || renderedv > avail_v)) {
        let ratio1 = avail_h / rbox.width, ratio2 = avail_v / renderedv, ratio3 = shrink_min / size, net_ratio = Math.max(ratio3, .97 * Math.min(ratio1, ratio2));
        size *= net_ratio, leading *= net_ratio, mytxt.style.fontSize = size.toFixed(1) + "px", mytxt.style.lineHeight = leading.toFixed(0) + "px", rbox = mytxt.getBoundingClientRect(), trailing = 0, leading > size && (trailing = leading - size), 
        renderedv = rbox.height - trailing;
    }
    if (rbox.width > avail_h + 5 && net_ss.length > 4) {
        var targlen = round_down(net_ss.length * avail_h / rbox.width) - 5;
        set_text(net_ss = net_ss.substr(0, targlen) + "..."), rbox = mytxt.getBoundingClientRect();
    }
    if (container.is_measuring) return container.max_h = Math.max(rbox.width, container.max_h), container.max_v = Math.max(renderedv, container.max_v), void mytxt.parentNode.removeChild(mytxt);
    if (null !== metrics) return setv(_M, 0, metrics, F_x, rbox.width), setv(_M, 0, metrics, F_y, renderedv), void mytxt.parentNode.removeChild(mytxt);
    if (null == box) switch (just) {
      case LEFT:
      case FLUSH:
        dest_x += indent;
        break;

      case RIGHT:
        dest_x = dest_x - rbox.width - indent;
        break;

      default:
        dest_x -= Math.round((rbox.width + 1) / 2);
    } else {
        switch (just) {
          case LEFT:
          case FLUSH:
            dest_x = box.left + indent;
            break;

          case RIGHT:
            dest_x = box.left + box.width - rbox.width - indent;
            break;

          default:
            dest_x = box.left + Math.round((box.width - rbox.width + 1) / 2);
        }
        0 == vert ? dest_y = box.top : (leftover = Math.max(0, box.height - renderedv) - .15 * size, dest_y = box.top + Math.round(leftover * vert), TRACE_TEXT && logg(str.conv(" vert={n,2}, boxv={n1}, renderedv={n1}, leftover={n1}", vert, box.height, renderedv, leftover)));
    }
    mytxt.style.left = dest_x.toFixed(0) + "px", mytxt.style.top = dest_y.toFixed(0) + "px", mytxt.style.visibility = "";
};

export var g_focus_elem = null;

export var g_focus_field = null;

var g_focus_id = 1e3;

function on_input_focus(evt) {
    var elem = evt.target, field = elem.my_field;
    TRACE_INPUT && logg(`INPUT: on_input_focus, label=${gets(field, F_in_label)}`), g_focus_elem = elem, g_focus_field = field.clone();
}

function on_input_blur(evt) {
    var elem = evt.target, field = elem.my_field;
    TRACE_INPUT && logg(`INPUT: on_input_blur, label=${gets(field, F_in_label)}, val=${elem.value}`), g_focus_elem = null, g_focus_field = null;
}

function on_input_change(evt) {
    var elem = evt.target, field = elem.my_field;
    TRACE_INPUT && logg(str.conv("INPUT: on_input_change, newval=[{}]", elem.value)), add_major_step(EV_INPUT), setv(_M, 1, field, F_in_value, elem.value), validate_input(field), TRACE_INPUT && logg(str.conv(" selStart={}, selEnd={}", elem.selectionStart, elem.selectionEnd));
    var vreadyfunc = get_func(field, F_in_form_ready);
    null != vreadyfunc && vreadyfunc.code();
    var warning = document.getElementById(elem.my_warning_id);
    if (null != warning) {
        var warnss = calc_warnss(elem, field);
        warning.innerText = warnss, TRACE_INPUT && logg(`INPUT: warning text updated to [${warnss}]`);
    }
}

export function validate_input(field) {
    var val, result = Y;
    null == (val = gets(field, F_in_value)) && (val = ""), TRACE_INPUT && logg(`validateinput, label=${gets(field, F_in_label)}, val=[${val}]`);
    var minlen = getn(field, F_in_minlen), maxlen = getn(field, F_in_maxlen), is_required = getn(field, F_in_required) == Y;
    if (0 == val.length) is_required ? (result = N, TRACE_INPUT && logg("  failed because empty, but required")) : (result = Y, TRACE_INPUT && logg("  okay because empty, not required")); else if (minlen != U && val.length < minlen) result = N, 
    TRACE_INPUT && logg("  failed because too short"); else if (maxlen != U && val.length > maxlen) result = N, TRACE_INPUT && logg("  failed because too long"); else {
        var vpatt = get_object(field, F_in_pattern);
        null != vpatt && (vpatt.lastIndex = 0, vpatt.test(val) || (result = N, TRACE_INPUT && logg("  failed because pattern match failed")));
        var vfunc = get_func(field, F_in_validator);
        if (null != vfunc) {
            var validf = vfunc.code(field);
            validf != Y && (result = N, TRACE_INPUT && logg(`  failed because custom validator failed, val=${validf}`));
        }
    }
    return setv(_M, 0, field, F_in_ok, result), TRACE_INPUT && logg(str.conv("  ..end validate, ok={}", result)), result;
};

function calc_warnss(elem, field) {
    var ok_flag = getn(field, F_in_ok);
    TRACE_DINPUT && logg(str.conv("  calc_warnss, ok_flag={}", ok_flag));
    var result = "";
    return elem.required && 0 == elem.value.trim().length ? elem.my_show_star ? result = FIELD_EMPTY_SYMBOL : !0 : ok_flag == N && (result = FIELD_BAD_SYMBOL), result;
}

export function draw_input(container, boxarg, field, options) {
    let start_ss, ss, backcolor = U, bold = !1, border = 2, bordercolor = BLACK, borderempty = TOMATO, box = null, color = BLACK, corner = 0, font = null, hint = "", indent = 0, italic = !1, just = LEFT, leading = U, maxlen = 80, multiline = !1, opacity = 1, show_star = !1, show_errs = !0, size = pt_to_dots(container, 10);
    if (boxarg instanceof a_tree || boxarg instanceof a_path) box = tree_to_rect(boxarg); else {
        if (!(boxarg instanceof Rectangle)) return void argument_err("bad box");
        box = boxarg;
    }
    if (container.is_measuring) return container.max_h = Math.max(container.max_h, box.left + box.width), void (container.max_v = Math.max(container.max_v, box.top + box.height));
    for (let property in options) switch (property) {
      case "bold":
        bold = options.bold === Y;
        break;

      case "border":
        border = options.border;
        break;

      case "border_color":
        bordercolor = options.border_color;
        break;

      case "border_empty":
        borderempty = options.border_empty;
        break;

      case "color":
        color = options.color;
        break;

      case "corner":
        corner = options.corner;
        break;

      case "fill":
        backcolor = options.fill;
        break;

      case "font":
        font = options.font;
        break;

      case "hint":
        hint = options.hint;
        break;

      case "indent":
        indent = options.indent;
        break;

      case "italic":
        italic = options.italic === Y;
        break;

      case "just":
        just = options.just;
        break;

      case "leading":
        leading = options.leading;
        break;

      case "multiline":
        multiline = options.multiline == Y;
        break;

      case "opacity":
        opacity = clamp(numeric_arg(options.opacity), 0, 1);
        break;

      case "show_errs":
        show_errs = options.show_errs === Y;
        break;

      case "show_star":
        show_star = options.show_star === Y;
        break;

      case "size":
        size = options.size;
        break;

      default:
        argument_err("bad option: " + property);
    }
    show_star && (show_errs = !0), null == font && (font = "");
    var elem = document.createElement("input");
    switch (elem.id = gets(field, F_in_label), TRACE_DINPUT && logg(`draw_input, label=${elem.id}`), elem.spellcheck = getn(field, F_in_spellcheck) == Y, getn(field, F_in_kind)) {
      case IN_COLOR:
        elem.type = "color";
        break;

      case IN_DATE:
        elem.type = "date";
        break;

      case IN_DATETIME:
        elem.type = "datetime";
        break;

      case IN_EMAIL:
        elem.type = "email";
        break;

      case IN_FILE:
        elem.type = "file";
        break;

      case IN_MONTH:
        elem.type = "month";
        break;

      case IN_NUMBER:
        elem.type = "number";
        break;

      case IN_PASSWORD:
        elem.type = "password";
        break;

      case IN_RANGE:
        elem.type = "range";
        break;

      case IN_TEL:
        elem.type = "tel";
        break;

      case IN_TIME:
        elem.type = "time";
        break;

      case IN_URL:
        elem.type = "url";
        break;

      case IN_WEEK:
        elem.type = "week";
        break;

      default:
        elem.type = "text";
    }
    if (elem.oninput = on_input_change, elem.onblur = on_input_blur, elem.onfocus = on_input_focus, elem.my_field = field, elem.my_show_star = show_star, null == (start_ss = leaf_getv(path_to_pathx(adr(field, F_in_value)), EF_VAL_IS_STR, !1)) && (start_ss = ""), 
    elem.value = start_ss, size < 1 && (size = box.height * size), leading == U ? leading = 1.16 * size : leading < 2 && (leading *= size), elem.style.position = "absolute", elem.style.left = box.left.toFixed(1) + "px", 
    elem.style.top = box.top.toFixed(1) + "px", elem.style.width = box.width.toFixed(1) + "px", elem.style.height = box.height.toFixed(1) + "px", elem.style.border = `${border.toFixed(1)}px solid ${js_color_to_str(bordercolor)}`, 
    TRACE_DINPUT && logg(`  input border, color=${js_color_to_str(bordercolor)}`), backcolor != U && (elem.style.backgroundColor = js_color_to_str(backcolor)), elem.style.boxSizing = "border-box", (maxlen = getn(field, F_in_maxlen)) == U && (maxlen = 80), 
    elem.maxLength = maxlen, null != (ss = gets(field, F_in_hint)) && (elem.placeholder = ss), getn(field, F_in_required) == Y && (elem.required = !0), elem.style.textIndent = indent.toFixed(0) + "px", set_attrib(elem, just, opacity, font, bold, italic, color, !1, !1, size, leading), 
    container.appendChild(elem), show_errs) {
        let warnjust;
        var warn = document.createElement("div");
        warn.id = "warn_" + String(g_focus_id++), elem.my_warning_id = warn.id, container.appendChild(warn), warn.style.userSelect = "none", warn.style.webkitUserSelect = "none", warn.style.cursor = "", warn.style.position = "absolute";
        var wbox_l, hindent = .12 * box.height, wbox_width = (box.height, box.height, box.height);
        just == RIGHT ? (wbox_l = box.left + hindent, warnjust = LEFT) : (wbox_l = box.left + box.width - hindent - wbox_width, warnjust = RIGHT), warn.style.left = wbox_l.toFixed(1) + "px", warn.style.top = (box.top + 2).toFixed(1) + "px", 
        warn.style.width = wbox_width.toFixed(1) + "px", warn.style.height = (box.height - 4).toFixed(1) + "px", warn.style.verticalAlign = "middle", warn.style.pointerEvents = "none", set_attrib(warn, warnjust, 1, "", !1, !1, FIELD_EMPTY_COLOR, !1, !1, .6 * box.height, U), 
        warn.innerText = calc_warnss(elem, field);
    }
};

function set_attrib(mytxt, just, opacity, font, bold, italic, color, und, strike, size, leading) {
    let align_ss;
    switch (just) {
      case LEFT:
        align_ss = "left";
        break;

      case CENTER:
        align_ss = "center";
        break;

      case RIGHT:
        align_ss = "right";
        break;

      case FLUSH:
        align_ss = "justify";
        break;

      default:
        CHECKS && argument_err("bad just"), align_ss = "left";
    }
    mytxt.style.textAlign = align_ss, 1 != opacity && (mytxt.style.opacity = opacity.toFixed(3));
    var colon = font.indexOf(":");
    "" === font || "_sans" === font ? font = "sans-serif" : "_serif" === font ? font = "serif" : "_typewriter" === font && (font = "monospace"), colon > 0 && (mytxt.style.fontWeight = font.substring(colon + 1), 
    font = font.substring(0, colon)), mytxt.style.fontFamily = font, bold && (mytxt.style.fontWeight = "bold"), italic && (mytxt.style.fontStyle = "italic"), mytxt.style.color = js_color_to_str(color);
    let decoration = "";
    und && (decoration += " underline"), strike && (decoration += " line-through"), "" != decoration && (mytxt.style.textDecoration = decoration), mytxt.style.fontSize = size.toFixed(1) + "px", leading !== U && (mytxt.style.lineHeight = leading.toFixed(1) + "px");
}

export function draw_image(container, image, options) {
    let horz_ratio, horz_size, net_box, net_boxR, vert_ratio, vert_size, angle = null, blendmode = U, boxarg = null, box = null, corner = 0, dest_x = U, dest_y = U, shrink = !0, grow = !0, horz = .5, indent = 0, opacity = 1, origin_x = 0, origin_y = 0, pin = U, preserve_aspect = !0, vert = .5, idss = null;
    if (null === image) return TRACE_BITMAP && logg("skipping draw_image of null picture"), null;
    TRACE_IMG && logg(`draw_image, src=${image.sysobj.url.substr(0, 70)}`);
    for (let property in options) switch (property) {
      case "angle":
        !CHECKS || options.angle instanceof a_meas || argument_err("angle argument must be a meas"), 0 !== options.angle && (angle = options.angle);
        break;

      case "aspect":
        preserve_aspect = options.aspect === Y;
        break;

      case "blend":
        blendmode = options.blend;
        break;

      case "box":
        boxarg = options.box;
        break;

      case "corner":
        corner = options.corner;
        break;

      case "grow":
        grow = options.grow === Y;
        break;

      case "horz":
        horz = options.horz, CHECKS && (horz < 0 || horz > 1) && argument_err("bad horz");
        break;

      case "idss":
        idss = options.idss;
        break;

      case "indent":
        indent = options.indent;
        break;

      case "opacity":
        if (0 == (opacity = clamp(numeric_arg(options.opacity), 0, 1))) return TRACE_IMG && logg("draw_image, ignoring transparent image"), null;
        break;

      case "origin":
        options.origin instanceof a_tree || internal_err("bad arg"), origin_x = getn(options.origin, F_x), origin_y = getn(options.origin, F_y);
        break;

      case "originx":
        origin_x = options.originx;
        break;

      case "originy":
        origin_y = options.originy;
        break;

      case "shrink":
        shrink = options.shrink === Y;
        break;

      case "vert":
        vert = options.vert, CHECKS && (vert < 0 || vert > 1) && argument_err("bad horz");
        break;

      case "xy":
        options.xy instanceof a_tree || internal_err("bad arg"), dest_x = getn(options.xy, F_x), dest_y = getn(options.xy, F_y);
        break;

      case "x":
        dest_x = options.x;
        break;

      case "y":
        dest_y = options.y;
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (dest_x != U) {
        if (dest_y == U) return void (CHECKS && argument_err("x was specified, but not y"));
    } else {
        if (dest_y != U) return void (CHECKS && argument_err("y was specified, but not x"));
        if (null == boxarg) box = container.bounds; else if (boxarg instanceof a_tree || boxarg instanceof a_path) box = tree_to_rect(boxarg); else {
            if (!(boxarg instanceof Rectangle)) return void (CHECKS && argument_err("bad box"));
            box = boxarg;
        }
    }
    if (image == ERR_IMAGE) {
        if (TRACE_IMG && logg("draw_image, ERR"), null == box) return null;
        draw_rect(container, {
            box: box,
            fill: PINK,
            corner: 10
        });
        return void draw_str(container, "ERR", {
            box: box,
            size: 40
        });
    }
    let tag = image.sysobj.cloneNode(!0);
    return tag.url = image.sysobj.url, tag.style.position = "absolute", tag.style.overflow = "visible", tag.style.userDrag = "none", null != idss && (tag.id = idss), 0 != corner && (tag.style.borderRadius = `${corner.toFixed(1)}px`), 
    1 != opacity && (tag.style.opacity = opacity.toFixed(3)), void 0 == tag.naturalWidth || 0 == tag.naturalWidth ? (tag.src = tag.url, TRACE_IMG && logg(`image not preloaded, src=${tag.src}`), tag.onload = function() {
        TRACE_IMG && logg(`...in callback_on_load of ${this.src.substr(0, 70)}, natural=${this.naturalWidth} x ${this.naturalHeight}`);
        this.onload = null, this.onerror = null, draw_image2(this);
    }, tag.onerror = function() {
        TRACE_IMG && logg(`...in callback_on_err of ${this.src.substr(0, 70)}`);
        return this.onload = null, this.onerror = null, void draw_missing_image(container, box, this.src);
    }, tag.style.visibility = "hidden") : (TRACE_IMG && logg(`image ready, size=${tag.naturalWidth}`), draw_image2(tag)), void (null == container.can && container.appendChild(tag));
    function draw_image2(mytag) {
        let raw_h = mytag.naturalWidth, raw_v = mytag.naturalHeight;
        if (null !== box) net_box = solve_rect({
            basis: box,
            pin: 5,
            inset: indent
        }), net_boxR = tree_to_rect(net_box), TRACE_IMG && logg(` draw_image2, box=[${net_boxR.left}, ${net_boxR.top}], ${net_boxR.width} x ${net_boxR.height}, raw=${raw_h} x ${raw_v}`), horz_ratio = net_boxR.width / raw_h, 
        vert_ratio = net_boxR.height / raw_v, preserve_aspect && (horz_ratio = min(horz_ratio, vert_ratio), vert_ratio = horz_ratio), shrink || (horz_ratio = max(horz_ratio, 1), vert_ratio = max(vert_ratio, 1)), 
        grow || (horz_ratio = min(horz_ratio, 1), vert_ratio = min(vert_ratio, 1)), TRACE_IMG && logg(`  net ratios=${horz_ratio.toFixed(3)}, ${vert_ratio.toFixed(3)}`), horz_size = horz_ratio * raw_h, vert_size = vert_ratio * raw_v, 
        dest_x = net_boxR.left + (net_boxR.width - horz_size) * horz, dest_y = net_boxR.top + (net_boxR.height - vert_size) * vert, mytag.style.left = `${dest_x.toFixed(1)}px`, mytag.style.top = `${dest_y.toFixed(1)}px`, 
        mytag.style.width = `${horz_size.toFixed(1)}px`, mytag.style.height = `${vert_size.toFixed(1)}px`, null != container.can && container.ctx.drawImage(tag, dest_x, dest_y, horz_size, vert_size); else if (null != container.can) {
            var ctx = container.ctx;
            TRACE_IMG && logg(` draw_image2 canv nobox, ox=${origin_x}, oy=${origin_y}, size=${raw_h},${raw_v}`), ctx.save(), ctx.translate(dest_x, dest_y), null != angle && ctx.rotate(angle.mag), ctx.translate(-origin_x, -origin_y), 
            ctx.drawImage(tag, 0, 0), ctx.restore();
        } else {
            let transform_ss;
            if (net_boxR = new Rectangle(dest_x, dest_y, raw_h, raw_v), TRACE_IMG && logg(` draw_image2 nobox, dest=[${net_boxR.left}, ${net_boxR.top}], ${net_boxR.width} x ${net_boxR.height}`), mytag.style.transformOrigin = "0 0", 
            null == angle) transform_ss = `translate(${(dest_x - origin_x).toFixed(1)}px,${(dest_y - origin_y).toFixed(1)}px)`; else {
                if (pin != U) {
                    switch ((pin - 1) % 3) {
                      case 0:
                        origin_x = 0;
                        break;

                      case 1:
                        origin_x = raw_h / 2;
                        break;

                      case 2:
                        origin_x = raw_h;
                        break;

                      default:
                        argument_err("bad pin");
                    }
                    switch ((pin - 1) / 3 >> 0) {
                      case 0:
                        origin_y = 0;
                        break;

                      case 1:
                        origin_y = raw_v / 2;
                        break;

                      case 2:
                        origin_y = raw_v;
                        break;

                      default:
                        argument_err("bad pin");
                    }
                }
                let cose = Math.cos(angle.mag), sine = Math.sin(angle.mag), onecose = 1 - cose, cos_ss = cose.toFixed(5), sin_ss = sine.toFixed(5), dy = -sine * origin_x + onecose * origin_y + dest_y - origin_y;
                transform_ss = `matrix(${cos_ss},${sin_ss},${-sin_ss},${cos_ss},${(onecose * origin_x + sine * origin_y + dest_x - origin_x).toFixed(1)},${dy.toFixed(1)})`;
            }
            mytag.style.transform = transform_ss;
        }
        mytag.style.visibility = "";
    }
};

function draw_missing_image(container, box, url) {
    if (null != box) {
        var filename = str.filepath_get_name(url);
        draw_rect(container, {
            box: box,
            color: PINK
        }), draw_str(container, `MISSING:\n${filename}`, {
            box: box,
            size: 12
        });
    }
}

export function find_font(list) {
    return list;
};

function calc_middle_of_stroke(box, stroke_width, stroke_pos) {
    var delta = stroke_width / 4;
    return solve_rectR({
        basis: box,
        inset: interpolate(stroke_pos, 0, 1, delta, -delta)
    });
}

function calc_scaled_radius(base_radius, stroke_width, stroke_pos) {
    if (0 === base_radius) return 0;
    let half = stroke_width / 2, net_radius = interpolate(stroke_pos, 0, 1, base_radius - half, base_radius + half);
    return Math.max(0, net_radius);
}

function svg_define_pattern(tile, wrapper) {
    let defs = document.createElementNS(SVG_NS, "defs");
    wrapper.appendChild(defs);
    let known_width = tile.tile_width, known_height = tile.tile_height;
    0 != known_width && 0 != known_height || argument_err("pattern images have to specify their size at compile time");
    let pattern = document.createElementNS(SVG_NS, "pattern"), myid = `pat${++g_svg_id}`;
    pattern.setAttribute("id", myid), pattern.setAttribute("patternUnits", "userSpaceOnUse"), pattern.setAttribute("width", known_width.toFixed(0)), pattern.setAttribute("height", known_height.toFixed(0)), 
    defs.appendChild(pattern);
    let image = document.createElementNS(SVG_NS, "image");
    return image.setAttributeNS(XLINK_NS, "xlink:href", tile.sysobj.url), image.setAttribute("width", known_width.toFixed(0)), image.setAttribute("height", known_height.toFixed(0)), pattern.appendChild(image), 
    myid;
}

function svg_define_gradient(gradpath, wrapper) {
    let defs = document.createElementNS(SVG_NS, "defs");
    wrapper.appendChild(defs);
    let gradient, node = gradpath;
    switch (getn(node, F_grad_shape)) {
      case LINEAR_GRADIENT:
        gradient = document.createElementNS(SVG_NS, "linearGradient");
        var angle_deg = getn(node, F_grad_angle);
        gradient.setAttribute("x1", "0"), gradient.setAttribute("y1", "0"), gradient.setAttribute("x2", "1"), gradient.setAttribute("y2", "0"), gradient.setAttribute("gradientTransform", `rotate(${angle_deg} 0.5 0.5)`);
        break;

      case RADIAL_GRADIENT:
        gradient = document.createElementNS(SVG_NS, "radialGradient");
        var cx = getn(node, F_grad_centerx);
        gradient.setAttribute("cx", cx.toFixed(3));
        var cy = getn(node, F_grad_centery);
        gradient.setAttribute("cy", cy.toFixed(3));
        var inner_radius = getn(node, F_grad_radius_inner);
        inner_radius != U && gradient.setAttribute("fr", inner_radius.toFixed(3));
        var outer_radius = getn(node, F_grad_radius_outer);
        outer_radius != U && gradient.setAttribute("r", outer_radius.toFixed(3));
        break;

      default:
        argument_err("bad gradient shape");
    }
    defs.appendChild(gradient);
    var myid = `grd${++g_svg_id}`;
    gradient.setAttribute("id", myid);
    let iter = new a_loop({
        across: adr(node, F_grad_stops)
    });
    for (;iter.next(); ) {
        let stop_pos = getn(iter.path, F_stop_pos), stop_color = getn(iter.path, F_stop_color);
        stop_color !== U && stop_pos !== U || argument_err("bad color");
        let stop_opacity = getn(iter.path, F_opacity);
        stop_opacity === U && (stop_opacity = 1);
        let stop = document.createElementNS(SVG_NS, "stop");
        stop.setAttribute("offset", (stop_pos / 100).toFixed(3)), stop.setAttribute("stop-color", js_color_to_str(stop_color)), 1 != stop_opacity && stop.setAttribute("stop-opacity", stop_opacity.toFixed(3)), 
        gradient.appendChild(stop);
    }
    return myid;
}

export function clear_rect(container, boxarg) {
    let box;
    if (boxarg instanceof a_tree || boxarg instanceof a_path ? box = tree_to_rect(boxarg) : boxarg instanceof Rectangle ? box = boxarg : argument_err("bad box"), null != container.can) {
        container.ctx.clearRect(box.left, box.top, box.width, box.height);
    } else argument_err("clear_rect not inside canvas context");
};

export function draw_rect(container, options) {
    let filling, blendmode = U, boxarg = null, box = null, corner_bl = 0, corner_br = 0, corner_tl = 0, corner_tr = 0, fill = U, grad = null, matrix = null, opacity = 1, pos = .5, strokecolor = BLACK, strokewidth = 0, tile = null;
    for (let property in options) switch (property) {
      case "box":
        (boxarg = options.box) instanceof a_tree || boxarg instanceof a_path ? box = tree_to_rect(boxarg) : boxarg instanceof Rectangle ? box = boxarg : argument_err("bad box");
        break;

      case "color":
        strokecolor = options.color;
        break;

      case "corner":
        corner_tl = clamp(numeric_arg(options.corner), 0, 9999), corner_tr = corner_tl, corner_bl = corner_tl, corner_br = corner_tl;
        break;

      case "corner_tl":
        corner_tl = clamp(numeric_arg(options.corner_tl), 0, 9999);
        break;

      case "corner_br":
        corner_br = clamp(numeric_arg(options.corner_br), 0, 9999);
        break;

      case "corner_tr":
        corner_tr = clamp(numeric_arg(options.corner_tr), 0, 9999);
        break;

      case "corner_bl":
        corner_bl = clamp(numeric_arg(options.corner_bl), 0, 9999);
        break;

      case "fill":
        fill = options.fill;
        break;

      case "grad":
        grad = options.grad;
        break;

      case "matrix":
        matrix = options.matrix;
        break;

      case "mode":
        blendmode = options.mode;
        break;

      case "opacity":
        opacity = clamp(numeric_arg(options.opacity), 0, 1);
        break;

      case "pos":
        is_numeric(options.pos) !== Y && argument_err("bad pos"), pos = clamp(options.pos, 0, 1);
        break;

      case "thick":
        is_numeric(options.thick) !== Y && argument_err("bad thick"), strokewidth = options.thick;
        break;

      case "tile":
        tile = options.tile;
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (null == boxarg && (box = container.bounds), box.width < 1 || box.height < 1) return;
    if (!(filling = null !== grad || null !== tile || fill !== U) && strokewidth <= 0) return;
    let is_uneven = corner_tl != corner_tr || corner_tr != corner_bl || corner_bl != corner_br;
    if (.5 != pos && (corner_tl >= .1 && (corner_tl *= interpolate(pos, 0, 1, 1 - strokewidth / corner_tl, 1 + strokewidth / corner_tl)), corner_tr >= .1 && (corner_tr *= interpolate(pos, 0, 1, 1 - strokewidth / corner_tr, 1 + strokewidth / corner_tr)), 
    corner_bl >= .1 && (corner_bl *= interpolate(pos, 0, 1, 1 - strokewidth / corner_bl, 1 + strokewidth / corner_bl)), corner_br >= .1 && (corner_br *= interpolate(pos, 0, 1, 1 - strokewidth / corner_br, 1 + strokewidth / corner_br))), 
    null != container.can) {
        let ctx = container.ctx;
        return ctx.save(), ctx.globalAlpha = opacity, filling && (canv_rr_path(ctx, box, 0), ctx.fillStyle = js_fill(fill, grad, tile), ctx.fill()), strokewidth > 0 && (canv_rr_path(ctx, box, (pos - .5) * strokewidth * .5), 
        ctx.lineWidth = strokewidth, ctx.strokeStyle = js_color_to_str(strokecolor), ctx.stroke()), void ctx.restore();
    }
    let shape, wrapper = js_svg_wrapper(container, 1);
    function create_roundrect(mybox) {
        let myshape, ss;
        var left, top, h, v;
        return is_uneven ? (myshape = document.createElementNS(SVG_NS, "path")).setAttribute("d", (left = mybox.left, top = mybox.top, h = mybox.width, v = mybox.height, "M " + left.toFixed(1) + "," + (top + corner_tl).toFixed(1) + " A " + corner_tl.toFixed(1) + " " + corner_tl.toFixed(1) + " 0 0 1 " + (left + corner_tl).toFixed(1) + " " + top.toFixed(1) + " H " + (left + h - corner_tr).toFixed(1) + " A " + corner_tr.toFixed(1) + " " + corner_tr.toFixed(1) + " 0 0 1 " + (left + h).toFixed(1) + " " + (top + corner_tr).toFixed(1) + " V " + (top + v - corner_br).toFixed(1) + " A " + corner_br.toFixed(1) + " " + corner_br.toFixed(1) + " 0 0 1 " + (left + h - corner_br).toFixed(1) + " " + (top + v).toFixed(1) + " H " + (left + corner_bl).toFixed(1) + " A " + corner_bl.toFixed(1) + " " + corner_bl + " 0 0 1 " + left.toFixed(1) + " " + (top + v - corner_bl).toFixed(1) + " Z")) : ((myshape = document.createElementNS(SVG_NS, "rect")).setAttribute("x", mybox.left.toFixed(1)), 
        myshape.setAttribute("y", mybox.top.toFixed(1)), myshape.setAttribute("width", mybox.width.toFixed(1)), myshape.setAttribute("height", mybox.height.toFixed(1)), 0 != corner_tl && (ss = corner_tl.toFixed(1), 
        myshape.setAttribute("rx", ss), myshape.setAttribute("ry", ss))), myshape;
    }
    let group, pass1 = filling || .5 == pos, pass2 = strokewidth > 0 && .5 != pos;
    var did;
    (pass1 && pass2 && 1 != opacity && (group = document.createElementNS(SVG_NS, "g"), wrapper.appendChild(group), wrapper = group, 1 != opacity && (group.setAttribute("opacity", opacity.toFixed(3)), opacity = 1)), 
    pass1) && (null != tile ? did = svg_define_pattern(tile, wrapper) : null != grad && (did = svg_define_gradient(grad, wrapper)), shape = create_roundrect(box), null != tile ? shape.setAttribute("fill", `url(#${did})`) : null != grad ? shape.setAttribute("fill", `url(#${did})`) : fill == U ? shape.setAttribute("fill", "none") : shape.setAttribute("fill", js_color_to_str(fill)), 
    strokewidth > 0 && .5 == pos && (shape.setAttribute("stroke", js_color_to_str(strokecolor)), shape.setAttribute("stroke-width", strokewidth.toFixed(1))), 1 != opacity && shape.setAttribute("opacity", opacity.toFixed(3)), 
    wrapper.appendChild(shape));
    if (pass2) {
        (shape = create_roundrect(calc_middle_of_stroke(box, strokewidth, pos))).setAttribute("stroke", js_color_to_str(strokecolor)), shape.setAttribute("stroke-width", strokewidth.toFixed(1)), shape.setAttribute("fill", "none"), 
        1 != opacity && shape.setAttribute("opacity", opacity.toFixed(3)), wrapper.appendChild(shape);
    }
    function canv_rr_path(ctx, box, offset) {
        let net_left = box.left - offset, net_top = box.top - offset, net_right = box.left + box.width + offset, net_bottom = box.top + box.height + offset;
        ctx.beginPath(), 0 !== corner_tl || is_uneven ? (ctx.moveTo(net_left + corner_tl, net_top), ctx.lineTo(net_right - corner_tr, net_top), ctx.quadraticCurveTo(net_right, net_top, net_right, net_top + corner_tr), 
        ctx.lineTo(net_right, net_bottom - corner_br), ctx.quadraticCurveTo(net_right, net_bottom, net_right - corner_br, net_bottom), ctx.lineTo(net_left + corner_bl, net_bottom), ctx.quadraticCurveTo(net_left, net_bottom, net_left, net_bottom - corner_bl), 
        ctx.lineTo(net_left, net_top + corner_tl), ctx.quadraticCurveTo(net_left, net_top, net_left + corner_tl, net_top)) : ctx.rect(net_left, net_top, net_right - net_left, net_bottom - net_top);
    }
};

export function draw_oval(container, options) {
    let box, filling, blendmode = U, boxarg = null, matrix = null, strokecolor = BLACK, thick = 0, pos = .5, opacity = 1, fill = U, grad = null, tile = null;
    for (let property in options) switch (property) {
      case "box":
        (boxarg = options.box) instanceof a_tree || boxarg instanceof a_path ? box = tree_to_rect(boxarg) : boxarg instanceof Rectangle ? box = boxarg : argument_err("bad box");
        break;

      case "color":
        strokecolor = options.color;
        break;

      case "fill":
        fill = options.fill;
        break;

      case "grad":
        grad = options.grad;
        break;

      case "matrix":
        matrix = options.matrix;
        break;

      case "mode":
        blendmode = options.mode;
        break;

      case "opacity":
        opacity = clamp(numeric_arg(options.opacity), 0, 1);
        break;

      case "tile":
        tile = options.tile;
        break;

      case "pos":
        pos = clamp(options.pos, 0, 1);
        break;

      case "thick":
        thick = options.thick;
        break;

      case "x":
      case "y":
      case "xy":
      case "radius":
      case "diam":
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (!(filling = null !== grad || null !== tile || fill !== U) && thick <= 0) return;
    if (null == box && (box = container.bounds), null != container.can) {
        let ctx = container.ctx;
        return ctx.save(), ctx.globalAlpha = opacity, filling && (canv_oval_path(ctx, box, 0), ctx.fillStyle = js_fill(fill, grad, tile), ctx.fill()), thick > 0 && (canv_oval_path(ctx, box, (pos - .5) * thick * .5), 
        ctx.lineWidth = thick, ctx.strokeStyle = js_color_to_str(strokecolor), ctx.stroke()), void ctx.restore();
    }
    let shape, rx, ry, group, wrapper = js_svg_wrapper(container, 1), pass1 = filling || .5 == pos, pass2 = thick > 0 && .5 != pos;
    var did;
    (pass1 && pass2 && 1 != opacity && (group = document.createElementNS(SVG_NS, "g"), wrapper.appendChild(group), wrapper = group, 1 != opacity && (group.setAttribute("opacity", opacity.toFixed(3)), opacity = 1)), 
    pass1) && (null != tile ? did = svg_define_pattern(tile, wrapper) : null != grad && (did = svg_define_gradient(grad, wrapper)), rx = box.width / 2, ry = box.height / 2, (shape = document.createElementNS(SVG_NS, "ellipse")).setAttribute("cx", (box.left + rx).toFixed(1)), 
    shape.setAttribute("cy", (box.top + ry).toFixed(1)), shape.setAttribute("rx", rx.toFixed(1)), shape.setAttribute("ry", ry.toFixed(1)), null != tile ? shape.setAttribute("fill", `url(#${did})`) : null != grad ? shape.setAttribute("fill", `url(#${did})`) : fill == U ? shape.setAttribute("fill", "transparent") : shape.setAttribute("fill", js_color_to_str(fill)), 
    thick > 0 && .5 == pos && (shape.setAttribute("stroke", js_color_to_str(strokecolor)), shape.setAttribute("stroke-width", thick.toFixed(1))), 1 != opacity && shape.setAttribute("opacity", opacity.toFixed(3)), 
    wrapper.appendChild(shape));
    if (pass2) {
        let newbox = calc_middle_of_stroke(box, thick, pos);
        rx = newbox.width / 2, ry = newbox.height / 2, (shape = document.createElementNS(SVG_NS, "ellipse")).setAttribute("cx", (newbox.left + rx).toFixed(1)), shape.setAttribute("cy", (newbox.top + ry).toFixed(1)), 
        shape.setAttribute("rx", rx.toFixed(1)), shape.setAttribute("ry", ry.toFixed(1)), shape.setAttribute("stroke", js_color_to_str(strokecolor)), shape.setAttribute("stroke-width", thick.toFixed(1)), shape.setAttribute("fill", "transparent"), 
        1 != opacity && shape.setAttribute("opacity", opacity.toFixed(3)), wrapper.appendChild(shape);
    }
    function canv_oval_path(ctx, box, offset) {
        ctx.beginPath();
        let net_left = box.left - offset, net_top = box.top - offset, net_right = box.left + box.width + offset, net_bottom = box.top + box.height + offset;
        ctx.ellipse((net_left + net_right) / 2, (net_top + net_bottom) / 2, (net_right - net_left) / 2, (net_bottom - net_top) / 2, 0, 0, TAU);
    }
};

export function draw_circle(container, options) {
    let box, cx = 0, cy = 0, diam = U, radius = U;
    for (let property in options) switch (property) {
      case "x":
        cx = options.x;
        break;

      case "y":
        cy = options.y;
        break;

      case "xy":
        cx = getn(options.xy, F_x), cy = getn(options.xy, F_y);
        break;

      case "radius":
        if (is_numeric(options.radius) !== Y) return void argument_err("bad arg");
        radius = options.radius;
        break;

      case "diam":
        if (is_numeric(options.diam) !== Y) return void argument_err("bad arg");
        diam = options.diam;
    }
    if (is_numeric(cx) === Y) if (is_numeric(cy) === Y) {
        if (radius !== U) box = new Rectangle(cx - radius, cy - radius, 2 * radius, 2 * radius); else {
            if (diam === U) return void argument_err("missing radius or diam");
            box = new Rectangle(cx - (radius = diam / 2), cy - radius, diam, diam);
        }
        options.box = box, draw_oval(container, options), delete options.box;
    } else argument_err("bad center y"); else argument_err("bad center x");
};

export function draw_line(container, options) {
    let caps, joint, x1 = U, y1 = U, x2 = U, y2 = U, dx = U, dy = U, angle = null, len = U, color = BLACK, width = 2, opacity = 1, capx = CAP_ROUND, joinx = JOINT_ROUND, dash = null;
    for (let property in options) switch (property) {
      case "angle":
        angle = options.angle;
        break;

      case "cap":
        capx = options.cap;
        break;

      case "color":
        color = options.color;
        break;

      case "dash":
        dash = options.dash;
        break;

      case "dx":
        dx = options.dx;
        break;

      case "dy":
        dy = options.dy;
        break;

      case "joint":
        joinx = options.joint;
        break;

      case "p1":
        x1 = getn(options.p1, F_x), y1 = getn(options.p1, F_y);
        break;

      case "p2":
        x2 = getn(options.p2, F_x), y2 = getn(options.p2, F_y);
        break;

      case "x1":
        x1 = options.x1;
        break;

      case "y1":
        y1 = options.y1;
        break;

      case "x2":
        x2 = options.x2;
        break;

      case "y2":
        y2 = options.y2;
        break;

      case "len":
        len = options.len;
        break;

      case "thick":
        width = options.thick;
        break;

      case "opacity":
        opacity = clamp(numeric_arg(options.opacity), 0, 1);
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (width < 0) return;
    if (null !== angle && (dx = mul(cos(angle), len), dy = mul(sin(angle), len)), dx !== U && (x2 = add(x1, dx)), dy !== U && (y2 = add(y1, dy)), is_numeric(x1) !== Y || is_numeric(y1) !== Y || is_numeric(x2) !== Y || is_numeric(y2) !== Y) return void (CHECKS && argument_err("bad args"));
    switch (joinx) {
      case JOINT_ROUND:
        joint = "round";
        break;

      case JOINT_BEVEL:
        joint = "bevel";
        break;

      case JOINT_MITER:
        joint = "miter";
        break;

      default:
        CHECKS && argument_err("bad line cap"), joint = "round";
    }
    switch (capx) {
      case CAP_BUTT:
        caps = "butt";
        break;

      case CAP_ROUND:
        caps = "round";
        break;

      case CAP_SQUARE:
        caps = "square";
        break;

      default:
        CHECKS && argument_err("bad line cap"), caps = "round";
    }
    if (null != container.can) {
        let ctx = container.ctx;
        if (ctx.lineWidth = width, ctx.lineCap = caps, ctx.lineJoin = joint, ctx.strokeStyle = js_color_to_str(color, opacity), null != dash) {
            for (var dash_array = [], iter = new a_loop({
                across: dash
            }); iter.next(); ) dash_array.push(iter.val);
            ctx.setLineDash(dash_array);
        }
        return ctx.beginPath(), ctx.moveTo(x1, y1), ctx.lineTo(x2, y2), void ctx.stroke();
    }
    let wrapper = js_svg_wrapper(container, 1), shape = document.createElementNS(SVG_NS, "line");
    if (shape.setAttribute("x1", x1.toFixed(1)), shape.setAttribute("y1", y1.toFixed(1)), shape.setAttribute("x2", x2.toFixed(1)), shape.setAttribute("y2", y2.toFixed(1)), shape.setAttribute("stroke", js_color_to_str(color)), 
    shape.setAttribute("stroke-width", width.toFixed(1)), shape.setAttribute("stroke-linecap", caps), shape.setAttribute("stroke-linejoin", joint), null != dash) {
        for (var dash_spec = "", first = !0, loop1 = new a_loop({
            across: dash
        }); loop1.next(); ) first ? first = !1 : dash_spec += ",", dash_spec += loop1.val.toFixed(1);
        shape.setAttribute("stroke-dasharray", dash_spec);
    }
    1 != opacity && shape.setAttribute("opacity", opacity.toFixed(3)), wrapper.appendChild(shape);
};

export function draw_polygon(container, polygon, options) {
    let x, y, poly_path, joint, caps, grad = null, tile = null, fill = U, width = 0, opacity = 1, strokecolor = BLACK, capx = CAP_ROUND, joinx = JOINT_ROUND;
    var scalex, scaley, viewbox_l = U, viewbox_t = U;
    !CHECKS || polygon instanceof a_path || polygon instanceof a_tree || argument_err("polygon must be a a_path or a_tree");
    for (let property in options) switch (property) {
      case "cap":
        capx = options.cap;
        break;

      case "color":
        strokecolor = options.color;
        break;

      case "fill":
        fill = options.fill;
        break;

      case "grad":
        grad = options.grad;
        break;

      case "joint":
        joinx = options.joint;
        break;

      case "opacity":
        opacity = clamp(numeric_arg(options.opacity), 0, 1);
        break;

      case "thick":
        width = options.thick;
        break;

      case "tile":
        tile = options.tile;
        break;

      case "viewbox":
        viewbox_l = getn(options.viewbox, F_left), viewbox_t = getn(options.viewbox, F_top), scalex = .01 * getn(options.viewbox, F_width), scaley = .01 * getn(options.viewbox, F_height);
        break;

      default:
        argument_err("bad option: " + property);
    }
    switch (joinx) {
      case JOINT_ROUND:
        joint = "round";
        break;

      case JOINT_BEVEL:
        joint = "bevel";
        break;

      case JOINT_MITER:
        joint = "miter";
        break;

      default:
        CHECKS && argument_err("bad line cap"), joint = "round";
    }
    switch (capx) {
      case CAP_BUTT:
        caps = "butt";
        break;

      case CAP_ROUND:
        caps = "round";
        break;

      case CAP_SQUARE:
        caps = "square";
        break;

      default:
        CHECKS && argument_err("bad line cap"), caps = "round";
    }
    let wrapper, ctx, shape;
    var did;
    null != container.can ? (ctx = container.ctx, null != tile ? internal_err("not yet") : null != grad ? internal_err("not yet") : fill == U || (ctx.fillStyle = js_color_to_str(fill, opacity)), ctx.lineWidth = width, 
    ctx.lineCap = caps, ctx.lineJoin = joint, ctx.strokeStyle = js_color_to_str(strokecolor, opacity), ctx.beginPath()) : (wrapper = js_svg_wrapper(container, 1), null != tile ? did = svg_define_pattern(tile, wrapper) : null != grad && (did = svg_define_gradient(grad, wrapper)), 
    shape = document.createElementNS(SVG_NS, "polygon"), null != tile ? shape.setAttribute("fill", `url(#${did})`) : null != grad ? shape.setAttribute("fill", `url(#${did})`) : fill == U ? shape.setAttribute("fill", "none") : shape.setAttribute("fill", js_color_to_str(fill)), 
    width > 0 && (shape.setAttribute("stroke", js_color_to_str(strokecolor)), shape.setAttribute("stroke-width", width.toFixed(1)), shape.setAttribute("stroke-linecap", caps), shape.setAttribute("stroke-linejoin", joint)), 
    1 != opacity && shape.setAttribute("opacity", opacity.toFixed(3)));
    let did_fill = !0;
    if (null !== grad) throw new Error("not yet");
    if (null !== tile) throw new Error("not yet");
    if (fill !== U) ; else if (did_fill = !1, 0 == width) return void (CHECKS && argument_err("polygon with no fill or stroke"));
    let iter, mypath, p, first = !0, is_matrix = !1;
    for (polygon instanceof a_path ? poly_path = polygon : polygon instanceof a_tree ? poly_path = adr(polygon) : argument_err("polygon must be a_tree or a_path"), iter = new a_loop({
        across: poly_path
    }); iter.next(); ) mypath = iter.path, first && exists(mypath, 1) && (is_matrix = !0), is_matrix ? (x = getn(mypath, 1), y = getn(mypath, 2)) : (x = getn(mypath, F_x), y = getn(mypath, F_y)), viewbox_l != U && (x = x * scalex + viewbox_l, 
    y = y * scaley + viewbox_t), is_numeric(x) === Y && is_numeric(y) === Y ? first ? (first = !1, null != container.can ? ctx.moveTo(x, y) : ((p = wrapper.createSVGPoint()).x = x, p.y = y, shape.points.appendItem(p))) : null != container.can ? ctx.lineTo(x, y) : ((p = wrapper.createSVGPoint()).x = x, 
    p.y = y, shape.points.appendItem(p)) : CHECKS && argument_err("bad point");
    null != container.can ? (ctx.closePath(), did_fill && ctx.fill(), 0 != width && ctx.stroke()) : wrapper.appendChild(shape);
};

export function draw_polycurve(container, data, options) {
    let joint, caps, wrapper, ctx, shape, grad = null, tile = null, fill = U, width = 0, opacity = 1, strokecolor = BLACK, capx = CAP_ROUND, joinx = JOINT_ROUND;
    for (let property in options) switch (property) {
      case "cap":
        capx = options.cap;
        break;

      case "color":
        strokecolor = options.color;
        break;

      case "fill":
        fill = options.fill;
        break;

      case "grad":
        grad = options.grad;
        break;

      case "joint":
        joinx = options.joint;
        break;

      case "opacity":
        opacity = clamp(numeric_arg(options.opacity), 0, 1);
        break;

      case "thick":
        width = options.thick;
        break;

      case "tile":
        tile = options.tile;
        break;

      default:
        argument_err("bad option: " + property);
    }
    switch (joinx) {
      case JOINT_ROUND:
        joint = "round";
        break;

      case JOINT_BEVEL:
        joint = "bevel";
        break;

      case JOINT_MITER:
        joint = "miter";
        break;

      default:
        CHECKS && argument_err("bad line cap"), joint = "round";
    }
    switch (capx) {
      case CAP_BUTT:
        caps = "butt";
        break;

      case CAP_ROUND:
        caps = "round";
        break;

      case CAP_SQUARE:
        caps = "square";
        break;

      default:
        CHECKS && argument_err("bad line cap"), caps = "round";
    }
    var did;
    null != container.can ? (ctx = container.ctx, null != tile ? internal_err("not yet") : null != grad ? internal_err("not yet") : fill == U || (ctx.fillStyle = js_color_to_str(fill, opacity)), ctx.lineWidth = width, 
    ctx.lineCap = caps, ctx.lineJoin = joint, ctx.strokeStyle = js_color_to_str(strokecolor, opacity), ctx.beginPath()) : (wrapper = js_svg_wrapper(container, 1), null != tile ? did = svg_define_pattern(tile, wrapper) : null != grad && (did = svg_define_gradient(grad, wrapper)), 
    shape = document.createElementNS(SVG_NS, "path"), null != tile ? shape.setAttribute("fill", `url(#${did})`) : null != grad ? shape.setAttribute("fill", `url(#${did})`) : fill == U ? shape.setAttribute("fill", "none") : shape.setAttribute("fill", js_color_to_str(fill)), 
    width > 0 && (shape.setAttribute("stroke", js_color_to_str(strokecolor)), shape.setAttribute("stroke-width", width.toFixed(1)), shape.setAttribute("stroke-linecap", caps), shape.setAttribute("stroke-linejoin", joint)), 
    1 != opacity && shape.setAttribute("opacity", opacity.toFixed(3)));
    let iter, recp, opcode, x, y, c1x, c1y, c2x, c2y, data_path, did_fill = !0;
    if (null !== grad) throw new Error("not yet");
    if (null !== tile) throw new Error("not yet");
    if (fill !== U) ; else if (did_fill = !1, 0 == width) return void (CHECKS && argument_err("polygon with no fill or stroke"));
    let pathss = "";
    if (data instanceof a_path) data_path = data; else {
        if (!(data instanceof a_tree)) return void (CHECKS && argument_err("point data must be a ptr or tree"));
        data_path = adr(data);
    }
    iter = new a_loop({
        across: data_path
    });
    outer: for (;iter.next(); ) switch (opcode = getn(recp = iter.path, 1)) {
      case STEP_MOVE:
        x = getn(recp, 2), y = getn(recp, 3), null != container.can ? ctx.moveTo(x, y) : pathss += ` M${P(x)},${P(y)}`;
        break;

      case STEP_LINE:
        x = getn(recp, 2), y = getn(recp, 3), null != container.can ? ctx.lineTo(x, y) : pathss += ` L${P(x)},${P(y)}`;
        break;

      case STEP_BEZIER1:
        c1x = getn(recp, 2), c1y = getn(recp, 3), x = getn(recp, 4), y = getn(recp, 5), null != container.can ? ctx.quadraticCurveTo(c1x, c1y, x, y) : pathss += ` Q${P(c1x)},${P(c1y)},${P(x)},${P(y)}`;
        break;

      case STEP_BEZIER2:
        c1x = getn(recp, 2), c1y = getn(recp, 3), c2x = getn(recp, 4), c2y = getn(recp, 5), x = getn(recp, 6), y = getn(recp, 7), null != container.can ? ctx.bezierCurveTo(c1x, c1y, c2x, c2y, x, y) : pathss += ` C${P(c1x)},${P(c1y)},${P(c2x)},${P(c2y)},${P(x)},${P(y)}`;
        break;

      default:
        CHECKS && argument_err("bad opcode on step " + String(iter.count));
        break outer;
    }
    function P(val) {
        return str.to_str(val, {
            dig: 3
        });
    }
    null != container.can ? (ctx.closePath(), did_fill && ctx.fill(), 0 != width && ctx.stroke()) : (shape.setAttribute("d", pathss), wrapper.appendChild(shape));
};

export function launch_url(url) {
    if (IS_NODE) debugger; else window.open(url, "_blank");
};

export function measure_table_column(b, rowkind, column) {
    let col_ptr = tbl_find_rowkind(rowkind, b.tbl.s).fields[column - 1];
    return col_ptr.stopdot - col_ptr.startdot;
};

export async function ixdb_write(schema, objstore, rec_key, datapath) {
    TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_write IXDB_START`);
    const dbname = gets(schema, F_db_name), dbver = getn(schema, F_db_ver);
    var open = indexedDB.open(dbname, dbver);
    open.onupgradeneeded = function(e) {
        gen_db_struct(schema, open.result);
    }, open.onerror = db_err, open.onsuccess = function() {
        TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_write IXDB_OPEN`);
        let db = open.result, tx = db.transaction(objstore, "readwrite"), store = tx.objectStore(objstore), node = path_to_node(datapath);
        rec_key === U ? store.add(node) : store.put(node, rec_key), tx.oncomplete = function() {
            TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_write tx finished`), db.close();
        };
    };
};

export function ixdb_read(module, loc, schema, objstore, rec_key, datapath) {
    TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_read IXDB_START`);
    const dbname = gets(schema, F_db_name), dbver = getn(schema, F_db_ver);
    var open = indexedDB.open(dbname, dbver);
    open.onupgradeneeded = function(e) {
        gen_db_struct(schema, open.result);
    }, open.onerror = db_err, open.onsuccess = function() {
        TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_read IXDB_OPEN`);
        let db = open.result, tx = db.transaction(objstore), readreq = tx.objectStore(objstore).get(rec_key);
        readreq.onsuccess = function(e) {
            if (void 0 == readreq.result) return void (TRACE_FILE && logg("ixdb_read: read request null result"));
            let srcpath = new a_path(readreq.result);
            copy_tree(module, loc, srcpath, datapath), TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_read IXDB_OK`);
        }, tx.oncomplete = function() {
            TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_read tx finished`), db.close();
        };
    };
};

export function ixdb_delete(schema, objstore, rec_key) {
    TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_delete IXDB_START`);
    const dbname = gets(schema, F_db_name), dbver = getn(schema, F_db_ver);
    var open = indexedDB.open(dbname, dbver);
    open.onupgradeneeded = function(e) {
        gen_db_struct(schema, open.result);
    }, open.onerror = db_err, open.onsuccess = function() {
        TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_delete IXDB_OPEN`);
        let db = open.result, tx = db.transaction(objstore, "readwrite"), store = tx.objectStore(objstore);
        rec_key === U ? store.clear() : store.delete(rec_key), TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_delete IXDB_OK`), tx.oncomplete = function() {
            TRACE_FILE && logg(`${performance.now().toFixed(1)}: ixdb_delete tx finished`), db.close();
        };
    };
};

function db_err(e) {
    logg("error opening database " + e.target.errorCode);
}

function gen_db_struct(schema, udb) {
    TRACE_FILE && logg("gen_db_struct start...");
    let iter = new a_loop({
        across: adr(schema, F_db_stores)
    });
    for (;iter.next(); ) {
        let store = iter.path, s_name = gets(store, F_store_name);
        if (TRACE_FILE && logg(`gen_db_struct checking store ${s_name}`), !udb.objectStoreNames.contains(s_name)) {
            let s_auto = getn(store, F_store_autoinc), flags = {};
            flags.autoIncrement = s_auto === Y;
            let dbstore = udb.createObjectStore(s_name, flags), iter2 = new a_loop({
                across: adr(store, F_store_indices)
            });
            for (;iter2.next(); ) {
                let index = iter2.path, ix_name = gets(index, F_index_name), ix_uniq = getn(index, F_index_unique), ix_mult = getn(index, F_index_multi), flags2 = {};
                flags2.unique = ix_uniq === Y, flags2.multiEntry = ix_mult === Y, TRACE_FILE && logg(`gen_db_struct creating index ${ix_name}`), dbstore.createIndex(ix_name, ix_name, flags2);
            }
        }
    }
    TRACE_FILE && logg("..end gen_db_struct");
}

export function seconds_to_date(options = null) {
    var seconds = U;
    for (let property in options) switch (property) {
      case "seconds":
        seconds = options.seconds;
        break;

      case "city":
        internal_err("not yet");
        break;

      default:
        argument_err("bad option: " + property);
    }
    return seconds == U && (seconds = now), jsd_to_datetime(new Date(1e3 * seconds));
};

export function date_to_seconds(datetime) {
    return datetime_to_jsd(datetime).getTime() / 1e3;
};

function datetime_to_jsd(datetime) {
    let year, month, day, hour, minute, second, seconds_whole, msec;
    return year = getn(datetime, F_date_year), month = getn(datetime, F_date_month) - 1, day = getn(datetime, F_date_day), hour = getn(datetime, F_date_hour), minute = getn(datetime, F_date_minute), second = getn(datetime, F_date_second), 
    seconds_whole = Math.floor(second), new Date(year, month, day, hour, minute, seconds_whole, msec = 1e3 * (second - seconds_whole));
}

function jsd_to_datetime(jsd) {
    let result = new a_tree(_M, "$jsd_to_datetime", 0);
    setv(_M, 0, result, F_date_year, jsd.getFullYear()), setv(_M, 0, result, F_date_month, jsd.getMonth() + 1), setv(_M, 0, result, F_date_day, jsd.getDate()), setv(_M, 0, result, F_date_hour, jsd.getHours()), 
    setv(_M, 0, result, F_date_minute, jsd.getMinutes());
    let net_seconds = jsd.getSeconds() + .001 * jsd.getMilliseconds();
    setv(_M, 0, result, F_date_second, net_seconds);
    var day = U;
    switch (jsd.getDay()) {
      case 0:
        day = SUNDAY;
        break;

      case 1:
        day = MONDAY;
        break;

      case 2:
        day = TUESDAY;
        break;

      case 3:
        day = WEDNESDAY;
        break;

      case 4:
        day = THURSDAY;
        break;

      case 5:
        day = FRIDAY;
        break;

      case 6:
        day = SATURDAY;
    }
    return setv(_M, 0, result, F_date_weekday, day), result;
}

function add_select_list(sel, list) {
    let option, group, ix, myloop = new a_loop({
        across: list
    });
    for (;myloop.next(); ) if (exists(list, ix = myloop.index, F_opt_children)) {
        group = document.createElement("optgroup"), option.text = gets(list, ix, F_opt_label), add_select_list(sel, adr(list, ix, F_opt_children));
    } else (option = document.createElement("option")).text = gets(list, ix, F_opt_label), option.value = option.text, exists(list, ix, F_opt_val) && (option.value = gets(list, ix, F_opt_val)), getn(list, ix, F_opt_selected) == Y && (option.selected = !0), 
    getn(list, ix, F_opt_disabled) == Y && (option.disabled = !0), sel.appendChild(option);
}

export function html_redirect(url, options) {
    if (IS_NODE) debugger;
    if (void 0 !== options && options.hasOwnProperty("newtab") && options.newtab == Y) window.open(url); else window.location.href = url;
};

export function html_download(url, options) {
    var filename = "";
    void 0 != options && options.hasOwnProperty("filename") && (filename = options.filename);
    var elem = document.createElement("a");
    elem.href = url, "" != filename && (elem.download = filename), elem.style.display = "none", document.body.appendChild(elem), elem.click(), document.body.removeChild(elem);
};

export function html_draw_pulldown(container, box, items, field_ptr, options) {
    let ss, size = pt_to_dots(container, 10), is_multiple = !1, nitems = U;
    for (let property in options) switch (property) {
      case "size":
        size = options.size;
        break;

      case "multiple":
        is_multiple = options.multiple === Y;
        break;

      case "nitems":
        nitems = options.nitems;
        break;

      default:
        argument_err("bad option: " + property);
    }
    let sel = document.createElement("select");
    add_select_list(sel, items), ss = gets(field_ptr, F_in_value), sel.style.boxSizing = "border-box", sel.style.position = "absolute", sel.style.left = getn(box, F_left).toFixed(0) + "px", sel.style.top = getn(box, F_top).toFixed(0) + "px", 
    sel.style.width = getn(box, F_width).toFixed(0) + "px", sel.style.height = getn(box, F_height).toFixed(0) + "px", sel.style.fontSize = size.toFixed(1) + "px", getn(field_ptr, F_in_required == Y) && (sel.required = !0), 
    null != (ss = gets(field_ptr, F_in_autofill)) && (sel.autocomplete = ss), nitems != U && (sel.size = nitems), is_multiple && (sel.multiple = !0), container.appendChild(sel);
};

function js_scrollbar_width() {
    var scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px", scrollDiv.style.height = "100px", scrollDiv.style.overflow = "scroll", scrollDiv.style.position = "absolute", scrollDiv.style.top = "-9999px", document.body.appendChild(scrollDiv);
    var result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    return document.body.removeChild(scrollDiv), result;
}

export function js_resize() {
    js_set_screen_size(), rebuild_all();
};

const TSTATE_IDLE = 0, TSTATE_IN_TOUCH = 1, TSTATE_IN_DRAG = 2, TSTATE_IN_HOLD = 3, TSTATE_AFTER_TOUCH = 4, TSTATE_IN_OS = 5, HOLD_DELAY = 500, DRAG_THRESHOLD_MM = 1, TAP_DELAY = 200, DOUBLE_TAP_DELAY = 300;

export let g_report_tap_hold = !1;

export let g_report_tap_double = !1;

var g_touch = {
    state: TSTATE_IDLE
}, g_mouse = [ {
    state: TSTATE_IDLE
}, {
    state: TSTATE_IDLE
}, {
    state: TSTATE_IDLE
} ];

function js_touchstart(evt) {
    var t = evt.changedTouches[0], elem_name = evt.target.localName;
    if (TRACE_TOUCH && logg(`js_touchstart name=${elem_name}, ident=${t.identifier} client=${t.clientX.toFixed(1)},${t.clientY.toFixed(1)}`), "input" != elem_name && "select" != elem_name && "textarea" != elem_name) switch (g_touch.state) {
      case TSTATE_IDLE:
        g_touch.id = t.identifier, g_touch.state = TSTATE_IN_TOUCH, g_touch.origintime = elapsed_raw, g_touch.originx = t.clientX, g_touch.originy = t.clientY, g_touch.lastx = t.clientX, g_touch.lasty = t.clientY, 
        g_touch.cum_pixels = 0, g_touch.mod_shf = evt.shiftKey, g_touch.mod_alt = evt.altKey, g_touch.mod_cmd = evt.metaKey, g_touch.mod_ctl = evt.ctrlKey;
        break;

      default:
        TRACE_TOUCH && logg(str.conv("js_touchstart, ignoring g_touch.id={}, state={}", g_touch.id, g_touch.state));
    } else TRACE_TOUCH && logg("-- js_touchstart ignoring tap on special field}");
}

function js_touchcancel(evt) {
    for (var t, touches = evt.changedTouches, i = 0; i < touches.length; i++) t = touches[i], TRACE_TOUCH && logg(`js_touchcancel ${t.identifier} client=${t.clientX.toFixed(1)},${t.clientY.toFixed(1)}`), 
    g_touch.state != TSTATE_IDLE && t.identifier == g_touch.id ? (TRACE_TOUCH && logg("--- cancelling"), g_touch.state) : TRACE_TOUCH && logg("--- ignoring cancel");
}

function js_touchmove(evt) {
    for (var t, touches = evt.changedTouches, i = 0; i < touches.length; i++) t = touches[i], g_touch.state == TSTATE_IN_TOUCH && t.identifier == g_touch.id && (g_touch.cum_pixels += Math.abs(t.clientX - g_touch.lastx) + Math.abs(t.clientY - g_touch.lasty), 
    g_touch.lastx = t.clientX, g_touch.lasty = t.clientY, 25.4 * g_touch.cum_pixels / SCREEN_DPI >= DRAG_THRESHOLD_MM ? g_touch.state = TSTATE_IDLE : elapsed_raw - g_touch.origintime && (do_pointer_event(EV_HOLD, elapsed, g_touch.originx, g_touch.originy, g_touch), 
    g_touch.state = TSTATE_IN_HOLD));
}

function js_touchend(evt) {
    for (var t, touches = evt.changedTouches, i = 0; i < touches.length; i++) t = touches[i], TRACE_TOUCH && logg(`js_touchend ${t.identifier} client=${t.clientX.toFixed(1)},${t.clientY.toFixed(1)}`), g_touch.state != TSTATE_IDLE && t.identifier == g_touch.id && (g_touch.state == TSTATE_IN_TOUCH && (TRACE_TOUCH && logg("--- touch converted to TAP"), 
    do_pointer_event(EV_TAP, elapsed, g_touch.originx, g_touch.originy, g_touch), event.preventDefault(), event.stopPropagation()), g_touch.state = TSTATE_IDLE);
}

function js_mousedown(evt) {
    var ex, ey;
    if (!(evt.button >= 3)) {
        var target = evt.target;
        if (TRACE_CLICK) {
            var flags = "";
            evt.shiftKey && (flags += "SHIFT "), evt.altKey && (flags += "ALT "), evt.metaKey && (flags += "CMD "), evt.ctrlKey && (flags += "CTRL"), TRACE_CLICK && logg(str.conv("{n3} js_mousedown, name={} button={}, id={}, client=[{},{}], .scrollTop=={}, .scrY={} {}", elapsed_raw, target.localName, evt.button, target.id, evt.clientX, evt.clientY, document.body.scrollTop, window.scrollY, flags));
        }
        if ("input" != target.localName && "select" != target.localName && "textarea" != target.localName) {
            var gg = g_mouse[evt.button];
            switch (gg.state) {
              case TSTATE_IDLE:
                TRACE_CLICK && logg("--- now IN_TOUCH"), ex = evt.clientX, ey = evt.clientY, gg.button = evt.button, gg.state = TSTATE_IN_TOUCH, gg.origintime = elapsed_raw, gg.originx = ex, gg.originy = ey, gg.lastx = ex, 
                gg.lasty = ey, gg.cum_pixels = 0, gg.mod_shf = evt.shiftKey, gg.mod_alt = evt.altKey, gg.mod_cmd = evt.metaKey, gg.mod_ctl = evt.ctrlKey;
                break;

              case TSTATE_AFTER_TOUCH:
                TRACE_CLICK && logg("--- AFTER_TOUCH emit double tap"), do_pointer_event(EV_DOUBLE_TAP, elapsed, gg.originx, gg.originy, gg), evt.preventDefault(), evt.stopPropagation();
                break;

              default:
                TRACE_CLICK && logg("--- unexpected state:" + String(gg.state));
            }
        } else TRACE_CLICK && logg(`-- js_mousedown ignoring, local=${evt.target.localName}`);
    }
}

function js_mouseup(evt) {
    if (evt.button >= 3) return;
    var evkind, gg = g_mouse[evt.button];
    TRACE_CLICK && logg(str.conv("{n3} on_mouse_up, button={}, state={n}", elapsed_raw, evt.button, gg.state));
    let reset = !0;
    if (clearTimeout(gg.timer), gg.state == TSTATE_IN_TOUCH) if (g_report_tap_double) gg.state = TSTATE_AFTER_TOUCH, gg.timer = setTimeout(js_mouse_timeout, DOUBLE_TAP_DELAY, gg), TRACE_LOW && logg("  start timer for double tap"), 
    reset = !1; else {
        switch (TRACE_LOW && logg("  treating as EV_TAP"), gg.button) {
          case 0:
            evkind = EV_TAP;
            break;

          case 1:
            evkind = EV_MID_TAP;
            break;

          default:
            evkind = EV_ALT_TAP;
        }
        do_pointer_event(evkind, elapsed, gg.originx, gg.originy, gg);
    } else gg.state == TSTATE_IN_DRAG && do_pointer_event(EV_DRAG_END, elapsed, evt.clientX, evt.clientY, gg);
    reset && (gg.state = TSTATE_IDLE);
}

function js_mousemove(evt) {
    let target = evt.target;
    if ("input" == target.localName || "select" == target.localName || "textarea" == target.localName) return void (TRACE_MOVE && logg(`--js_mousemove ignoring, local=${evt.target.localName}`));
    if (null == g_root_block) return void (TRACE_MOVE && logg("--js_mousemove ignoring, no root block"));
    if (evt.button >= 3) return;
    var gg = g_mouse[evt.button];
    let distance;
    TRACE_MOVE && logg(str.conv("at {n3} js_mousemove, mouse=[{},{}], state={}", elapsed_raw, evt.clientX, evt.clientY, gg.state)), gg.state == TSTATE_IN_TOUCH ? (gg.cum_pixels += Math.abs(evt.clientX - gg.lastx) + Math.abs(evt.clientY - gg.lasty), 
    gg.lastx = evt.clientX, gg.lasty = evt.clientY, distance = 25.4 * gg.cum_pixels / 100, TRACE_MOVE && logg(str.conv("  cum pixels={n} mm={n3} threshold={n}", gg.cum_pixels, distance, DRAG_THRESHOLD_MM)), 
    distance >= DRAG_THRESHOLD_MM && (gg.state = TSTATE_IN_DRAG, clearTimeout(gg.timer), do_pointer_event(EV_DRAG_BEGIN, elapsed, gg.originx, gg.originy, gg), do_pointer_event(EV_DRAG_MOVE, elapsed, evt.clientX, evt.clientY, gg), 
    evt.preventDefault())) : gg.state == TSTATE_IDLE ? (do_pointer_event(EV_HOVER, elapsed, evt.clientX, evt.clientY, gg), evt.preventDefault()) : gg.state == TSTATE_IN_DRAG && (do_pointer_event(EV_DRAG_MOVE, elapsed, evt.clientX, evt.clientY, gg), 
    evt.preventDefault());
}

function js_mouse_timeout(event, gg) {
    if (null != gg) switch (gg.state) {
      case TSTATE_IN_TOUCH:
        g_report_tap_hold ? (TRACE_LOW && logg("  touch timer complete, converting to TAP_HOLD"), do_pointer_event(EV_HOLD, elapsed, gg.originx, gg.originy, gg), gg.state = TSTATE_IN_HOLD) : (TRACE_LOW && logg("  touch timer complete, converting to TAP_SINGLE"), 
        do_pointer_event(EV_TAP, elapsed, gg.originx, gg.originy, gg), gg.state = TSTATE_IDLE);
        break;

      case TSTATE_AFTER_TOUCH:
        TRACE_LOW && logg("  touch timer complete, emit TAP_SINGLE"), do_pointer_event(EV_TAP, elapsed, gg.originx, gg.originy, gg), gg.state = TSTATE_IDLE;
        break;

      default:
        internal_err("  touch timer complete, unexpected state");
    } else TRACE_LOW && logg("  mouse_timeout parm not set");
}

function js_keydown(event) {
    var active = document.activeElement;
    if (null != active) {
        if ("select" == active.localName || "textarea" == active.localName) return void (TRACE_KEYS && logg(`--js_keydown passing to browser, active=${active.localName}`));
        if ("input" == active.localName && event.keyCode != KEYCODE_ENTER) return void (TRACE_KEYS && logg(`--js_keydown passing to browser input, active=${active.localName}`));
    }
    TRACE_KEYS && logg(str.conv("at {n3} on_keydown, cc={}, keycode={}", elapsed_raw, event.charCode, event.keyCode));
    let keycode = event.keyCode;
    if (20 == keycode || 17 == keycode || 18 == keycode || 16 == keycode || 91 == keycode || 92 == keycode) TRACE_KEYS && logg("--ignoring shift key"); else if (keycode == KEYCODE_ESC && event.ctrlKey && !(event.shiftKey || event.altKey || event.metaKey)) {
        debug_blackbox_write(MODULES[aaaa.main_drawer.modnum], {
            kind: "CTRL-ESC dump"
        }), event.preventDefault();
    } else {
        do_key_event(elapsed, event.key, keycode, event.shiftKey, event.altKey, event.metaKey, event.ctrlKey) && (TRACE_KEYS && logg("  -- absorbed key event"), event.preventDefault());
    }
}

function on_enter_frame(timestamp) {
    clock_tick(), loom_process_events(), SKIP_ANIMATION || requestAnimationFrame(on_enter_frame);
}

function js_fill(fill, grad, tile) {
    return null != tile ? tile : null != grad ? grad : js_color_to_str(fill);
}

const BFLAG_MODAL = 1, BFLAG_DEAD = 2, BFLAG_IDE = 4;

export function new_block(arg_parent, arg_bounds, arg_kind, arg_label, arg_drawer = null, arg_dest = FOR_SCREEN) {
    let newb = document.createElement("div"), net_left = arg_bounds.left, net_top = arg_bounds.top, net_right = arg_bounds.left + arg_bounds.width, net_bottom = arg_bounds.top + arg_bounds.height;
    return newb.style.left = `${net_left.toFixed(1)}px`, newb.style.top = `${net_top.toFixed(1)}px`, newb.style.width = `${(net_right - net_left).toFixed(1)}px`, newb.style.height = `${(net_bottom - net_top).toFixed(1)}px`, 
    newb.style.position = "absolute", arg_label == ROOT_BLABEL ? newb.id = arg_label : arg_label.startsWith("$") ? (newb.style.overflow = "scroll", newb.id = arg_label) : newb.id = arg_label + "_" + g_next_bid.toString(), 
    newb.blabel = arg_label, newb.bid = g_next_bid++, newb.bkind = arg_kind, newb.bseq = 0, newb.locator = 0, newb.dest = arg_dest, null === arg_parent ? (newb.bflags = 0, newb.dpi = SCREEN_DPI) : (newb.bflags = arg_parent.bflags, 
    newb.dpi = arg_parent.dpi, arg_parent.appendChild(newb)), newb.nesting = 0, newb.drawer = arg_drawer, newb.usesz = [], newb.is_measuring = !1, newb.is_inside = !1, newb.div = null, newb.tbl = null, newb.extra = new a_tree(_M, "$a_block.extra"), 
    k_set_bounds(newb, arg_bounds), newb;
};

export var g_micro = [];

export var g_blackbox_micro;

export const LOGK_DELTA = 2;

export const LOGK_RENUM = 4;

export const LOGK_TOUCH = 8;

export const MARK_CLEAR_BEG = 1048576;

export const MARK_CLEAR_END = 1048577;

export const MARK_TRUNC_BEG = 2097152;

export const MARK_TRUNC_END = 2097153;

export const MARK_COPY_BEG = 4194304;

export const MARK_COPY_END = 4194305;

export const MARK_MERGE_BEG = 8388608;

export const MARK_MERGE_END = 8388609;

export const MARK_RENUM_BEG = 16777216;

export const MARK_RENUM_END = 16777217;

export const MARK_MOVE_BEG = 33554432;

export const MARK_MOVE_END = 33554433;

export const MARK_SWAP_BEG = 67108864;

export const MARK_SWAP_END = 67108865;

export const OPS_THAT_USE_PATH = LOGK_DELTA | LOGK_RENUM;

export const OPS_THAT_ARE_PUBLISHED = LOGK_DELTA | LOGK_RENUM;

export function a_micro() {
    this.when = U, this.module = null, this.where = 0, this.kind = 0, this.path = null, this.oldval = null, this.newval = null;
};

export function next_rawx() {
    return g_micro.length;
};

export function micro_add_marker(opcode, mod, loc) {
    let rec = {};
    rec.kind = opcode, rec.when = elapsed, rec.module = mod, rec.where = loc, g_micro.push(rec);
};

export function pathx_to_hard(pathx) {
    let i, path = new a_path(pathx.lev[0].node);
    for (i = 1; i <= pathx.lastx; i++) path.key.push(pathx.lev[i].sub);
    return path;
};

export function pathx_to_soft(pathx) {
    var i, path = new a_path();
    for (path.base = pathx.lev[0].node.sub, i = 1; i <= pathx.lastx; i++) path.key.push(pathx.lev[i].sub);
    return path;
};

export function micro_add_delta(arg_kind, arg_module, arg_where, arg_pathx, arg_oldval, arg_newval) {
    if (!CHECKS || 0 != arg_where && null != arg_module || argument_err("log_delta requires where"), !(arg_pathx.lev[0].node.eflags & NF_LOGGED)) return;
    let rec = {};
    rec.when = elapsed, rec.module = arg_module, rec.where = arg_where, rec.kind = arg_kind, rec.path = pathx_to_hard(arg_pathx), rec.oldval = arg_oldval, rec.newval = arg_newval;
    let rawix = g_micro.length;
    TRACE_MICRO && logg(str.conv("micro[{}] when={}, kind={}, mod={}, linex={}, path={}, old={}, new={}", rawix, elapsed, arg_kind, arg_module, arg_where, rec.path, arg_oldval, arg_newval)), g_micro.push(rec);
};

function add_major_step(evkind) {
    let sx = tree_next_hi(adr(runtime, F_major_steps));
    return TRACE_MAJOR && logg(str.conv("add_major_step at {}, kind={}, rawx={}", sx, evkind, g_micro.length)), setv(_M, 0, runtime, F_major_steps, sx, F_evkind, evkind), setv(_M, 0, runtime, F_major_steps, sx, F_when, elapsed), 
    setv(_M, 0, runtime, F_major_steps, sx, F_hist_rawx, g_micro.length), setv(_M, 0, runtime, F_major_stepx, sx + 1), sx;
}

export function add_major_callback(elem) {
    let sx = add_major_step(EV_TIMER);
    TRACE_MAJOR && logg(str.conv("add_major_callback at {}, func={}", sx, elem.func.name)), setv(_M, 0, runtime, F_major_steps, sx, F_callback, elem.func);
};

export function add_major_event(arg_event, absorber) {
    let sx = append_tree(MODX_std, 0, arg_event, adr(runtime, F_major_steps));
    if (TRACE_MAJOR) {
        let ss = "null";
        null != absorber && (ss = absorber.blabel), logg(str.conv("add_major_event[{}] evkind={}, absorber={}, rawx={}", sx, getn(arg_event, F_evkind), ss, g_micro.length));
    }
    return setv(_M, 0, runtime, F_major_steps, sx, F_hist_rawx, g_micro.length), setv(_M, 0, runtime, F_major_stepx, sx + 1), null != absorber && setv(_M, 0, runtime, F_major_steps, sx, F_hist_absorber, absorber.blabel), 
    sx;
};

function is_simple_value(val) {
    return "number" == typeof val || "string" == typeof val || val instanceof a_image || val instanceof a_sound;
}

export function a_sys_gradient() {
    this.grad_seq = 0, this.grad_obj = null;
};

export function a_loom_element() {
    this.func = null, this.nreps = 1, this.countx = 0, this.last_seen = 0, this.field_vec = [];
};

export function Point(x, y) {
    this.x = x, this.y = y;
};

export function Rectangle(left, top, width, height) {
    this.left = left, this.top = top, this.width = width, this.height = height;
};

Object.defineProperty(Rectangle.prototype, "right", {
    get: function() {
        return this.left + this.width;
    }
}), Object.defineProperty(Rectangle.prototype, "bottom", {
    get: function() {
        return this.top + this.height;
    }
}), Rectangle.prototype.union = function(box2) {
    return new Rectangle(Math.min(this.left, box2.left), Math.min(this.top, box2.top), Math.max(this.width, box2.width), Math.max(this.height, box2.height));
}, Rectangle.prototype.intersection = function(box2) {
    let l, t, rit, bot;
    return new Rectangle(l = Math.max(this.left, box2.left), t = Math.max(this.top, box2.top), (rit = Math.min(this.left + this.width, box2.left + box2.width)) - l, (bot = Math.min(this.top + this.height, box2.top + box2.height)) - t);
};

export function Matrix() {
    internal_err("not yet");
};

export function Bitmap() {
    internal_err("not yet");
};

export function a_entry_field() {
    this.parm = 0;
    debugger;
};

export function a_div_slice() {
    this.box = null, this.id = U, this.backcolor = U, this.npasses = 1, this.drawer = null;
};

export function a_div_spec(arg_gridf = null, arg_tblr = !1, arg_scrollh = !1, arg_scrollv = !1) {
    this.horz_slices = [], this.vert_slices = [], this.scrollh = arg_scrollh, this.scrollv = arg_scrollv, this.open = !0, this.grid_func = arg_gridf, this.grid_tblr = arg_tblr, this.ncols = 0, this.nrows = 0, 
    this.content_h = 0, this.content_v = 0;
};

export function a_unitxx() {
    this.terms = [];
};

function compare_unit_terms(a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}

function str_to_unitxx(compact) {
    let exp, unitx = new a_unitxx();
    TRACE_UNITX && logg("expand compact=" + compact), CHECKS && "" == compact && internal_err("unit string missing from measure");
    let chunk, pos_caret, pos_bar, term, chunks = compact.split(",");
    for (chunk of chunks) term = {}, pos_caret = chunk.indexOf("^"), term.name = chunk.substring(0, pos_caret), (pos_bar = (exp = chunk.substring(pos_caret + 1)).indexOf("|")) <= 0 ? (term.num = Math.floor(exp.substring(0, pos_bar)), 
    term.den = Math.floor(exp.substring(pos_bar + 1))) : (term.num = Math.floor(exp), term.den = 1), unitx.terms.push(term);
    return unitx;
}

a_unitxx.prototype.unitxx_to_str = function() {
    let term;
    if (this.terms.sort(compare_unit_terms), TRACE_UNITX) for (term of (logg("unitxx_to_str start, terms="), this.terms)) logg("  term.name=" + term.name + ", " + String(term.num) + " / " + String(term.den));
    let ss = "", first = !0;
    for (term of this.terms) if (0 != term.num) {
        for (;;) {
            let active = !1;
            if (term.num % 2 == 0 && term.den % 2 == 0 && (term.num /= 2, term.den /= 2, active = !0), term.num % 3 == 0 && term.den % 3 == 0 && (term.num /= 3, term.den /= 3, active = !0), term.num % 5 == 0 && term.den % 5 == 0 && (term.num /= 5, 
            term.den /= 5, active = !0), !active) break;
        }
        first ? first = !1 : ss += ",", ss += term.name + "^" + String(term.num), 1 != term.den && (ss += "|" + String(term.den));
    }
    return TRACE_UNITX && logg("unitxx_to_str end, unitss=" + ss), ss;
}, a_unitxx.prototype.find_unit_term = function(targ) {
    let term;
    for (term of this.terms) if (term.name == targ) return term;
    return null;
}, a_unitxx.prototype.add_unit_term = function(newterm, sign = 1) {
    let existing_term = this.find_unit_term(newterm.name);
    null == existing_term ? this.terms.push(newterm) : (1 != newterm.den && (existing_term.num *= newterm.den, existing_term.den *= newterm.den), existing_term.num += newterm.num * existing_term.den * sign);
};

export function ByteArray(arg_len, arg_order) {
    this.arraybuf = new ArrayBuffer(arg_len), this.view = new DataView(this.arraybuf, 0), this.position = 0, this.little = arg_order != BIG_ENDIAN;
};

function ArrayBuffer_to_ByteArray(buf, arg_order) {
    return {
        arraybuf: buf,
        view: new DataView(buf, 0),
        position: 0,
        little: arg_order != BIG_ENDIAN
    };
}

export function a_loop_step() {
    this.index = null, this.val = null, this.key = null, this.leaf = null, this.path = null;
};

const METHOD_INFINITE = 0, METHOD_RANGE = 1, METHOD_ACROSS = 2, METHOD_TOP_DOWN = 3, METHOD_BOT_UP = 4, METHOD_LIST = 5, METHOD_RECURSIVE = 6, METHOD_PASS2 = 7, STATE_EMIT = 0, STATE_CHILDREN = 1, STATE_SIBLINGS = 2, KIND_INT = 1, KIND_ENUM = 2, KIND_STR = 4, KIND_LINK = 8, KIND_NUM = 3, KIND_ALL = 15, SIGNAL = -99;

let g_sort_func;

export function a_loop(options) {
    this.count = 0, this.kind = KIND_NUM, this.index = 1, this.range_from = U, this.range_to = INFINITY, this.range_delta = 1, this.limit = INFINITY, this.trap = !1, this.rev = !1, this.basis = null, this.recursive_field = U, 
    this.sort_mode = 0, this.sort_field = U, this.method = METHOD_INFINITE, this.done = !1, this.include_root = !1, this.parent_node = null, this.base_node = null, this.state = 0, this.stack_ix = null;
    this.stack_node = null, this.stack_field = null, this.stx = 0;
    for (let property in options) switch (property) {
      case "across":
        options.across instanceof a_tree ? this.basis = adr(options.across) : options.across instanceof a_path ? this.basis = options.across : argument_err("loop target must be a_path or a_tree"), this.method = METHOD_ACROSS;
        break;

      case "by":
        this.range_delta = options.by, is_numeric(this.range_delta) != Y && argument_err("bad 'delta' value"), this.range_delta <= 0 && argument_err("delta must be positive");
        break;

      case "from":
        this.range_from = options.from, is_numeric(this.range_from) != Y && argument_err("bad from value"), this.method = METHOD_RANGE;
        break;

      case "bottom_up":
        options.bottom_up instanceof a_tree ? this.basis = adr(options.bottom_up) : options.bottom_up instanceof a_path ? this.basis = options.bottom_up : argument_err("loop target must be a path or tree"), this.method = METHOD_BOT_UP;
        break;

      case "recursive":
        options.recursive instanceof a_tree ? this.basis = adr(options.recursive) : options.recursive instanceof a_path ? this.basis = options.recursive : argument_err("loop target must be a path or tree"), this.method = METHOD_RECURSIVE;
        break;

      case "field":
        this.recursive_field = options.field;
        break;

      case "kind":
        this.kind = options.kind;
        break;

      case "top_down":
        options.top_down instanceof a_tree ? this.basis = adr(options.top_down) : options.top_down instanceof a_path ? this.basis = options.top_down : argument_err("loop target must be a path or tree"), this.method = METHOD_TOP_DOWN;
        break;

      case "label":
        this.label = options.label;
        break;

      case "limit":
        this.limit = numeric_arg(options.limit);
        break;

      case "rev":
        this.rev = options.rev === Y;
        break;

      case "root":
        this.include_root = options.root;
        break;

      case "sort_mode":
        this.sort_mode = options.sort_mode;
        break;

      case "sort_field":
        this.sort_field = options.sort_field;
        break;

      case "sort_func":
        this.sort_func = options.sort_func;
        break;

      case "to_":
        this.range_to = options.to_, is_numeric(this.range_to) != Y && argument_err("bad 'to' value");
        break;

      case "trap":
        this.trap = options.trap === Y;
        break;

      default:
        argument_err("### bad property in options: " + property);
    }
    switch (this.method) {
      case METHOD_RANGE:
        this.rev ? this.index = this.range_to + this.range_delta : this.index = this.range_from - this.range_delta;
        break;

      case METHOD_ACROSS:
        this.parent_node = path_to_node(this.basis, !0), null == this.parent_node || null == this.parent_node.children ? this.done = !0 : (this.rev ? this.elemx = this.parent_node.children.length : this.elemx = -1, 
        this.path = addr_append(this.basis, 999));
        break;

      case METHOD_TOP_DOWN:
      case METHOD_RECURSIVE:
        if (this.base_node = path_to_node(this.basis, !0), null == this.base_node) this.done = !0; else {
            if (this.include_root ? this.state = STATE_EMIT : this.state = STATE_CHILDREN, this.stack_node = [ this.base_node ], this.method == METHOD_RECURSIVE) {
                let field_node = path_to_node(adr(this.base_node, this.recursive_field));
                this.stack_field = [ field_node ];
            }
            this.stack_ix = [ -999 ], this.stx = 0, this.path = this.basis.clone();
        }
        break;

      case METHOD_BOT_UP:
        internal_err("method not yet imp");
    }
    0 != this.sort_mode && (this.sort_list = [], this.build_loop_steps(), null == this.sort_func ? this.sort_list.sort(default_sort_func) : (g_sort_func = this.sort_func, this.sort_list.sort(custom_sort_func)), 
    this.done = !1, this.method = METHOD_PASS2, this.count = 0);
};

function get_leaf_value(val) {
    return val instanceof a_path ? val.clone_to_hard() : val;
}

function default_sort_func(stepa, stepb) {
    return collate_open(stepa.key, stepb.key);
}

function custom_sort_func(stepa, stepb) {
    return g_sort_func(stepa.key, stepb.key);
}

a_loop.prototype.update_pos = function() {
    let i, _bx;
    for (this.leaf = this.stack_node[this.stx], this.index = this.leaf.sub, this.val = get_leaf_value(this.leaf.val), _bx = this.basis.key.length - 1, i = 1; i <= this.stx; i++) _bx += 1, this.path.key[_bx] = this.stack_node[i - 1].children[this.stack_ix[i]].sub;
    this.path.key.length = _bx + 1;
}, a_loop.prototype.next_topdown = function() {
    let parent, _nextx;
    for (;;) {
        if (this.state == STATE_EMIT) return this.update_pos(), this.state = STATE_CHILDREN, !0;
        if (this.state != STATE_CHILDREN || null == this.stack_node[this.stx].children) {
            if (this.state = 2, this.stx > 0) if (parent = this.stack_node[this.stx - 1], this.rev) {
                if ((_nextx = this.stack_ix[this.stx] - 1) >= 0) {
                    this.stack_ix[this.stx] = _nextx, this.stack_node[this.stx] = parent.children[_nextx], this.state = STATE_EMIT;
                    continue;
                }
            } else if ((_nextx = this.stack_ix[this.stx] + 1) < parent.children.length) {
                this.stack_ix[this.stx] = _nextx, this.stack_node[this.stx] = parent.children[_nextx], this.state = STATE_EMIT;
                continue;
            }
            if (this.stx -= 1, this.stx < 0) return this.done = !0, !1;
            this.state = 2;
        } else parent = this.stack_node[this.stx], this.stx += 1, _nextx = this.rev ? parent.children.length - 1 : 0, this.stack_ix[this.stx] = _nextx, this.stack_node[this.stx] = parent.children[_nextx], this.state = STATE_EMIT;
    }
    return !1;
}, a_loop.prototype.next_recursive = function() {
    let _parent, _nextx, i;
    for (;;) {
        if (this.state == STATE_EMIT) {
            for (this.leaf = this.stack_node[this.stx], this.index = this.leaf.sub, this.val = U, this.path.key.length = this.basis.key.length, i = 1; i <= this.stx; i++) this.path.key.push(this.recursive_field), 
            this.path.key.push(this.stack_field[i].children[this.stack_ix[i]].sub);
            return this.state = STATE_CHILDREN, !0;
        }
        if (this.state == STATE_CHILDREN) {
            let field_node = path_to_node(adr(this.stack_node[this.stx], this.recursive_field));
            if (null != field_node && null != field_node.children) {
                this.stx += 1, _nextx = this.rev ? field_node.children.length - 1 : 0, this.stack_ix[this.stx] = _nextx, this.stack_node[this.stx] = field_node.children[_nextx], this.stack_field[this.stx] = field_node, 
                this.state = STATE_EMIT;
                continue;
            }
        }
        if (this.stx > 0) if (_parent = this.stack_field[this.stx], this.rev) {
            if ((_nextx = this.stack_ix[this.stx] - 1) >= 0) {
                this.stack_ix[this.stx] = _nextx, this.stack_node[this.stx] = _parent.children[_nextx], this.state = STATE_EMIT;
                continue;
            }
        } else if ((_nextx = this.stack_ix[this.stx] + 1) < _parent.children.length) {
            this.stack_ix[this.stx] = _nextx, this.stack_node[this.stx] = _parent.children[_nextx], this.state = STATE_EMIT;
            continue;
        }
        if (this.stx -= 1, this.stx < 0) return this.done = !0, !1;
        this.state = 2;
    }
    return !1;
}, a_loop.prototype.next = function() {
    if (this.done) return !1;
    if (ge2(this.count, this.limit)) return this.trap && internal_err("Aborting because loop limit of " + String(this.limit) + " was reached"), this.done = !0, !1;
    switch (this.method) {
      case METHOD_INFINITE:
        break;

      case METHOD_RANGE:
        if (this.rev) {
            if (this.index -= this.range_delta, this.index < this.range_from) return this.done = !0, !1;
        } else if (this.index += this.range_delta, this.index > this.range_to) return this.done = !0, !1;
        break;

      case METHOD_ACROSS:
        if (this.rev) {
            if (this.elemx -= 1, this.elemx < 0) return this.done = !0, !1;
        } else {
            this.elemx += 1;
            let children = this.parent_node.children;
            if (null == children || this.elemx >= children.length) return this.done = !0, !1;
        }
        this.leaf = this.parent_node.children[this.elemx], this.index = this.leaf.sub, this.val = get_leaf_value(this.leaf.val), this.path.key[this.path.key.length - 1] = this.index;
        break;

      case METHOD_TOP_DOWN:
        if (!this.next_topdown()) return this.done = !0, !1;
        break;

      case METHOD_BOT_UP:
        internal_err("not yet");
        break;

      case METHOD_RECURSIVE:
        if (!this.next_recursive()) return this.done = !0, !1;
        break;

      case METHOD_PASS2:
        var rec;
        if (this.count >= this.sort_list.length) return this.done = !0, !1;
        rec = this.rev ? this.sort_list[this.sort_list.length - 1 - this.count] : this.sort_list[this.count], this.index = rec.index, this.val = get_leaf_value(rec.val), this.leaf = rec.leaf, this.path = rec.path;
        break;

      default:
        internal_err("bad method");
    }
    return this.count++, !0;
}, a_loop.prototype.build_loop_steps = function() {
    let rec, ix = 0;
    for (;this.next(); ) {
        switch ((ix += 1) > 1e5 && internal_err("sanity check error: 100k sort item limit reached in loop."), (rec = {}).index = this.index, rec.val = get_leaf_value(this.val), rec.path = this.path.clone(), rec.leaf = this.leaf, 
        this.sort_mode) {
          case 1:
            rec.key = this.index;
            break;

          case 2:
            rec.key = str.to_str(this.index);
            break;

          case 3:
            rec.key = get_leaf_value(this.val);
            break;

          case 4:
            rec.key = get_generic(this.path, this.sort_field);
            break;

          case 5:
            rec.key = rec.path;
            break;

          default:
            internal_err("bad sort mode");
        }
        this.sort_list.push(rec);
    }
};

export function a_tree(arg_mod, arg_label, arg_nodeflags = 0, arg_initval = null) {
    this.children = null, this.val = U, this.eflags = EF_VAL_IS_U | arg_nodeflags, this.seq = 0, this.sub = 0, this.label = arg_label, 0 != (arg_nodeflags & NF_TOPLEVEL) && (this.sub = str.str_hash_fnv(arg_label + ":" + MODULES[arg_mod]), 
    TREES[this.sub] = this), null != arg_initval && merge_tree(arg_mod, 0, arg_initval, adr(this));
};

export function a_dependency() {
    this.path = null, this.seq = 0;
};

export function a_loom_anim_curve() {
    this.phase = 0, this.draw_end_time = 0, this.hold_end_time = 0;
};

export function a_loom_anim_num() {
    this.paused = !1, this.pause_start = 0;
};

export function a_path(arg_base) {
    this.base = arg_base, this.key = [];
};

a_path.prototype.clone = function() {
    let result = new a_path();
    return result.base = this.base, result.key = this.key.concat(), result;
}, a_path.prototype.clone_to_soft = function() {
    var result = new a_path();
    return result.base = this.base.sub, result.key = this.key.concat(), result;
}, a_path.prototype.clone_to_hard = function() {
    var result = new a_path();
    return result.base = TREES[this.base], void 0 != result.base && null != result.base || argument_err("A soft path should have a label in the base field"), result.key = this.key.concat(), result;
};

export function a_pathh() {
    internal_err("not yet");
};

export function a_pathx() {
    let i;
    for (this.basepath = null, this.lastx = -1, this.lev = [], this.exists = !1, i = 0; i < MAX_LEVELS; i++) this.lev[i] = {};
};

export var PLACEHOLDER = new a_image("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAzUExURYmIlL/I18jT45KTn5+jsLG4xpaYpaiuu42OmcPO3brD0ra+zJueqqSotq2zwczY6ISDjoaU0+EAAAWMSURBVHjaYhCgAwAIIAZ6WAIQQHSxBCCA6GIJQADRxRKAAKKLJQABRBdLAAKILpYABBBdLAEIILpYAhBAdLEEIIDoYglAAJFsCQcvNzsHiXoAAohES9i4+EGAi40kXQABRJIlDNz8MMBFikaAACJJLSM/AjCSoBMggEixhIsfGTASrxEggBiwupgFm1IWflSAVREzJzOmIEAAMWANFSYsKgUY0SzB5hVmJmx6AQIIiyXsQAOwqOTgRwcc2OzAZjlAAGELLlastrBhWMKG3Q5MIwECCGvEY7WFnaAluOwQAAgg7KkLmy0ELcFphwBAAOFIwlhsIWQJbjsEAAIIVz7BtIUHf8TjsUMAIIBwZkYMWzBSFyexdggABBDuHI9hC3o+YUU2hhNfSQMQQHiKFXRb0HM8M1qphrs0AwggfGUXmi0MTCh2cBFthwBAADEQKhGRbOHFkbYI2SEAEEAMBMt2JoQSTqweIWiHAEAAMRCuQRD62bClX8J2CAAEEIMAKbYgakZ2EuwQAAggQpUWqhkcsLjnZCDBDgGAACJYM6KaAitbeEixQwAggAhXvyjmMHCixDpxdggABBARdTyKSSzI+ZBIOwQAAoiYhgSKWVyIWCfWDgGAACKqtQIyjQmaZpkR9SsHI5EtI4AAIq5JxMCIMIydiQObMD4AEEBYFXGwAQGqMiR1PDi1M7CxYTUPIICw1Prs0NKDixeLJAs3FxcXK7YmFws3OBMxcWO2kwECiAGzdYZcZaC1eljgmZEH3WVIRTRGOxkggBiwtTgQgImdAa3shwE+rJZjbycDBBADgWYiPycbjqIeEWTMGJq4UA0FCCAG/O1dEOBmQCu4oJ6EBiUDHxY9qJEGEEBolnBi0cDPBNGCbhgkwNiwakFpZAgABBCqJcz82AEXMxYHgAzi4MahAyWJAQQQqiV8/LgAsCTBEAOmKZzqkZsyAgABxICnm4OaYjAbd2yMuJWjhBdAAKFawo1bFx9mUHLwMOF2E7KxAAHEQDBxwbu7mMEFLiKxA15kYwECCK3wwe40ThZsWYgLUlxitwSlqAAIIAZC/QNQpDPg6TNizSb83CimAgQQegHAiT35YikN4KGOLRmj9joAAohA2QXLiJhyyK1kjAzJh2ooQAAxCOCzBbV8RJZD6yGxcOLMJEAAEEBYqgxWmFGMGBUKA6wcZsXQxwIPTPRqQEAAIICw1mRs7EDAg3UsiIEHJIW9PmVh5+Zm58UyBAAQQEQOe7AihQBSTcZCXB0PEEDEWcKKlLt4EekTGEdE2QIQQAxE2gFPlaBahQ2pYiDGFoAAYiDWDl4kDicxvVEkABBADETawYLSRWEhzRaAAGIgzQ5ozQXvOUBsITQmCRBADKTZwY6epcGNCKwjV0gAIIAYSLKDGbN6ZSDCFoAAYiBiZJMFS4MJHmDE2AIQQIR7v0h28GItAwnbAhBADCTYgVqlMRNvC0AAMRBvB1pbBn1EAo8tAAHEQLwd6HUzG9G2AAQQA9F2oDWF0UaJ8NoCEEAMRNuB0ZBgQlHPhccWgABiwDeqgmIHA4HhQfCYEvaJAoAAYsBjBzOBIVsWfPkWGQAEEAOxdmCxhF2ASFsAAoiBWDuIsASnLQABxECsHVgs4RUg0haAAGLAPvCPJZ0wEx5Gh9qC0VoBCCAGrFMYWNMiE2aDG6stmJUYQABhixMeTmacpT6eJhy07MFSUQIEEAkzQWijz0zEz9EBBBAp002ozXoe4jUCBBBJs3NItjCRYIcAQACRNs8I7yVykzSfCRBApM6Y8gArZCZWZtI0AQQQ6XO/HGwk6wEIILpMMAMEEF0sAQggulgCEEB0sQQggOhiCUAA0cUSgACiiyUAAUQXSwACiC6WAAQQXSwBCCC6WAIQQHSxBCDAAIlbTCvv7okVAAAAAElFTkSuQmCC", "PLACEHOLDER", !0);

export function a_image(arg_url, arg_hint = "", arg_preload = !1, arg_h = 0, arg_v = 0) {
    if (IS_NODE) return null;
    if (this.tile_width = arg_h, this.tile_height = arg_v, null == arg_url) this.sysobj = null; else {
        var tag = document.createElement("img");
        tag.url = arg_url, arg_preload && (tag.onload = function() {
            TRACE_IMG && logg(`...in preload finished for ${this.src.substr(0, 70)}, natural=${this.naturalWidth} x ${this.naturalHeight}`);
            this.onload = null;
        }, tag.src = arg_url), tag.alt = arg_hint, tag.style.userSelect = "none", tag.style.webkitUserSelect = "none", this.sysobj = tag;
    }
};

export function image_load(url, options) {
    var hint = "";
    for (let property in options) switch (property) {
      case "hint":
        hint = options.hint;
        break;

      default:
        argument_err("bad option: " + property);
    }
    return new a_image(url, hint);
};

export function a_meas() {
    this.mag = U, this.unit = U, this.family = U, this.unitss = null;
};

a_meas.prototype.clone = function() {
    let my = new a_meas();
    return my.mag = this.mag, my.unit = this.unit, my.family = this.family, my.unitss = this.unitss, my;
};

export function a_function(arg_modnum = 0, arg_name = "", arg_code = null, arg_track = null, arg_parms = null) {
    this.modnum = arg_modnum, this.name = arg_name, this.code = arg_code, this.tracker = arg_track, this.hash = str.str_hash_fnv(arg_name + ":" + MODULES[arg_modnum]), this.parms = arg_parms;
};

export function a_gradient(arg_kind = null, arg_spread = null, arg_focus = 0, arg_angle = 0, arg_ratios = null, arg_colors = null, arg_alphas = null) {
    this.grad_kind = arg_kind, this.grad_spread = arg_spread, this.grad_focus = arg_focus, this.grad_colors = arg_colors, this.grad_alphas = arg_alphas, this.grad_ratios = arg_ratios, this.grad_angle = arg_angle;
};

export function a_sound(src) {
    if (this.loopf = !1, this.notify = !1, this.id = 0, this.pause_position = 0, this.curx = 0, this.numx = 1, IS_NODE) this.audio = null; else {
        let myaudio = new Audio(src);
        myaudio.preload = "auto", myaudio.load(), this.audio = [ myaudio ];
    }
};

export function new_changelist(...args) {
    for (var find, repl, list = new a_tree(_M, "$new_changelist"), nargs = args.length, argx = 0, slotx = 1; argx < nargs; ) find = args[argx++], repl = args[argx++], setv(_M, 0, list, slotx, str.F_find_patt, find), 
    setv(_M, 0, list, slotx, str.F_repl_patt, repl), slotx += 1;
    return null;
};

function null_derive_func() {}

export function solve_rectR(options) {
    let basis = null, centerx = U, centery = U, dx = U, dy = U, left = U, right = U, top = U, bottom = U, width = U, height = U, inset = U, inset_n = U, inset_s = U, inset_e = U, inset_w = U, inset_y = U, inset_x = U, pin = 1, prop_x = U, prop_y = U, round = !1, error = !1;
    for (let property in options) switch (property) {
      case "basis":
        basis = options.basis;
        break;

      case "bottom":
        bottom = options.bottom;
        break;

      case "cx":
        centerx = options.cx;
        break;

      case "cy":
        centery = options.cy;
        break;

      case "dx":
        dx = options.dx;
        break;

      case "dy":
        dy = options.dy;
        break;

      case "height":
        height = options.height;
        break;

      case "inset":
        inset = options.inset;
        break;

      case "inset_n":
        inset_n = options.inset_n;
        break;

      case "inset_s":
        inset_s = options.inset_s;
        break;

      case "inset_e":
        inset_e = options.inset_e;
        break;

      case "inset_w":
        inset_w = options.inset_w;
        break;

      case "inset_y":
        inset_y = options.inset_y;
        break;

      case "inset_x":
        inset_x = options.inset_x;
        break;

      case "left":
        left = options.left;
        break;

      case "pin":
        pin = options.pin, CHECKS && (pin < 1 || pin > 9) && argument_err("bad pin value");
        break;

      case "prop_x":
        prop_x = options.prop_x;
        break;

      case "prop_y":
        prop_y = options.prop_y;
        break;

      case "right":
        right = options.right;
        break;

      case "round":
        round = options.round;
        break;

      case "top":
        top = options.top;
        break;

      case "width":
        width = options.width;
        break;

      default:
        argument_err("### internal error, bad property in options: " + property);
    }
    if (null != basis && (dx != U && (basis = new Rectangle(basis.left + dx, basis.top, basis.width, basis.height)), dy != U && (basis = new Rectangle(basis.left, basis.top + dy, basis.width, basis.height)), 
    inset != U && (basis = new Rectangle(basis.left + inset, basis.top + inset, basis.width - 2 * inset, basis.height - 2 * inset)), inset_y != U && (basis = new Rectangle(basis.left, basis.top + inset_y, basis.width, basis.height - 2 * inset_y)), 
    inset_x != U && (basis = new Rectangle(basis.left + inset_x, basis.top, basis.width - 2 * inset_x, basis.height)), inset_n != U && (basis = new Rectangle(basis.left, basis.top + inset_n, basis.width, basis.height - inset_n)), 
    inset_s != U && (basis = new Rectangle(basis.left, basis.top, basis.width, basis.height - inset_s)), inset_e != U && (basis = new Rectangle(basis.left, basis.top, basis.width - inset_e, basis.height)), 
    inset_w != U && (basis = new Rectangle(basis.left + inset_w, basis.top, basis.width - inset_w, basis.height))), null != basis) {
        switch ((pin - 1) % 3) {
          case 0:
            left = basis.left;
            break;

          case 1:
            centerx = basis.left + basis.width / 2;
            break;

          case 2:
            right = basis.left + basis.width;
        }
        switch ((pin - 1) / 3 >> 0) {
          case 0:
            top = basis.top;
            break;

          case 1:
            centery = basis.top + basis.height / 2;
            break;

          case 2:
            bottom = basis.top + basis.height;
            break;

          default:
            argument_err("pin out of range");
        }
        prop_x != U && prop_y != U && (basis.width * prop_y > basis.height * prop_x ? width = (height = basis.height) * prop_x / prop_y : height = (width = basis.width) * prop_y / prop_x);
    }
    return left != U ? width != U || (right != U ? width = right - left : centerx != U ? width = 2 * (centerx - left) : null != basis ? width = basis.width : error = !0) : right != U ? width != U ? left = right - width : centerx != U ? left = right - (width = 2 * (right - centerx)) : null != basis ? left = right - (width = basis.width) : error = !0 : centerx != U ? width != U ? left = centerx - width / 2 : null != basis ? left = centerx - (width = basis.width) / 2 : error = !0 : error = !0, 
    top != U ? height != U || (bottom != U ? height = bottom - top : centery != U ? height = 2 * (centery - top) : null != basis ? height = basis.height : error = !0) : bottom != U ? height != U ? top = bottom - height : centery != U ? top = bottom - (height = 2 * (bottom - centery)) : null != basis ? top = bottom - (height = basis.height) : error = !0 : centery != U ? height != U ? top = centery - height / 2 : null != basis ? top = centery - (height = basis.height) / 2 : error = !0 : error = !0, 
    CHECKS && error && argument_err("insufficient info to determine rectangle"), inset != U && (left += inset, top += inset, width -= inset + inset, height -= inset + inset), round && (left = Math.round(left), 
    top = Math.round(top), width = Math.round(width), height = Math.round(height)), new Rectangle(left, top, width, height);
};

export function load_code(mod_name, mod_enum, mod_hash) {
    let filepath, lines, hex = mod_hash.toString(16).toUpperCase();
    for (;hex.length < 8; ) hex = "0" + hex;
    filepath = "/beads/bcode/" + mod_name + ("_" + hex + ".bcode");
    debugger;
    null === lines && (lines = []).push(mod_name), g_code[mod_enum] = lines;
};

export function s(stringset, key, lang = LANG_ENG) {
    return key;
};

export function is_enum_b(n) {
    return n >= FIRST_ENUM && n <= LAST_ENUM;
};

export function is_err_enum_b(n) {
    return Number.isNaN(n) || n >= FIRST_ENUM && n <= LAST_ENUM;
};

export function collate_num(a, b) {
    let cat_a, cat_b;
    return (cat_a = a === U ? 1 : is_enum_b(a) ? 2 : Number.isNaN(a) ? 3 : 0) < (cat_b = b === U ? 1 : is_enum_b(b) ? 2 : Number.isNaN(b) ? 3 : 0) ? (TRACE_COLLATE && logg(str.conv("collate_num, a={}, b={}, category -1", a, b)), 
    -1) : cat_a > cat_b ? (TRACE_COLLATE && logg(str.conv("collate_num, a={}, b={}, category +1", a, b)), 1) : 0 === cat_a ? a < b ? (TRACE_COLLATE && logg(str.conv("collate_num, a={}, b={}, result=-1", a, b)), 
    -1) : a > b ? (TRACE_COLLATE && logg(str.conv("collate_num, a={}, b={}, result=+1", a, b)), 1) : (TRACE_COLLATE && logg(str.conv("collate_num, a={}, b={}, result=0", a, b)), 0) : 2 === cat_a ? (TRACE_COLLATE && logg(str.conv("collate_num, a={}, b={} enum", a, b)), 
    collate_str(str.enum_to_str(a), str.enum_to_str(b))) : (TRACE_COLLATE && logg(str.conv("collate_num, a={}, b={}, other", a, b)), 0);
};

export function collate_str(a, b) {
    let cat_a, cat_b;
    if ((cat_a = a === U_STR ? 1 : a === ERR_STR ? 2 : 0) < (cat_b = b === U_STR ? 1 : b === ERR_STR ? 2 : 0)) return -1;
    if (cat_a > cat_b) return 1;
    if (0 === cat_a) {
        if (a < b) return -1;
        if (a > b) return 1;
    }
    return 0;
};

export const AS3_NUM = 1;

export const AS3_STR = 2;

export const AS3_OTHER = 99;

export function as3_cat(a) {
    return "number" == typeof a ? AS3_NUM : "string" == typeof a ? AS3_STR : AS3_OTHER;
};

export function collate_open(a, b) {
    let cat_a = as3_cat(a), cat_b = as3_cat(b);
    if (cat_a < cat_b) return -1;
    if (cat_a > cat_b) return 1;
    switch (cat_a) {
      case AS3_NUM:
        return collate_num(a, b);

      case AS3_STR:
        return collate_str(a, b);
    }
    return TRACE_COLLATE && logg(str.conv("collate open, equal, a={}, b={}", a, b)), 0;
};

const TRACE_TASKS = !0;

let q_tasks, q_taskx, q_loader, q_donef, q_progressf;

const TASK_WAITING = 0, TASK_BUSY = 1, TASK_DONE = 2, TASK_FAILED = 3;

export function a_qtask(arg_folder, arg_fname, arg_addr) {
    this.folder = arg_folder, this.fname = arg_fname, this.addr = arg_addr, this.state = TASK_WAITING;
};

export function a_loader_x(arg_folder, arg_fname, arg_dtype, arg_callback, arg_parm, arg_cache) {
    debugger;
};

export function q_reset() {
    q_tasks = [];
};

export function q_add_pic(folder, fname, pic_addr) {
    TRACE_TASKS && logg(str.conv("## adding task with fnane={str}, path={path}", fname, pic_addr));
    let newtask = new a_qtask(folder, fname, pic_addr);
    q_tasks.push(newtask);
};

export function q_start(on_done = null, on_progress = null) {
    TRACE_TASKS && logg("## q_start, ntasks=" + String(q_tasks.length)), q_donef = on_done, q_progressf = on_progress, q_taskx = 0, q_next_task();
};

function q_next_task() {
    let mytask, ntasks = q_tasks.length;
    q_taskx < ntasks ? (TRACE_TASKS && logg(str.conv("## task {int}/{int} running", q_taskx, ntasks)), (mytask = q_tasks[q_taskx]).state = a_qtask.TASK_BUSY, q_loader = new a_loader_x(mytask.folder, mytask.fname, TYPE_BYTES, on_task_complete, Y), 
    null !== q_progressf && q_progressf(q_taskx, ntasks)) : (TRACE_TASKS && logg("## q_tasks all done"), null !== q_donef && q_donef());
}

function on_task_complete(okay, data) {
    okay === Y ? (TRACE_TASKS && logg(str.conv("## task {int} okay", q_taskx)), q_tasks[q_taskx].state = a_qtask.TASK_DONE) : (TRACE_TASKS && logg(str.conv("## task {int} failed", q_taskx)), q_tasks[q_taskx].state = a_qtask.TASK_FAILED), 
    q_taskx += 1, q_next_task();
}

export function is_invalid_sub(sub) {
    return "number" == typeof sub ? Number.isNaN(sub) || sub === U : "string" != typeof sub;
};

export function set_val_rect(module, loc, t, r) {
    setv(module, loc, t, F_left, r.left), setv(module, loc, t, F_top, r.top), setv(module, loc, t, F_width, r.width), setv(module, loc, t, F_height, r.height);
};

function rect_intersect(rect1, rect2) {
    if (rect1 == ERR_TREE || rect2 == ERR_TREE) return ERR_TREE;
    if (null == rect1) return rect2;
    if (null == rect2) return rect1;
    let netl, nett, netr, netb, r1l = getn(rect1, F_left), r1t = getn(rect1, F_top), r1w = getn(rect1, F_width), r1h = getn(rect1, F_height), r2l = getn(rect2, F_left), r2t = getn(rect2, F_top), r2w = getn(rect2, F_width), r2h = getn(rect2, F_height);
    if (is_err_enum(r1l) || is_err_enum(r1t) || is_err_enum(r1w) || is_err_enum(r1h) || is_err_enum(r2l) || is_err_enum(r2t) || is_err_enum(r2w) || is_err_enum(r2h)) return ERR_TREE;
    if (r1l == U || r1t == U || r1w == U || r1h == U) return rect2;
    if (r2l == U || r2t == U || r2w == U || r2h == U) return rect1;
    let r1r = r1l + r1w, r1b = r1t + r1h, r2r = r2l + r2w, r2b = r2t + r2h;
    netl = r1l > r2l ? r1l : r2l, nett = r1t > r2t ? r1t : r2t, netr = r1r < r2r ? r1r : r2r, netb = r1b < r2b ? r1b : r2b;
    let result = new a_tree(_M, "$rect_intersect");
    return setv(_M, 0, result, F_left, netl), setv(_M, 0, result, F_top, nett), setv(_M, 0, result, F_width, netr - netl), setv(_M, 0, result, F_height, netb - nett), result;
}

function rect_union(rect1, rect2) {
    if (rect1 == ERR_TREE || rect2 == ERR_TREE) return ERR_TREE;
    if (null == rect1) return rect2;
    if (null == rect2) return rect1;
    let netl, nett, netr, netb, r1l = getn(rect1, F_left), r1t = getn(rect1, F_top), r1w = getn(rect1, F_width), r1h = getn(rect1, F_height), r2l = getn(rect2, F_left), r2t = getn(rect2, F_top), r2w = getn(rect2, F_width), r2h = getn(rect2, F_height);
    if (is_err_enum(r1l) || is_err_enum(r1t) || is_err_enum(r1w) || is_err_enum(r1h) || is_err_enum(r2l) || is_err_enum(r2t) || is_err_enum(r2w) || is_err_enum(r2h)) return ERR_TREE;
    if (r1l == U || r1t == U || r1w == U || r1h == U) return rect2;
    if (r2l == U || r2t == U || r2w == U || r2h == U) return rect1;
    let r1r = r1l + r1w, r1b = r1t + r1h, r2r = r2l + r2w, r2b = r2t + r2h;
    netl = r1l < r2l ? r1l : r2l, nett = r1t < r2t ? r1t : r2t, netr = r1r > r2r ? r1r : r2r, netb = r1b > r2b ? r1b : r2b;
    let result = new a_tree(_M, "$rect_union");
    return setv(_M, 0, result, F_left, netl), setv(_M, 0, result, F_top, nett), setv(_M, 0, result, F_width, netr - netl), setv(_M, 0, result, F_height, netb - nett), result;
}

export function rect_is_portrait(r) {
    let h = getn(r, F_width), v = getn(r, F_height);
    return is_err_enum_b(h) || is_err_enum_b(v) ? (CHECKS && argument_err("bad rectangle"), ERR) : h === U || v === U ? U : h < v ? Y : N;
};

export function rect_is_landscape(r) {
    let h = getn(r, F_width), v = getn(r, F_height);
    return is_err_enum_b(h) || is_err_enum_b(v) ? (CHECKS && argument_err("bad rectangle"), ERR) : h === U || v === U ? U : h >= v ? Y : N;
};

function rect_is_intersecting(rect1, rect2) {
    if (rect1 == ERR_TREE || rect2 == ERR_TREE) return ERR;
    if (null == rect1 || null == rect2) return U;
    let r1l = getn(rect1, F_left), r1t = getn(rect1, F_top), r1w = getn(rect1, F_width), r1h = getn(rect1, F_height), r2l = getn(rect2, F_left), r2t = getn(rect2, F_top), r2w = getn(rect2, F_width), r2h = getn(rect2, F_height);
    return is_err_enum(r1l) || is_err_enum(r1t) || is_err_enum(r1w) || is_err_enum(r1h) || is_err_enum(r2l) || is_err_enum(r2t) || is_err_enum(r2w) || is_err_enum(r2h) ? ERR : r1l == U || r1t == U || r1w == U || r1h == U ? U : r2l == U || r2t == U || r2w == U || r2h == U ? U : r1l + r1w <= r2l || r2l + r2w <= r1l || r1t + r1h <= r2t || r2t + r2h <= r1t ? N : Y;
}

export function rect_is_inside(r, options) {
    if (r == ERR_PATH) return ERR;
    if (null == r) return U;
    let p1x = U, p1y = U;
    for (let property in options) switch (property) {
      case "x":
        p1x = options.x;
        break;

      case "y":
        p1y = options.y;
        break;

      case "xy":
        p1x = getn(options.xy, F_x), p1y = getn(options.xy, F_y);
        break;

      default:
        argument_err("bad option: " + property);
    }
    if (is_err_enum(p1x) || is_err_enum(p1y)) return ERR;
    if (p1x == U || p1y == U) return U;
    let r1l = getn(r, F_left), r1t = getn(r, F_top), r1w = getn(r, F_width), r1h = getn(r, F_height);
    return p1x >= r1l && p1y >= r1t && p1x < r1l + r1w && p1y < r1t + r1h ? Y : N;
};

export function rect_as_tree(left, top, width, height) {
    let t = new a_tree(_M, "$rect_as_tree");
    return setv(_M, 0, t, F_left, left), setv(_M, 0, t, F_top, top), setv(_M, 0, t, F_width, width), setv(_M, 0, t, F_height, height), t;
};

export function tree_to_rect(boxt) {
    let left, top, width, height;
    return new Rectangle(left = getn(boxt, F_left), top = getn(boxt, F_top), width = getn(boxt, F_width), height = getn(boxt, F_height));
};

export function point_as_tree(x, y) {
    let t = new a_tree(_M, "$point_as_tree");
    return setv(_M, 0, t, F_x, x), setv(_M, 0, t, F_y, y), t;
};

export function SPTS(arg_pts) {
    return arg_pts * SCREEN_DPI * ONE_72;
};

export function int_abs(a) {
    return a < 0 ? -a : a;
};

export function add_family(family, dimensions, nonlinear = N) {
    nonlinear === Y && setv(_M, 0, families, family, F_fam_nonlinear, Y), "" !== dimensions && setv(_M, 0, families, family, F_fam_dim, dimensions);
};

export function add_unit(family, unit, factor, base_to_unitf = null, unit_to_basef = null) {
    setv(_M, 0, unit_to_family, unit, family), 1 === factor && setv(_M, 0, families, family, F_fam_base, unit), null === unit_to_basef ? setv(_M, 0, families, family, F_fam_units, unit, F_unit_factor, factor) : (setv(_M, 0, families, family, F_fam_units, unit, F_base_to_unit, base_to_unitf), 
    setv(_M, 0, families, family, F_fam_units, unit, F_unit_to_base, unit_to_basef));
};

export function degree_to_radian(a) {
    return a * Math.PI / 180;
};

export function radian_to_degree(a) {
    return 180 * a / Math.PI;
};

export function xy_in_rect(x, y, box) {
    return x -= box.left, y -= box.top, x >= 0 && y >= 0 && x < box.width && y < box.height;
};

export function tree_add(module, loc, src, dest) {
    path_setv(module, loc, dest, add(path_getv(dest, EF_VAL_IS_NUM), src));
};

export function tree_sub(module, loc, src, dest) {
    path_setv(module, loc, dest, sub(path_getv(dest, EF_VAL_IS_NUM), src));
};

export function tree_mul(module, loc, src, dest) {
    path_setv(module, loc, dest, mul(path_getv(dest, EF_VAL_IS_NUM), src));
};

export function tree_div(module, loc, src, dest) {
    path_setv(module, loc, dest, div(path_getv(dest, EF_VAL_IS_NUM), src));
};

export function tree_cat(module, loc, src, dest) {
    path_setv(module, loc, dest, cat(path_getv(dest, EF_VAL_IS_STR), src));
};

export function add(a, b) {
    if ("number" == typeof a && "number" == typeof b) return is_err_enum_b(a) || is_err_enum_b(b) ? (TRAP_ERR && internal_err("bad arg"), ERR) : a === U || b === U ? U : a + b;
    if (a instanceof a_meas && b instanceof a_meas && a.unitss === b.unitss) {
        let c = a.clone();
        return c.mag = a.mag + b.mag, c;
    }
    return TRAP_ERR && internal_err("bad arg"), ERR;
};

export function sub(a, b) {
    if ("number" == typeof a && "number" == typeof b) return is_err_enum_b(a) || is_err_enum_b(b) ? (TRAP_ERR && internal_err("bad arg"), ERR) : a === U || b === U ? U : a - b;
    if (a instanceof a_meas && b instanceof a_meas && a.unitss === b.unitss) {
        let c = a.clone();
        return c.mag = a.mag - b.mag, c;
    }
    return TRAP_ERR && internal_err("bad arg"), ERR;
};

export function mul(a, b) {
    let a_is_num = "number" == typeof a, b_is_num = "number" == typeof b;
    if (a_is_num && b_is_num) return Number.isNaN(a) || Number.isNaN(b) ? (TRAP_ERR && internal_err("bad arg"), ERR) : (a === Y ? a = 1 : a === N && (a = 0), b === Y ? b = 1 : b === N && (b = 0), 0 === a || 0 === b ? 0 : a === U || b === U ? U : a * b);
    let cm, a_is_mea = a instanceof a_meas, b_is_mea = b instanceof a_meas;
    if (a_is_mea && b_is_mea) {
        (cm = new a_meas()).family = U, cm.mag = a.mag * b.mag, cm.unit = U;
        let term, ax = a_unitxx.str_to_unitxx(a.unitss), bx = a_unitxx.str_to_unitxx(b.unitss);
        for (term of bx) ax.add_unit_term(term, 1);
        return cm.unitss = ax.unitxx_to_str(), cm;
    }
    return a_is_num && b_is_mea ? is_err_enum_b(a) ? (TRAP_ERR && internal_err("bad arg"), ERR_MEAS) : (cm = b.clone(), a == Y || (cm.mag = a == N || 0 == a ? 0 : a === U ? U : b.mag * a), cm) : a_is_mea && b_is_num ? is_err_enum_b(b) ? (TRAP_ERR && internal_err("bad arg"), 
    ERR_MEAS) : (cm = a.clone(), b == Y || (cm.mag = b == N || 0 == b ? 0 : b === U ? U : a.mag * b), cm) : (TRAP_ERR && internal_err("bad arg"), ERR);
};

export function div(a, b) {
    let a_is_num = "number" == typeof a, b_is_num = "number" == typeof b;
    if (a_is_num && b_is_num) {
        if (0 === a) return 0;
        if (is_err_enum_b(a) || is_err_enum_b(b)) return TRAP_ERR && internal_err("bad arg"), ERR;
        if (a === U || b === U) return U;
        let cn;
        return cn = a / b, Number.isNaN(cn) ? (TRAP_ERR && internal_err("bad arg"), ERR) : cn;
    }
    let cm, term, a_is_mea = a instanceof a_meas, b_is_mea = b instanceof a_meas;
    if (a_is_mea && b_is_mea) {
        if ((cm = new a_meas()).family = U, cm.unit = U, 0 === a.mag) cm.mag = 0; else if (cm.mag = a.mag / b.mag, Number.isNaN(cm.mag)) return ERR_MEAS;
        let ax = str_to_unitxx(a.unitss), bx = str_to_unitxx(b.unitss);
        for (term of bx) ax.add_unit_term(term, 1);
        return cm.unitss = ax.unitxx_to_str(), cm;
    }
    if (a_is_num && b_is_mea) {
        if (is_err_enum_b(a)) return TRAP_ERR && internal_err("bad arg"), ERR_MEAS;
        if (0 === a) return 0;
        if (a === U) return U;
        if ((cm = new a_meas()).family = U, cm.unit = U, 0 === a) cm.mag = 0; else if (cm.mag = a / b.mag, Number.isNaN(cm.mag)) return ERR_MEAS;
        let nmx = str_to_unitxx(b.unitss);
        for (term of nmx) term.num = -term.num;
        return cm.unitss = nmx.unitxx_to_str(), cm;
    }
    return a_is_mea && b_is_num ? is_err_enum_b(b) ? (TRAP_ERR && internal_err("bad arg"), ERR) : b === U ? U : ((cm = a.clone()).mag = a.mag / b, Number.isNaN(cm.mag) ? ERR_MEAS : cm) : (TRAP_ERR && internal_err("bad arg"), 
    ERR);
};

export function exp(a, b, c) {
    return is_err_enum_b(a) || is_err_enum_b(b) || is_err_enum_b(c) ? ERR : a == U || b == U || c == U ? U : Math.pow(a, b / c);
};

export function cat(...args) {
    var result = "";
    for (let arg of args) {
        if (arg == ERR_STR) return ERR_STR;
        null != arg && "" != arg && (result += arg);
    }
    return result;
};

export function negate(a) {
    return is_err_enum_b(a) ? (TRAP_ERR && internal_err("bad arg"), ERR) : a === U ? U : -a;
};

export function meas(arg_mag, arg_unitx, arg_familyx) {
    let factor, convfunc, result = new a_meas();
    return result.family = arg_familyx, result.unit = arg_unitx, arg_unitx !== U ? (result.unitss = gets(families, arg_familyx, F_fam_dim), (factor = getn(families, arg_familyx, F_fam_units, arg_unitx, F_unit_factor)) === U ? (convfunc = get_func(families, arg_familyx, F_fam_units, arg_unitx, F_unit_to_base), 
    result.mag = convfunc.code(arg_mag)) : result.mag = 1 === factor ? arg_mag : mul(arg_mag, factor)) : result.mag = arg_mag, result;
};

export function negate_meas(a) {
    (void 0).mag = negate(a.mag), (void 0).family = a.family, (void 0).unit = a.unit, (void 0).unitss = a.unitss;
};

export function mul_meas_n(a, b) {
    let result = a.clone();
    return result.mag = mul(a.mag, b), result;
};

export function not4(a) {
    return a === Y ? N : a === N ? Y : a === U ? U : ERR;
};

export function or4(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) return ERR;
    if (a == U || b == U) return U;
    if (a === Y) {
        if (b === Y || b === N) return Y;
    } else if (a === N) {
        if (b === Y) return Y;
        if (b === N) return N;
    }
    return ERR;
};

export function and4(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) return ERR;
    if (a == U || b == U) return U;
    if (a === Y) {
        if (b === Y) return Y;
        if (b === N) return N;
    } else if (a === N && (b === Y || b === N)) return N;
    return ERR;
};

export function xor4(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) return ERR;
    if (a == U || b == U) return U;
    if (a === Y) {
        if (b === Y) return N;
        if (b === N) return Y;
    } else if (a === N) {
        if (b === Y) return Y;
        if (b === N) return N;
    }
    return ERR;
};

export function xor2(a, b) {
    return a === Y && b === N || a === N && b === Y;
};

export function val_type(a) {
    if ("number" == typeof a) return Number.isNaN(a) ? TYPE_ERR : a == U ? TYPE_U : is_enum_b(a) ? TYPE_ENUM : TYPE_NUM;
    if ("string" == typeof a) return a == ERR_STR ? TYPE_ERR : TYPE_STR;
    if (a instanceof a_meas) return Number.isNaN(a.mag) ? TYPE_ERR : a.mag == U ? TYPE_U : TYPE_MEAS;
    if (a instanceof a_path) return TYPE_PTR;
    if (a instanceof a_tree) return TYPE_TREE;
    if (a instanceof a_image) return TYPE_IMAGE;
    if (a instanceof a_sound) return TYPE_SOUND;
    if (a instanceof a_function) return TYPE_FUNC;
    if (a instanceof ByteArray) return TYPE_BYTES;
    if (a instanceof Object) return TYPE_OBJECT;
    if (null == a) return TYPE_U;
    if (CHECKS) throw new Error("unknown type");
    return TYPE_U;
};

export function lt4(a, b) {
    let typea = val_type(a), typeb = val_type(b);
    if (typea == TYPE_ERR || typeb == TYPE_ERR) return ERR;
    if (typea == TYPE_U || typeb == TYPE_U) return U;
    if (typea != typeb) return ERR;
    switch (typea) {
      case TYPE_NUM:
        return a < b ? Y : N;

      case TYPE_MEAS:
        return Number.isNaN(a.mag) || Number.isNaN(b.mag) || a.unitss != b.unitss ? ERR : a.mag < b.mag ? Y : N;

      case TYPE_STR:
        return a < b ? Y : N;

      default:
        return ERR;
    }
};

export function le4(a, b) {
    let typea = val_type(a), typeb = val_type(b);
    if (typea == TYPE_ERR || typeb == TYPE_ERR) return ERR;
    if (typea == TYPE_U || typeb == TYPE_U) return U;
    if (typea != typeb) return ERR;
    switch (typea) {
      case TYPE_NUM:
        return a <= b ? Y : N;

      case TYPE_MEAS:
        return Number.isNaN(a.mag) || Number.isNaN(b.mag) || a.unitss != b.unitss ? ERR : a.mag <= b.mag ? Y : N;

      case TYPE_STR:
        return a <= b ? Y : N;

      default:
        return ERR;
    }
};

export function ge4(a, b) {
    let typea = val_type(a), typeb = val_type(b);
    if (typea == TYPE_ERR || typeb == TYPE_ERR) return ERR;
    if (typea == TYPE_U || typeb == TYPE_U) return U;
    if (typea != typeb) return ERR;
    switch (typea) {
      case TYPE_NUM:
        return a >= b ? Y : N;

      case TYPE_MEAS:
        return Number.isNaN(a.mag) || Number.isNaN(b.mag) || a.unitss != b.unitss ? ERR : a.mag >= b.mag ? Y : N;

      case TYPE_STR:
        return a >= b ? Y : N;

      default:
        return ERR;
    }
};

export function gt4(a, b) {
    let typea = val_type(a), typeb = val_type(b);
    if (typea == TYPE_ERR || typeb == TYPE_ERR) return ERR;
    if (typea == TYPE_U || typeb == TYPE_U) return U;
    if (typea != typeb) return ERR;
    switch (typea) {
      case TYPE_NUM:
        return a > b ? Y : N;

      case TYPE_MEAS:
        return Number.isNaN(a.mag) || Number.isNaN(b.mag) || a.unitss != b.unitss ? ERR : a.mag > b.mag ? Y : N;

      case TYPE_STR:
        return a > b ? Y : N;

      default:
        return ERR;
    }
};

export function eq4(a, b) {
    var typea = val_type(a), typeb = val_type(b);
    switch (typea) {
      case TYPE_NUM:
      case TYPE_ENUM:
        return a == b ? Y : N;

      case TYPE_MEAS:
        return Number.isNaN(a.mag) || Number.isNaN(b.mag) ? ERR : a.unitss == b.unitss && a.mag == b.mag ? Y : N;

      case TYPE_STR:
        return a == b ? Y : N;

      case TYPE_PTR:
        return is_path_eq(a, b) ? Y : N;

      case TYPE_ERR:
        return typeb == TYPE_ERR ? Y : N;

      case TYPE_U:
        return typeb == TYPE_U ? Y : N;

      case TYPE_OBJECT:
        return a == b ? Y : N;

      default:
        if (CHECKS) throw new Error("bad type");
        return ERR;
    }
};

export function ne4(a, b) {
    var typea = val_type(a), typeb = val_type(b);
    switch (typea) {
      case TYPE_NUM:
      case TYPE_ENUM:
        return a == b ? N : Y;

      case TYPE_MEAS:
        return Number.isNaN(a.mag) || Number.isNaN(b.mag) ? ERR : a.unitss == b.unitss && a.mag == b.mag ? N : Y;

      case TYPE_STR:
        return a == b ? N : Y;

      case TYPE_PTR:
        return is_path_eq(a, b) ? N : Y;

      case TYPE_ERR:
        return typeb == TYPE_ERR ? N : Y;

      case TYPE_U:
        return typeb == TYPE_U ? N : Y;

      case TYPE_OBJECT:
        return a == b ? N : Y;

      default:
        return ERR;
    }
};

export function lt2(a, b) {
    return lt4(a, b) == Y;
};

export function le2(a, b) {
    return le4(a, b) == Y;
};

export function ge2(a, b) {
    return ge4(a, b) == Y;
};

export function gt2(a, b) {
    return gt4(a, b) == Y;
};

export function eq2(a, b) {
    return eq4(a, b) == Y;
};

export function ne2(a, b) {
    return eq4(a, b) != Y;
};

export function args_to_path(nskip, list) {
    let path, ix, startx, sub, link, first = list[0], nparms = list.length - nskip;
    if (first instanceof a_path) {
        if (path = first.clone(), 1 == nparms) return path;
        startx = 1;
    } else first instanceof a_tree ? (path = new a_path(first), startx = 1) : argument_err("bad arg");
    for (ix = startx; ix < nparms; ix++) ((sub = list[ix]) == U || Number.isNaN(sub)) && (path.key.push(sub), argument_err("not allowed to use U or ERR as a subscript, path=" + str.to_str(path))), sub == FOL ? 0 == path.key.length || (null != (link = path_getv(path, EF_VAL_IS_PATH)) && link != ERR_PATH || argument_err("indirecting on something that is not a pointer, path=" + str.to_str(path)), 
    path = link) : path.key.push(sub);
    return path;
};

export function adr(first, ...list) {
    let path, ix, sub, link, nparms = list.length;
    if (first instanceof a_path) {
        if (path = first.clone(), 0 == nparms) return path;
    } else first instanceof a_tree ? path = new a_path(first) : argument_err("bad arg");
    for (ix = 0; ix < nparms; ix++) ((sub = list[ix]) == U || Number.isNaN(sub)) && argument_err("not allowed to use U or ERR as a subscript"), sub == FOL ? 0 == path.key.length || (null != (link = path_getv(path, EF_VAL_IS_PATH)) && link != ERR_PATH || argument_err("indirecting on something that is not a pointer"), 
    path = link) : path.key.push(sub);
    return path;
};

export function pathh(base_name, ...levels) {
    let l, i, destx;
    for (l = new a_pathh(str.str_hash_fnv(base_name)), destx = 0, i = 0; i < levels.length; i++) l.key[destx] = levels[i], destx += 1;
    return l;
};

export function addr_append(arg_basis, level1, ...others) {
    let newleaf = new a_path();
    newleaf.base = arg_basis.base, newleaf.key = arg_basis.key.concat(), newleaf.key.push(level1);
    for (let i = 0; i < others.length; i++) newleaf.key.push(others[i]);
    return newleaf;
};

export function addr_head(src, ndrop) {
    let result;
    return 0 === ndrop ? src : ((result = src.clone()).key.length = result.key.length - ndrop, result);
};

export function addr_tail(path, nsteps) {
    let ix = path.key.length - 1 - nsteps;
    return ix >= 0 ? path.key[ix] : (CHECKS && argument_err("gone off the head of the path"), U);
};

export function alloc_derived(loc, ...args) {
    let elem, pathx, path, lx;
    for (lx = (pathx = path_create_pathx(path = args_to_path(1, args))).lev.length - 1, (elem = pathx.lev[lx].elem).derivef = args[args.length - 1], elem.eflags |= EF_DIRTY_OR_DERIVED, g_currseq += 1, TRACE_SEQ && logg(str.conv("+SEQ {} in alloc_derived {}", g_currseq, path)); lx >= 0; ) pathx.lev[lx].node.seq = g_currseq, 
    lx -= 1;
};

export function exists(...args) {
    let pathx = path_to_pathx(args_to_path(0, args));
    return null !== pathx && pathx.exists;
};

export function tog(val) {
    return val = val == Y ? N : val == N || val == U ? Y : ERR;
};

export function toggle(module, loc, ...args) {
    let pathx = path_create_pathx(args_to_path(0, args)), val = leaf_getv(pathx, EF_VAL_IS_NUM);
    val = val == Y ? N : val == N || val == U ? Y : ERR, TRACE_LOG && 0 !== loc && logg(">> toggle"), setv_x(module, loc, pathx, val);
};

export function touch(module, loc, path) {
    if (null != path && 0 != (path.base.eflags & NF_STATEFUL)) {
        var node = path_to_node(path);
        if (null != node) {
            if (TRACE_SETVAL && "$" != path.base.label.substr(0, 1) && logg(str.conv("  touch {}", path)), 0 !== loc) {
                var pathx = path_to_pathx(path);
                micro_add_delta(a_micro.LOGK_TOUCH, module, loc, pathx, null, null);
            }
            node.seq = ++g_currseq, TRACE_SEQ && logg(str.conv("+SEQ {} in touch, path={}", g_currseq, path));
        }
    }
};

export function inc(module, loc, ...args) {
    let pathx = path_create_pathx(args_to_path(0, args)), val = leaf_getv(pathx, EF_VAL_IS_NUM);
    val = val == U ? 1 : add(val, 1), TRACE_LOG && 0 !== loc && logg(">> inc"), setv_x(module, loc, pathx, val);
};

export function dec(module, loc, ...args) {
    let pathx = path_create_pathx(args_to_path(0, args)), val = leaf_getv(pathx, EF_VAL_IS_NUM);
    val = val == U ? -1 : sub(val, 1), TRACE_LOG && 0 !== loc && logg(">> dec"), setv_x(module, loc, pathx, val);
};

export function tree_lit(module, loc, ...args) {
    let argx, subscript, val, mytree = new a_tree(_M, "$tree_lit"), mypath = adr(mytree), nargs = args.length;
    for (argx = 0; argx < nargs; ) subscript = args[argx], argx += 1, subscript === POP ? mypath.key.pop() : subscript == VAL || subscript == VNP ? (val = args[argx], argx += 1, val instanceof a_tree ? merge_tree(module, loc, val, mypath) : val != U && path_setv(module, loc, mypath, val), 
    subscript == VAL && mypath.key.pop()) : mypath.key.push(subscript);
    return mytree;
};

export function merge_lit(module, loc, dest, ...args) {
    let mypath, argx, subscript, val, nargs = args.length;
    for (dest instanceof a_path ? mypath = dest.clone() : dest instanceof a_tree ? mypath = adr(dest) : argument_err("expected a_tree, or a_path"), argx = 0; argx < nargs; ) {
        if (void 0 == (subscript = args[argx])) debugger;
        if (argx += 1, subscript === POP) mypath.key.pop(); else if (subscript == VAL || subscript == VNP) {
            if (void 0 == (val = args[argx])) debugger;
            argx += 1, val instanceof a_tree ? merge_tree(module, loc, val, mypath) : val != U && path_setv(module, loc, mypath, val), subscript == VAL && mypath.key.pop();
        } else mypath.key.push(subscript);
    }
};

export function table_litP(...args) {
    return new a_path(table_lit.apply(null, args));
};

export function table_lit(...args) {
    let argx, field, val, fieldx, rowx, mytree = new a_tree(_M, "$table_lit"), nargs = args.length, fields = [];
    for (argx = 0; field = args[argx], argx += 1, field !== VAL; ) fields.push(field);
    for (fieldx = 0, rowx = 1; argx < nargs; ) val = args[argx], argx += 1, val === VAL ? (rowx += 1, fieldx = 0) : (setv(_M, 0, mytree, rowx, fields[fieldx], val), fieldx += 1);
    return mytree;
};

export function pathx_to_path(pathx) {
    let i, path = new a_path(pathx.lev[0].node);
    for (i = 1; i <= pathx.lastx; i++) path.key.push(pathx.lev[i].sub);
    return path;
};

export function path_to_pathx(path) {
    let currlevel, targsub, index, px = new a_pathx(), prevlevel = px.lev[0], lx = 0;
    for (targsub of (px.basepath = path, prevlevel.node = path.base, prevlevel.sub = U, prevlevel.subx = -1, path.key)) {
        if (TRAP_BAD_SUBSCRIPTS && targsub === U && internal_err("bad subscript"), index = find_subscript(targsub, prevlevel.node, 0 == (path.base.eflags & NF_UNSORTED)), !g_subscript_found) return px;
        lx += 1, (currlevel = px.lev[lx]).sub = targsub, currlevel.subx = index, currlevel.node = prevlevel.node.children[index], prevlevel = currlevel;
    }
    return px.lastx = lx, px.exists = !0, px;
};

export function find_subscript(targsub, node, sorted) {
    let sub, totn, i, lo, hi;
    if (g_subscript_found = !1, null === node.children) return 0;
    if (0 === (totn = node.children.length)) return 0;
    if (sorted) {
        for (lo = 0, hi = totn - 1; lo <= hi; ) {
            if (TRACE_SEARCH && logg(str.conv("binary search, lo={}, hi={}, totn={}", lo, hi, totn)), i = (lo + hi) / 2 >> 0, (sub = node.children[i].sub) === targsub) return g_subscript_found = !0, TRACE_SEARCH && logg(str.conv("..found, i={}", i)), 
            i;
            targsub < sub ? hi = i - 1 : lo = i + 1;
        }
        targsub > node.children[i].sub && (i += 1);
    } else {
        for (TRACE_SEARCH && logg(str.conv("linear search, totn={}", totn)), i = 0; i < totn; i++) if (node.children[i].sub === targsub) return g_subscript_found = !0, TRACE_SEARCH && logg(str.conv("..found, i={}", i)), 
        i;
        i = totn;
    }
    return TRACE_SEARCH && logg(str.conv("..not found, i={}", i)), i;
};

export function path_create_pathx(path) {
    let currlevel, targsub, index, px = new a_pathx(), prevlevel = px.lev[0], lx = 0, added = !1, mybase = path.base;
    for (targsub of (px.basepath = path, prevlevel.node = mybase, prevlevel.sub = U, prevlevel.subx = -1, path.key)) index = find_subscript(targsub, prevlevel.node, 0 == (mybase.eflags & NF_UNSORTED)), g_subscript_found || (null === prevlevel.node.children && (prevlevel.node.children = []), 
    prevlevel.node.children.splice(index, 0, new a_tree(_M)), prevlevel.node.children[index].sub = targsub, prevlevel.node.seq = g_currseq + 1, added = !0), lx += 1, (currlevel = px.lev[lx]).sub = targsub, 
    currlevel.subx = index, currlevel.node = prevlevel.node.children[index], prevlevel = currlevel;
    return added && mybase.eflags & NF_STATEFUL && (g_currseq += 1, TRACE_SEQ && logg(str.conv("+SEQ {} in path_create_pathx {}", g_currseq, path))), px.lastx = lx, px.exists = !0, px;
};

export function path_to_node(path, depend = !1) {
    if (!(path instanceof a_path)) debugger;
    var node, px = path_to_pathx(path);
    return node = null !== px && px.exists ? px.lev[px.lastx].node : null, depend && null != g_curr_block && path.base.eflags & NF_STATEFUL && add_path_dependency(path, node), node;
};

export function node_get_type(node) {
    switch (node.eflags & EF_MASK_TYPE) {
      case EF_VAL_IS_U:
        return TYPE_U;

      case EF_VAL_IS_ERR:
        return TYPE_ERR;

      case EF_VAL_IS_NUM:
        return node.val === Y || node.val === N ? TYPE_YESNO : TYPE_NUM;

      case EF_VAL_IS_STR:
        return TYPE_STR;

      case EF_VAL_IS_IMAGE:
        return TYPE_IMAGE;

      case EF_VAL_IS_FUNC:
        return TYPE_FUNC;

      case EF_VAL_IS_PATH:
        return TYPE_PTR;

      case EF_VAL_IS_MEAS:
        return TYPE_MEAS;

      case EF_VAL_IS_SOUND:
        return TYPE_SOUND;

      case EF_VAL_IS_BYTES:
        return TYPE_BYTES;

      case EF_VAL_IS_OBJECT:
        return TYPE_OBJECT;

      default:
        internal_err("bad leaf type");
    }
    return TYPE_ERR;
};

function U_of_type(expected_type) {
    return 0 === expected_type || expected_type & TYPES_WHERE_U_NUM ? U : null;
}

function ERR_of_type(expected_type) {
    switch (expected_type) {
      case EF_VAL_IS_NUM:
        return ERR;

      case EF_VAL_IS_STR:
        return ERR_STR;

      case EF_VAL_IS_IMAGE:
        return ERR_IMAGE;

      case EF_VAL_IS_FUNC:
        return ERR_FUNC;

      case EF_VAL_IS_PATH:
        return ERR_PATH;

      case EF_VAL_IS_MEAS:
        return ERR_MEAS;

      case EF_VAL_IS_SOUND:
        return ERR_SOUND;

      case EF_VAL_IS_GRAD:
        return ERR_GRAD;

      case EF_VAL_IS_BITS:
        return ERR_BITS;

      case EF_VAL_IS_BYTES:
        return ERR_BYTES;

      case EF_VAL_IS_COLOR:
        return ERR_COLOR;

      case EF_VAL_IS_DATE:
        return ERR_DATE;

      default:
        internal_err("bad type");
    }
}

export function get_generic(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), 0);
};

export function getn(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), EF_VAL_IS_NUM);
};

export function gets(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), EF_VAL_IS_STR);
};

export function get_ptr(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), EF_VAL_IS_PATH);
};

export function get_image(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), EF_VAL_IS_IMAGE);
};

export function get_meas(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), EF_VAL_IS_MEAS);
};

export function get_func(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), EF_VAL_IS_FUNC);
};

export function get_sound(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), EF_VAL_IS_SOUND);
};

export function get_object(...args) {
    return leaf_getv(path_to_pathx(args_to_path(0, args)), EF_VAL_IS_OBJECT);
};

export function path_getv(path, expected_type) {
    return leaf_getv(path_to_pathx(path), expected_type);
};

export function add_path_dependency(path, node) {
    let dep = new a_dependency();
    dep.path = path.clone(), dep.seq = null != node ? node.seq : 0, TRACE_IMPLIED && logg(str.conv("--adding pathx add_path_dependency: {path} of seq {} in {}", dep.path, dep.seq, g_curr_block.blabel)), g_curr_block.usesz.push(dep);
};

export function add_pathx_dependency(pathx) {
    let dep = new a_dependency();
    dep.path = pathx.basepath.clone(), pathx.exists ? dep.seq = pathx.lev[pathx.lastx].node.seq : dep.seq = 0, TRACE_IMPLIED && logg(str.conv("--adding pathx dependency: {path} of seq {} in {}", dep.path, dep.seq, g_curr_block.blabel)), 
    g_curr_block.usesz.push(dep);
};

export function add_node_dependency(node) {
    let dep = new a_dependency();
    dep.path = adr(node), dep.seq = node.seq, TRACE_IMPLIED && logg(str.conv("--adding node dependency: {path} of seq {} in {}", dep.path, dep.seq, g_curr_block.blabel)), g_curr_block.usesz.push(dep);
};

export function leaf_getv(pathx, expected_type, add_dependency = !0) {
    if (null === pathx) return U_of_type(expected_type);
    if (null != g_curr_block && add_dependency && pathx.basepath.base.eflags & NF_STATEFUL && add_pathx_dependency(pathx), !pathx.exists) return U_of_type(expected_type);
    let leaf = pathx.lev[pathx.lastx].node;
    return (EF_DIRTY_OR_DERIVED & leaf.eflags) === EF_DIRTY_OR_DERIVED && (internal_err("not yet"), leaf.eflags &= ~EF_IS_DIRTY), 0 == expected_type || 0 != (leaf.eflags & expected_type) ? 0 != (leaf.eflags & EF_VAL_IS_PATH) ? leaf.val.clone_to_hard() : leaf.val : 0 != (leaf.eflags & EF_VAL_IS_U) ? U_of_type(expected_type) : 0 != (leaf.eflags & EF_VAL_IS_ERR) ? ERR_of_type(expected_type) : (TRAP_TYPE_MISMATCH && internal_err("type mismatch on get"), 
    ERR_of_type(expected_type));
};

export function setv(mod, loc, ...args) {
    path_setv(mod, loc, args_to_path(1, args), args[args.length - 1]);
};

export function path_setv(mod, loc, path, val) {
    var pathx;
    if (TRACE_LOG && 0 !== loc && logg(str.conv(">> path_setv {}={}", path, val)), val == U) {
        if (null === (pathx = path_to_pathx(path)) || !pathx.exists) return;
        setv_x(mod, loc, pathx, U), pathx.lastx > 0 && null == pathx.lev[pathx.lastx].node.children && orphan_upwards(pathx);
    } else setv_x(mod, loc, pathx = path_create_pathx(path), val);
};

function setv_x(mod, loc, pathx, newval) {
    let changed = !1, elem = pathx.lev[pathx.lastx].node, oldval = elem.val, oldflags = elem.eflags, newval_type = val_type(newval), is_stateful = pathx.basepath.base.eflags & NF_STATEFUL && loc >= 0;
    switch (newval_type) {
      case TYPE_U:
        0 == (oldflags & EF_VAL_IS_U) && (changed = !0, elem.val = U, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_U);
        break;

      case TYPE_ERR:
        0 == (oldflags & EF_VAL_IS_ERR) && (changed = !0, elem.val = ERR, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_ERR);
        break;

      case TYPE_NUM:
      case TYPE_ENUM:
        0 != (oldflags & EF_VAL_IS_NUM) && oldval === newval || (elem.val = newval, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_NUM, changed = !0);
        break;

      case TYPE_STR:
        0 != (oldflags & EF_VAL_IS_STR) && oldval === newval || (elem.val = newval, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_STR, changed = !0);
        break;

      case TYPE_PTR:
        0 != (oldflags & EF_VAL_IS_PATH) && is_path_eq2(oldval, newval) || (newval.base instanceof a_tree ? elem.val = newval.clone_to_soft() : elem.val = newval, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_PATH, 
        changed = !0);
        break;

      case TYPE_MEAS:
        0 != (oldflags & EF_VAL_IS_MEAS) && is_meas_eq(oldval, newval) || (changed = !0, elem.val = newval, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_MEAS);
        break;

      case TYPE_IMAGE:
        0 != (oldflags & EF_VAL_IS_STR) && oldval === newval || (changed = !0, elem.val = newval, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_IMAGE);
        break;

      case TYPE_FUNC:
        0 != (oldflags & EF_VAL_IS_FUNC) && oldval === newval || (changed = !0, elem.val = newval, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_FUNC);
        break;

      case TYPE_SOUND:
        0 != (oldflags & EF_VAL_IS_SOUND) && oldval === newval || (changed = !0, elem.val = newval, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_SOUND);
        break;

      case TYPE_OBJECT:
        0 != (oldflags & EF_VAL_IS_OBJECT) && oldval === newval || (changed = !0, elem.val = newval, elem.eflags = oldflags & EF_CLEAR_TYPE | EF_VAL_IS_OBJECT);
        break;

      default:
        throw new Error("bad type");
    }
    let mybase = pathx.basepath.base;
    return TRACE_SETVAL && is_stateful && "$" != mybase.label.substr(0, 1) && logg(changed ? str.conv("  setval {}={}, was {}", pathx, newval, oldval) : str.conv("  setval {}={}, unchanged", pathx, oldval)), 
    changed && is_stateful && (loc > 0 && micro_add_delta(LOGK_DELTA, mod, loc, pathx, oldval, newval), g_currseq += 1, TRACE_SEQ && logg(str.conv("+SEQ {} in setv, path={}", g_currseq, pathx)), elem.seq = g_currseq, 
    elem.markf !== NULL_FUNC && elem.markf(pathx)), changed;
}

export function append_val(mod, loc, val, dest) {
    let sub = tree_next_hi(dest, !1);
    return setv(mod, loc, dest, sub, val), sub;
};

export function prepend_val(mod, loc, val, dest) {
    let sub = tree_next_lo(dest, !1);
    return setv(mod, loc, dest, sub, val), sub;
};

export function insert_val(mod, loc, val, dest) {
    let bx = path_to_pathx(dest);
    if (null != bx) if (bx.exists && 0 !== bx.lastx && is_numeric(bx.lev[bx.lastx].sub) === Y) {
        let sub, temp, startx = bx.lev[bx.lastx].subx, startsub = bx.lev[bx.lastx].sub, ncon = count_consec(bx.lev[bx.lastx - 1].node, startx), src = dest.clone(), dst = dest.clone(), lastkey = src.key.length - 1;
        for (;ncon > 0; ) sub = startsub + ncon, src.key[lastkey] = sub - 1, dst.key[lastkey] = sub, path_setv(mod, loc, dst, temp = get_generic(src)), ncon--;
        setv_x(mod, loc, bx, val);
    } else setv(mod, loc, dest, val);
};

function is_path_in_path(a, b) {
    if (TRACE_INPATH && console.log(str.conv("is_path_in_path, a={}, b={}", a, b)), a.base != b.base) return TRACE_INPATH && console.log("  failed because base mismatch"), !1;
    let blen = b.key.length;
    if (a.key.length < blen) return TRACE_INPATH && console.log("  failed because obvious above"), !1;
    for (let i = 0; i < blen; i++) if (a.key[i] != b.key[i]) return TRACE_INPATH && console.log(str.conv("  failed because key {} mismatch", i)), !1;
    return TRACE_INPATH && console.log("  INSIDE"), !0;
}

export function append_tree(mod, loc, a, b) {
    let sub = tree_next_hi(b, !1);
    return merge_tree(mod, loc, a, addr_append(b, sub)), sub;
};

export function prepend_tree(mod, loc, a, b) {
    let sub = tree_next_lo(b, !1);
    return merge_tree(mod, loc, a, addr_append(b, sub)), sub;
};

export function merge_tree(mod, loc, a, b) {
    let src_path;
    if (a instanceof a_path ? src_path = a : a instanceof a_tree ? src_path = adr(a) : argument_err("bad arg"), is_path_eq(src_path, b)) return;
    let temp, tempp, ax = path_to_pathx(src_path);
    if (null === ax || !ax.exists) return;
    let is_logged = src_path.base.eflags & NF_STATEFUL && loc > 0;
    is_logged && micro_add_marker(MARK_MERGE_BEG, mod, loc), (is_path_in_path(src_path, b) || is_path_in_path(b, src_path)) && (tempp = adr(temp = new a_tree(_M, "$merge_tree")), merge_tree(_M, 0, src_path, tempp), 
    ax = path_to_pathx(tempp)), merge_x(mod, loc, ax, path_create_pathx(b), 0), is_logged && micro_add_marker(MARK_MERGE_END, mod, loc);
};

export function copy_tree(mod, loc, a, b) {
    let src_path;
    if (a instanceof a_path ? src_path = a : a instanceof a_tree ? src_path = adr(a) : argument_err("bad arg"), is_path_eq(src_path, b)) return;
    let temp, tempp, ax = path_to_pathx(src_path);
    if (null === ax || !ax.exists) return;
    let is_logged = src_path.base.eflags & NF_STATEFUL && loc > 0;
    is_logged && micro_add_marker(MARK_COPY_BEG, mod, loc), (is_path_in_path(src_path, b) || is_path_in_path(b, src_path)) && (merge_tree(mod, loc, src_path, tempp = adr(temp = new a_tree(_M, "$copy_tree"))), 
    ax = path_to_pathx(tempp));
    let bx = path_to_pathx(b);
    bx.exists ? (trunc_x(mod, loc, bx), merge_x(mod, loc, ax, bx = path_create_pathx(b), 0)) : merge_x(mod, loc, ax, bx = path_create_pathx(b), 0), is_logged && micro_add_marker(MARK_COPY_END, mod, loc);
};

export function move_tree(mod, loc, a, b) {
    let src_path;
    if (a instanceof a_path ? src_path = a : a instanceof a_tree ? src_path = adr(a) : argument_err("bad arg"), is_path_eq(src_path, b)) return;
    let bx, temp, tempp, ax = path_to_pathx(src_path);
    if (null === ax || !ax.exists) return;
    let is_logged = (src_path.base.eflags & NF_STATEFUL || b.base.eflags & NF_STATEFUL) && loc > 0;
    is_logged && micro_add_marker(MARK_MOVE_BEG, mod, loc), is_path_in_path(src_path, b) || is_path_in_path(b, src_path) ? (merge_tree(mod, loc, src_path, tempp = adr(temp = new a_tree(_M, "$move_tree"))), 
    trunc_x(mod, loc, ax), bx = path_create_pathx(b), merge_x(mod, loc, path_to_pathx(tempp), bx, 0)) : (merge_x(mod, loc, ax, bx = path_create_pathx(b), 0), trunc_x(mod, loc, ax)), is_logged && micro_add_marker(MARK_MOVE_END, mod, loc);
};

export function swap_tree(mod, loc, a, b) {
    if (is_path_eq(a, b)) return;
    let temp, ax, bx, tx;
    if (is_path_in_path(a, b) || is_path_in_path(b, a)) return void (TRAP_ERR && internal_err("cannot swap overlapping trees"));
    if (ax = path_to_pathx(a), bx = path_to_pathx(b), !ax.exists && !bx.exists) return;
    if (null === ax || null === bx) return void (TRAP_ERR && internal_err("bad swap"));
    tx = path_to_pathx(adr(temp = new a_tree(_M, "$swap_tree")));
    let is_logged = (NF_STATEFUL & a.base.eflags || NF_STATEFUL & b.base.eflags) && loc > 0;
    is_logged && micro_add_marker(MARK_SWAP_BEG, mod, loc), merge_x(mod, loc, ax, tx, 0), trunc_x(mod, loc, ax), merge_x(mod, loc, bx, ax = path_create_pathx(a), 0), trunc_x(mod, loc, bx), merge_x(mod, loc, tx, bx = path_create_pathx(b), 0), 
    is_logged && micro_add_marker(MARK_SWAP_END, mod, loc), temp = null, tx = null;
};

export function insert_tree(mod, loc, a, b) {
    let bx = path_to_pathx(b);
    if (TRACE_INSERT && logg(str.conv(">> insert_tree, src={}, dest={}, exists={}", a, b, bx.exists)), bx.exists && 0 !== bx.lastx && is_numeric(bx.lev[bx.lastx].sub) === Y) {
        let sub, startx = bx.lev[bx.lastx].subx, startsub = bx.lev[bx.lastx].sub, ncon = count_consec(bx.lev[bx.lastx - 1].node, startx), src = b.clone(), dst = b.clone(), lastkey = src.key.length - 1;
        for (;ncon > 0; ) sub = startsub + ncon, src.key[lastkey] = sub - 1, dst.key[lastkey] = sub, TRACE_INSERT && logg(str.conv("  ncon={}, sub={}, src={}, dst={}", ncon, sub, src, dst)), copy_tree(mod, loc, src, dst), 
        ncon--;
        copy_tree(mod, loc, a, b);
    } else merge_tree(mod, loc, a, b);
};

export function remove_tree(mod, loc, b) {
    internal_err("not yet updated");
    let bx = path_to_pathx(b);
    if (null === bx) return;
    let lastlev = bx.lev[bx.lastx], deletedsub = lastlev.sub;
    if (0 === bx.lastx || is_numeric(deletedsub) !== Y) return;
    TRACE_LOG && 0 !== loc && logg(str.conv(">> remove_tree, path={}", b));
    let deletedsubx = lastlev.subx, ncon = count_consec(lastlev.node, deletedsubx);
    ncon > 1 && shift_x(mod, loc, bx, deletedsubx + 1, deletedsub, ncon - 1);
};

export function clear_tree(mod, loc, b) {
    let bx = path_to_pathx(b);
    if (null === bx || !bx.exists) return;
    TRACE_LOG && 0 !== loc && logg(str.conv(">> clear_tree, path={}", b));
    let is_logged = NF_STATEFUL & b.base.eflags && loc > 0;
    is_logged && micro_add_marker(MARK_CLEAR_BEG, mod, loc), trunc_x(mod, loc, bx), is_logged && micro_add_marker(MARK_CLEAR_END, mod, loc);
};

export function trunc_tree(mod, loc, b) {
    let bx = path_to_pathx(b);
    if (null === bx || !bx.exists) return;
    TRACE_LOG && 0 !== loc && logg(str.conv(">> trunc_tree, path={}", b));
    let is_logged = NF_STATEFUL & b.base.eflags && loc > 0;
    is_logged && micro_add_marker(MARK_TRUNC_BEG, mod, loc), trunc_x(mod, loc, bx, !1), is_logged && micro_add_marker(MARK_TRUNC_END, mod, loc);
};

function trunc_x(mod, loc, px, clear_apex = !0) {
    let is_stateful = px.lev[0].node.eflags & NF_STATEFUL, is_logged = loc > 0 && is_stateful, apex_node = px.lev[px.lastx].node;
    if (is_logged) {
        let old_lastx = px.lastx;
        trunc_log(mod, loc, px, 0, clear_apex), px.lastx = old_lastx;
    }
    clear_apex && (apex_node.val = U), apex_node.val == U && px.lastx > 0 ? orphan_upwards(px) : apex_node.children = null;
}

function trunc_log(mod, loc, px, nesting, apex) {
    let node = px.lev[px.lastx].node;
    if (nesting > 0 || apex) {
        let oldval = node.val;
        oldval != U && (TRACE_LOG && logg(str.conv("  atomic trunc {pathx} was {}", px, oldval)), micro_add_delta(LOGK_DELTA, mod, loc, px, oldval, U));
    }
    if (null != node.children) {
        let child;
        px.lastx += 1;
        let curlev = px.lev[px.lastx];
        for (child of node.children) curlev.sub = child.sub, curlev.node = child, trunc_log(mod, loc, px, nesting + 1, !0);
        px.lastx -= 1;
    }
}

function orphan_upwards(px) {
    let up_node;
    for (px.lastx -= 1; px.lastx > 0 && !((up_node = px.lev[px.lastx].node).val != U || up_node.children.length > 1); ) px.lastx -= 1;
    up_node = px.lev[px.lastx].node;
    let subx = px.lev[px.lastx + 1].subx;
    TRACE_LOG && logg(str.conv(" -- orphan upwards, finished at level={}, subx={}", px.lastx, subx)), up_node.children.splice(subx, 1), 0 == up_node.children.length && (up_node.children = null);
}

function merge_x(mod, loc, ax, bx, nesting) {
    let nsrc, srcx, dstx, srcsub, newnode, nextalev, nextblev, val, srcnode = ax.lev[ax.lastx].node, dstnode = bx.lev[bx.lastx].node;
    if ((val = leaf_getv(ax, 0)) != U && setv_x(mod, loc, bx, val), null !== srcnode.children) {
        for (ax.lastx += 1, bx.lastx += 1, nextalev = ax.lev[ax.lastx], nextblev = bx.lev[bx.lastx], null === dstnode.children && (dstnode.children = []), nsrc = srcnode.children.length, srcx = 0; srcx < nsrc; srcx++) srcsub = srcnode.children[srcx].sub, 
        nextalev.node = srcnode.children[srcx], nextalev.subx = srcx, nextalev.sub = srcsub, dstx = find_subscript(nextalev.sub, dstnode, 0 == (bx.lev[0].node.eflags & NF_UNSORTED)), g_subscript_found ? nextblev.node = dstnode.children[dstx] : ((newnode = new a_tree(_M, "$merge_x")).sub = srcsub, 
        dstnode.children.splice(dstx, 0, newnode), nextblev.node = newnode), nextblev.subx = dstx, nextblev.sub = srcsub, merge_x(mod, loc, ax, bx, nesting + 1);
        ax.lastx -= 1, bx.lastx -= 1;
    }
}

export function renum_tree(module, loc, b) {
    let bx = path_to_pathx(b);
    null !== bx && bx.exists && renum_x(module, loc, bx);
};

export function renum_x(module, loc, px) {
    let sub, node = px.lev[px.lastx].node;
    if (null === node.children) return;
    let n, startx = 0, targsub = 1, totn = node.children.length;
    for (;!(startx >= totn) && is_numeric(sub = node.children[startx].sub) === Y; ) sub === targsub ? (startx += 1, targsub += 1) : (shift_x(module, loc, px, startx, targsub, n = count_consec(node, startx)), 
    startx += n, targsub += n);
};

export function shift_x(module, loc, px, startx, newsub, n) {
    let i, node = px.lev[px.lastx - 1].node;
    if (0 != (px.lev[0].node.eflags & NF_STATEFUL)) {
        let oldsub = px.lev[px.lastx].sub;
        TRACE_LOG && logg(str.conv("  atomic shift path={} from subscript {} to {} n:{}", px, oldsub, newsub, n)), TRACE_LOG && logg("logging of shift_x not yet imp");
    }
    for (i = 0; i < n; i++) node.children[startx].sub = newsub, startx += 1, newsub += 1;
};

function count_consec(node, startx) {
    let sub = node.children[startx].sub;
    if (is_numeric(sub) !== Y) return 1;
    let targsub = sub + 1, ix = startx + 1, n = 1, totn = node.children.length;
    for (;!(ix >= totn) && node.children[ix].sub === targsub; ) n += 1, ix += 1, targsub += 1;
    return n;
}

export function is_path_eq(a, b) {
    let i;
    if (null === a) return null == b;
    if (null === b) return !1;
    if (!CHECKS || a.base instanceof a_tree && b.base instanceof a_tree || internal_err("only hard paths"), a.base != b.base) return !1;
    if (a.key.length !== b.key.length) return !1;
    for (i = 0; i < a.key.length; i++) if (a.key[i] !== b.key[i]) return !1;
    return !0;
};

export function is_path_eq2(a, b) {
    let i, a_hash, b_hash;
    if (null === a) return null == b;
    if (null === b) return !1;
    if (a.key.length !== b.key.length) return !1;
    if (a_hash = a.base instanceof a_tree ? a.base.sub : a.base, b_hash = b.base instanceof a_tree ? b.base.sub : b.base, !CHECKS || 0 != a_hash && 0 != b_hash || internal_err("ptr to local tree not permitted"), 
    a_hash !== b_hash) return !1;
    for (i = 0; i < a.key.length; i++) if (a.key[i] !== b.key[i]) return !1;
    return !0;
};

function is_meas_eq(m1, m2) {
    let meas1, meas2;
    return m1 instanceof a_meas && m2 instanceof a_meas && (meas2 = m2, (meas1 = m1).mag === meas2.mag && meas1.unitss === meas2.unitss);
}

export function mark_all_instances(field) {
    TRACE_IMPLIED && logg(str.conv("mark_all_instances, deferring all instances of {n}", field)), g_fields_to_mark.indexOf(field) < 0 && (g_fields_to_mark.push(field), TRACE_IMPLIED && logg(str.conv("  not yet in dirty array, adding {n}", field)));
};

export const WHERE_LOOM = 1 << 30;

export let g_loom = [];

let g_block_animations_otime, g_block_animations = [], g_num_animations = [], g_loom_next_id = 1e4;

export function loom_next_id() {
    return ++g_loom_next_id;
};

export function loom_find_id(id) {
    let lx, len;
    for (len = g_loom.length, lx = 0; lx < len; lx++) if (g_loom[lx].id === id) return lx;
    return -1;
};

export function alloc_loom_elem(options) {
    let currtime, elem = new a_loom_element(), prereq = U, group = U, time = U, delay = U, nreps = 1, interval = U, interval_mon = U, alternate = !1, speed = U, id = U, fadeout = U, hold = U, is_dilated = !0;
    for (let property in options) switch (property) {
      case "delay":
        (delay = options.delay.mag) < 0 && (delay = 0);
        break;

      case "duration":
        interval = options.duration;
        break;

      case "fadeout":
        fadeout = options.fadeout;
        break;

      case "group":
        group = options.group;
        break;

      case "hold":
        hold = options.hold;
        break;

      case "id":
        id = options.id;
        break;

      case "interval":
        interval = options.interval.mag;
        break;

      case "interval_mon":
        interval_mon = options.interval_mon.mag;
        break;

      case "is_alternate":
        alternate = options.is_alternate == Y;
        break;

      case "is_dilated":
        is_dilated = options.is_dilated == Y;
        break;

      case "pre":
        prereq = options.pre;
        break;

      case "rate":
        interval = 1 / options.rate;
        break;

      case "reps":
        nreps = numeric_arg(options.reps);
        break;

      case "speed":
        speed = options.speed;
        break;

      case "time":
        time = numeric_arg(options.time);
        break;

      case "color":
      case "thick":
      case "cap":
      case "opacity":
        break;

      default:
        argument_err("internal error, bad property in options: " + property);
    }
    return nreps > 1 && interval == U && argument_err("when repetitions is greater than 1, you must specify an interval or rate"), is_numeric(interval) === Y && interval < .01 && argument_err("cannot use repeat intervals less than 10 msec"), 
    elem.is_relative = !1, currtime = is_dilated ? now : now_raw, CHECKS && delay !== U && time !== U && argument_err("cannot specify both absolute time and delay from now"), prereq != U ? (delay == U && (delay = 0), 
    time = delay) : delay != U ? (time = currtime + delay, elem.is_relative = !0) : time != U || (time = currtime), id == U && (id = loom_next_id()), elem.prereq = prereq, elem.group = group, elem.id = id, 
    elem.time = time, elem.nreps = nreps, elem.countx = 0, elem.interval = interval, elem.interval_mon = interval_mon, elem.fadeout_duration = fadeout, elem.hold_duration = hold, elem.last_seen = 0, elem.alternate = alternate, 
    elem.speed = speed, elem.is_dilated = is_dilated, elem;
};

function loom_dump1(loomx) {
    let fx, msg, elem;
    if (msg = str.conv("  loom[{int}]: ", loomx), elem = g_loom[loomx], msg += str.conv("pre={n}, id={n}, time={n}, kind={n}, rel={bool}", elem.prereq, elem.id, elem.time, elem.evkind, elem.is_relative), 
    elem.evkind === EV_TIMER && null != elem.func.parms) {
        for (msg += ", parms=[", fx = 0; fx < elem.func.parms.length; fx++) 0 !== fx && (msg += ", "), msg += str.conv("{}", elem.func.parms[fx]);
        msg += "]";
    }
    logg(msg);
}

function loom_release_id(cleared_id) {
    let lx, item;
    for (TRACE_LOOM && logg(str.conv("  loom_release_id id={n}", cleared_id)), lx = 0; lx < g_loom.length; lx++) (item = g_loom[lx]).prereq === cleared_id && (CHECKS && is_numeric(item.time) !== Y && internal_err("loom time not numeric"), 
    item.time += now, TRACE_LOOM && logg(str.conv("  dependency at {int} cleared, new time {n3}", lx, item.time)), item.prereq = U, item.is_relative = !0);
}

export function loom_clearx(loomx) {
    loom_release_id(g_loom[loomx].id), g_loom.splice(loomx, 1);
};

export function call_deferred_func(elem) {
    elem.group != IDE_GROUP && add_major_callback(elem), unfreeze_calc(elem.func);
};

export function block_animation_enter() {
    g_block_animations.length = 0;
};

export function block_animation_leave() {
    let a;
    for (a of g_block_animations) g_overlay.appendChild(a.block), a.block.x = a.startx, a.block.y = a.starty;
    g_block_animations_otime = now;
};

export function loom_animate_block(block, reference, targx, targy, duration, curvefunc, funcparm) {
    let a = {}, start_g = local_to_global_p(block, new Point(0, 0)), stop_g = local_to_global_p(reference, new Point(targx, targy));
    return a.id = ++g_loom_next_id, a.block = block, a.oparent = block.parent, a.duration = duration, a.parm = 0, a.startx = start_g.x, a.starty = start_g.y, a.stopx = stop_g.x, a.stopy = stop_g.y, a.curvefunc = curvefunc, 
    a.funcparm = funcparm, g_block_animations.push(a), TRACE_ANIMATION && logg(str.conv("animation add, id={n}", a.id)), a.id;
};

function find_num_animation(id) {
    let ax;
    for (ax = 0; ax < g_num_animations.length; ax++) if (id === g_num_animations[ax].id) return ax;
    return -1;
}

function abort_animate_num(ax, va, finishflag = N) {
    finishflag === Y && path_setv(_M, WHERE_LOOM, va.valpath, va.endval), path_setv(_M, WHERE_LOOM, va.busypath, N), loom_release_id(va.id), g_num_animations.splice(ax, 1);
}

function pause_start(va) {
    va.paused = !0, va.pause_start = now, TRACE_ANIMATION && logg(str.conv("pause_start, time={}", va.pause_start));
}

function pause_end(va) {
    va.paused = !1, va.starttime += now - va.pause_start, TRACE_ANIMATION && logg(str.conv("pause_end, new start={}", va.starttime));
}

export function loom_animate_num_ctrl(id, options) {
    let ax, va, abort = U, finish = U, pause = U, resume = U, toggle = U;
    for (let property in options) switch (property) {
      case "abort":
        abort = options.abort;
        break;

      case "finish":
        finish = options.finish;
        break;

      case "pause":
        pause = options.pause;
        break;

      case "resume":
        resume = options.resume;
        break;

      case "toggle":
        toggle = options.toggle;
        break;

      default:
        argument_err("internal error, bad property in options: " + property);
    }
    (ax = find_num_animation(id)) >= 0 ? (va = g_num_animations[ax], pause === Y ? va.paused || pause_start(va) : resume === Y ? va.paused && pause_end(va) : toggle === Y ? va.paused ? pause_end(va) : pause_start(va) : finish === Y ? abort_animate_num(ax, va, Y) : abort === Y && abort_animate_num(ax, va, N)) : CHECKS && argument_err("not found");
};

function solve_unit_bezier(x, epsilon, p1x, p1y, p2x, p2y) {
    const TRACE_SOLVE = !1;
    var t, cx = 3 * p1x, bx = 3 * (p2x - p1x) - cx, ax = 1 - cx - bx, cy = 3 * p1y, by = 3 * (p2y - p1y) - cy, ay = 1 - cy - by;
    function sampleCurveX(t) {
        return ((ax * t + bx) * t + cx) * t;
    }
    return t = function(x, epsilon) {
        var t0, t1, t2, x2, d2, i, t;
        for (t2 = x, i = 0; i < 8; i++) {
            if (x2 = sampleCurveX(t2) - x, TRACE_SOLVE && logg(str.conv("inside SolveCurvex,iteration {int}, x={n,3}, err={n,6}, eps={n,3}", i, x, Math.abs(x2), epsilon)), Math.abs(x2) < epsilon) return t2;
            if (d2 = (3 * ax * (t = t2) + 2 * bx) * t + cx, Math.abs(d2) < 1e-6) break;
            t2 -= x2 / d2;
        }
        if (t1 = 1, (t2 = x) < (t0 = 0)) return t0;
        if (t2 > t1) return t1;
        for (;t0 < t1; ) {
            if (x2 = sampleCurveX(t2), Math.abs(x2 - x) < epsilon) return t2;
            x > x2 ? t0 = t2 : t1 = t2, t2 = .5 * (t1 - t0) + t0;
        }
        return t2;
    }(x, epsilon), ((ay * t + by) * t + cy) * t;
}

export function loom_process_events() {
    let elem, lx, ax, currtime, percent, va_elapsed, ba, va, newval, progress, clearflag, did_trickle = !1;
    if (currtime = now, TRACE_LOOM && g_loom.length > 0 && logg(str.conv("loom_process_events, now={n3}, loom.n={}", currtime, g_loom.length)), g_block_animations.length > 0) {
        for (TRACE_ANIMATION && logg(str.conv("block animation loop len={}, now={n3}...", g_block_animations.length, now)), ax = 0; ax < g_block_animations.length; ) ba = g_block_animations[ax], percent = 100 * (now - g_block_animations_otime) / ba.duration, 
        TRACE_ANIMATION && logg(str.conv("animation running otime={n3}, percent={n}, start=({},{}), stop=({},{}), parm={}", g_block_animations_otime, percent, ba.startx, ba.starty, ba.stopx, ba.stopy, ba.funcparm)), 
        ba.curvefunc(ba.block, percent, ba.startx, ba.starty, ba.stopx, ba.stopy, ba.funcparm), percent >= 100 ? (loom_release_id(ba.id), ba.oparent.appendChild(ba.block), g_block_animations.splice(ax, 1), TRACE_ANIMATION && logg(str.conv("..animation {int} finished, after delete, len={int}", ax, g_block_animations.length))) : ax += 1;
        if (g_block_animations.length > 0) return void (TRACE_ANIMATION && logg("..end animations, still running"));
        TRACE_ANIMATION && logg("..all animations finished");
    }
    for (ax = 0; ax < g_num_animations.length; ) currtime = (va = g_num_animations[ax]).is_dilated ? now : now_raw, va.paused ? ax += 1 : (va_elapsed = currtime - va.starttime, TRACE_ANIMATION && logg(str.conv("val animation ax={}, elapsed={n3}, duration={}", ax, va_elapsed, va.duration)), 
    va_elapsed >= va.duration ? (path_setv(_M, WHERE_LOOM, va.busypath, N), path_setv(_M, WHERE_LOOM, va.valpath, va.endval), loom_release_id(va.id), g_num_animations.splice(ax, 1), TRACE_ANIMATION && logg(str.conv("..num_animation {int} finished, after delete, len={int}", ax, g_num_animations.length))) : (va.bez_x1 === U ? newval = interpolate(va_elapsed, 0, va.duration, va.startval, va.endval, {
        clamp: Y
    }) : (progress = solve_unit_bezier(va_elapsed / va.duration, .001, va.bez_x1, va.bez_y1, va.bez_x2, va.bez_y2), TRACE_ANIMATION && logg(str.conv("..bez, X={n,3}, Y={n,3}", va_elapsed / va.duration, progress)), 
    newval = interpolate(progress, 0, 1, va.startval, va.endval, {})), TRACE_ANIMATION && logg(str.conv("  setval, va_elapsed={}, newval={n,1}", va_elapsed, newval)), path_setv(_M, WHERE_LOOM, va.valpath, newval), 
    ax += 1));
    for (lx = 0; lx < g_loom.length; ) if (clearflag = !1, currtime = (elem = g_loom[lx]).is_dilated ? now : now_raw, TRACE_SPRITE && logg(str.conv("loom_process_events[{int}], currtime={n3}, id={n}, pre={n}, elem.time={n3}", lx, currtime, elem.id, elem.prereq, elem.time)), 
    elem.prereq === U) if (currtime < elem.time) TRACE_LOOM && logg(str.conv("  loom: waiting for time, elem.time={n3}, currtime={n3}", elem.time, currtime)), lx += 1; else {
        switch (elem.evkind) {
          case EV_TIMER:
            elem.countx += 1, TRACE_LOOM && logg("  loom: calling deferred function"), call_deferred_func(elem), elem.interval_mon != U && getn(runtime, F_monitor_active) == Y ? elem.time = currtime + elem.interval_mon : elem.time = currtime + elem.interval, 
            elem.is_relative = !0;
            break;

          case EV_ANIM_CURVE:
            clearflag = do_anim_curve(elem, currtime);
            break;

          case EV_ANIM_BLOCK:
          case EV_ANIM_VAL:
            throw new Error("not yet");

          case EV_NOP:
            clearflag = !0;
            break;

          default:
            throw new Error("unexpected event kind");
        }
        elem.last_seen = currtime, TRACE_LOOM && logg(str.conv("  loom: event was fired, count={n}, nreps={n}", elem.countx, elem.nreps)), clearflag || elem.countx >= elem.nreps ? (TRACE_LOOM && logg("  loom: event used up"), 
        loom_clearx(lx)) : lx += 1, TRACE_LOOM && logg("loom: about to call trickle"), trickle(0), did_trickle = !0;
    } else TRACE_LOOM && logg("  loom: waiting for a prereq"), lx += 1;
    did_trickle || trickle(0);
};

function do_anim_curve(elem, currtime) {
    let anim_elapsed, t1, clearflag = !1, bez = elem.extra;
    switch (bez.phase) {
      case 0:
        (t1 = (anim_elapsed = currtime - elem.time) / elem.interval) > 1 && (t1 = 1), TRACE_CURVE && logg(str.conv("curve drawing, now={}, t1={n3}, elapsed={}", currtime, t1, anim_elapsed)), bez.shape.graphics.clear();
        debugger;
        t1 >= 1 && (bez.draw_end_time = now, bez.phase = 1, TRACE_CURVE && logg("  --advancing to hold phase"), 0 == elem.hold_duration && (bez.hold_end_time = currtime, bez.phase = 2));
        break;

      case 1:
        elem.hold_duration == INFINITY ? (clearflag = !0, TRACE_CURVE && logg("curve holding forever, remove from loom")) : (anim_elapsed = currtime - bez.draw_end_time, TRACE_CURVE && logg(str.conv("curve holding, duration={n1}, elapsed={}", elem.hold_duration, anim_elapsed)), 
        anim_elapsed >= elem.hold_duration && (bez.hold_end_time = currtime, bez.phase = 2, TRACE_CURVE && logg("--advancing to fadeout phase")));
        break;

      case 2:
        anim_elapsed = currtime - bez.hold_end_time;
        var opacity = 1 - elapsed / elem.fadeout_duration;
        TRACE_CURVE && logg(str.conv("curve fadeout, elapsed={}, opacity={n3}", anim_elapsed, opacity)), opacity < .05 ? (bez.shape.parent.removeChild(bez.shape), clearflag = !0, TRACE_CURVE && logg("  --fadeout finished, removing from screen")) : (bez.shape.alpha = opacity, 
        TRACE_CURVE && logg("  --fadeout updating opacity"));
        break;

      default:
        throw new Error("bad phase");
    }
    return clearflag;
}

function fallback_drawer(b) {
    draw_rect(b, {
        fill: MAGENTA
    });
}

function get_os_version(appver) {
    var cc, result = "", pos = appver.indexOf("OS X");
    if (pos > 0) {
        for (;"x)" != (cc = appver.charAt(pos)) && "" != cc; ) "_" == cc && (cc = "."), result += cc, pos += 1;
        return result;
    }
    if ((pos = appver.indexOf("(Win")) > 0) {
        for (pos += 1; ";" != (cc = appver.charAt(pos)) && ")" != cc && "" != cc; ) result += cc, pos += 1;
        return result;
    }
    return appver.substring(0, 12);
}

var is_rtl = !1;

export function rtl_init() {
    if (is_rtl) return TRACE_INIT && logg("--- ignoring second rtl init"), void (null != aaaa.main_drawer && (monitored_draw_F = aaaa.main_drawer));
    is_rtl = !0, TRACE_INIT && logg("--- rtl_init a"), zap_clock(), add_family(Y_Angle, "angle^1"), add_family(Y_Area, "len^2"), add_family(Y_Energy, "len^2,mass^1,time^-2"), add_family(Y_Force, "len^1,mass^1,time^-2"), 
    add_family(Y_Frequency, "time^-1"), add_family(Y_Length, "len^1"), add_family(Y_Mass, "mass^1"), add_family(Y_Power, "len^2,mass^1,time^-3"), add_family(Y_Pressure, "len^2,mass^1,time^-3"), add_family(Y_Scalar, ""), 
    add_family(Y_Speed, "len^1,time^-1"), add_family(Y_Temperature, "temp^1|1"), add_family(Y_Time, "time^1"), add_family(Y_Volume, "len^3"), add_unit(Y_Angle, N_radian, 1), add_unit(Y_Angle, N_deg, .017453292519943295), 
    add_unit(Y_Angle, N_gradian, .015707963267948967);
    add_unit(Y_Angle, N_revs, 6.283185307179586), add_unit(Y_Area, N_sq_m, 1), add_unit(Y_Area, N_acre, 4046.8564300507887), add_unit(Y_Area, N_hectare, 1e4), add_unit(Y_Area, N_sq_cm, 1e-4), add_unit(Y_Area, N_sq_ft, .09290303999749462), 
    add_unit(Y_Area, N_sq_in, .0006451600000025807), add_unit(Y_Area, N_sq_mi, 2589988.110285327), add_unit(Y_Area, N_sq_mm, 1e-6), add_unit(Y_Area, N_sq_yd, .8361273600007553), add_unit(Y_Energy, N_joule, 1), 
    add_unit(Y_Energy, N_BTU, 1055.0558529687669), add_unit(Y_Energy, N_calorie, 4.183999932386561), add_unit(Y_Energy, N_ev, 1.602177330024137e-19), add_unit(Y_Energy, N_gigajoule, 1e9), add_unit(Y_Energy, N_hp_hr, 2684519.537686219), 
    add_unit(Y_Energy, N_kw_hr, 3599999.9971200004), add_unit(Y_Energy, N_therm_us, 105480400), add_unit(Y_Energy, N_therm_ec, 105506e3), add_unit(Y_Force, N_newton, 1);
    add_unit(Y_Force, N_lbf, 4.448221618990737), add_unit(Y_Frequency, N_hz, 1), add_unit(Y_Frequency, N_rpm, .016666666666666666), add_unit(Y_Length, N_meter, 1), add_unit(Y_Length, N_angstrom, 1e-11), add_unit(Y_Length, N_cm, .01), 
    add_unit(Y_Length, N_dm, .1), add_unit(Y_Length, N_foot, .30479999999999996), add_unit(Y_Length, N_inch, .0254), add_unit(Y_Length, N_km, 1e3), add_unit(Y_Length, N_mile, 1609.3439999999998), add_unit(Y_Length, N_mm, .001), 
    add_unit(Y_Length, N_nautmile, 1852), add_unit(Y_Length, N_nm, 1e-10), add_unit(Y_Length, N_um, 1e-6), add_unit(Y_Length, N_yard, .9143999999999999), add_unit(Y_Mass, N_kg, 1), add_unit(Y_Mass, N_grain, 6479890999975407e-20), 
    add_unit(Y_Mass, N_gram, .001), add_unit(Y_Mass, N_ounce, .02834952316484755);
    add_unit(Y_Mass, N_pound, .4535923703803783), add_unit(Y_Mass, N_slug, 14.593903), add_unit(Y_Mass, N_ton, 907.1847407607567), add_unit(Y_Mass, N_tonne, 1e3), add_unit(Y_Mass, N_troy_ounce, .031103476769649887), 
    add_unit(Y_Mass, N_troy_pound, .3732417216026466), add_unit(Y_Power, N_watt, 1), add_unit(Y_Power, N_gigawatt, 1e9), add_unit(Y_Power, N_hp, 745.6998713570781), add_unit(Y_Power, N_kilowatt, 1e3), add_unit(Y_Power, N_megawatt, 1e6), 
    add_unit(Y_Power, N_milliwatt, .001), add_unit(Y_Pressure, N_pascal, 1), add_unit(Y_Pressure, N_bar, 1e5), add_unit(Y_Pressure, N_psi, 6894.7572798677575), add_unit(Y_Pressure, N_torr, 133.32236836846923), 
    add_unit(Y_Scalar, N_each, 1), add_unit(Y_Scalar, N_dozen, 12), add_unit(Y_Scalar, N_gross, 144), add_unit(Y_Speed, N_m_per_sec, 1);
    add_unit(Y_Speed, N_ft_per_min, .0050799999922784), add_unit(Y_Speed, N_ft_per_sec, .304799999536704), add_unit(Y_Speed, N_km_per_hr, .2777777777777778), add_unit(Y_Speed, N_m_per_min, .016666666666666666), 
    add_unit(Y_Speed, N_mi_per_hr, .4470400004105615), add_unit(Y_Temperature, N_degK, 1), add_unit(Y_Temperature, N_degC, U, new a_function("std", "conv_degK_to_degC", conv_degK_to_degC), new a_function("std", "conv_degC_to_degK", conv_degC_to_degK)), 
    add_unit(Y_Temperature, N_degF, U, new a_function("std", "conv_degK_to_degF", conv_degK_to_degF), new a_function("std", "conv_degF_to_degK", conv_degF_to_degK)), add_unit(Y_Time, N_sec, 1), add_unit(Y_Time, N_day, 86400), 
    add_unit(Y_Time, N_hour, 3600), add_unit(Y_Time, N_microsec, 1e-6), add_unit(Y_Time, N_millisec, .001), add_unit(Y_Time, N_minute, 60), add_unit(Y_Time, N_month, 223200), add_unit(Y_Time, N_nanosec, 1e-9), 
    add_unit(Y_Time, N_picosec, 1e-12), add_unit(Y_Time, N_week, 604800), add_unit(Y_Time, N_year, 2678400), add_unit(Y_Volume, N_l, 1);
    add_unit(Y_Volume, N_cu_ft, 28.316579357213648), add_unit(Y_Volume, N_cu_yd, 764.5552200007645), add_unit(Y_Volume, N_cup, .23658823637296003), add_unit(Y_Volume, N_gal, 3.785411789132032), add_unit(Y_Volume, N_ml, .001), 
    add_unit(Y_Volume, N_oz, .029573529564111873), add_unit(Y_Volume, N_pint, .47317647274592006), add_unit(Y_Volume, N_quart, .94635294549184), add_unit(Y_Volume, N_tbsp, .014786764780962696), add_unit(Y_Volume, N_tsp, .004928921598877499), 
    ERR_TREE = new a_tree(_M, "ERR_TREE", 0), str.str_add_meta(), loom_history = new a_tree(_M, "$loom_history", NF_STATEFUL), runtime = new a_tree(_M, "$runtime", NF_STATEFUL), blackbox_runtime = new a_tree(_M, "$blackbox_runtime", NF_STATEFUL), 
    js_set_screen_size(), setv(_M, 0, runtime, F_app_version, "1");
    var verss = navigator.userAgent;
    IS_NODE || (verss += " ratio:" + window.devicePixelRatio.toFixed(1)), setv(_M, 0, runtime, F_env_version, verss);
    var os_ver = IS_NODE ? "node.js" : get_os_version(navigator.appVersion);
    setv(_M, 0, runtime, F_os_version, os_ver);
    var os_lang = js_to_langx(navigator.language);
    setv(_M, 0, runtime, F_os_language, os_lang), setv(_M, 0, runtime, F_ui_language, os_lang), setv(_M, 0, runtime, F_os_kind, OS_WEB);
    let kind = CPU_INTEL;
    if (-1 != navigator.userAgent.indexOf("ARM") && (kind = CPU_ARM), setv(_M, 0, runtime, F_cpu_kind, kind), setv(_M, 0, runtime, F_full_screen, N), setv(_M, 0, runtime, F_hardware_id, g_hardware_id), TRACE_RESIZE && console.log(`agent=${verss}`), 
    window.matchMedia("(pointer: coarse)").matches ? setv(_M, 0, runtime, F_touch_kind, TOUCH_FINGER) : setv(_M, 0, runtime, F_touch_kind, TOUCH_NONE), setv(_M, 0, runtime, F_os_modal, 0), TRACE_MAJOR && logg("emitting major[1] EV_INIT"), 
    setv(_M, 0, runtime, F_major_steps, 1, F_evkind, EV_INIT), setv(_M, 0, runtime, F_major_steps, 1, F_hist_rawx, 0), setv(_M, 0, runtime, F_major_stepx, 2), !IS_NODE) {
        k_init(), window.addEventListener("keydown", js_keydown), window.addEventListener("mousedown", js_mousedown), window.addEventListener("mouseup", js_mouseup), window.addEventListener("mousemove", js_mousemove), 
        window.addEventListener("touchstart", js_touchstart), window.addEventListener("touchmove", js_touchmove), window.addEventListener("touchend", js_touchend), window.addEventListener("touchcancel", js_touchcancel), 
        window.oncontextmenu = (e => (e.preventDefault(), !1)), window.addEventListener("resize", js_resize);
        requestAnimationFrame(on_enter_frame);
    }
    TRACE_INIT && logg("--- rtl_init z");
};

let g_logged, g_print_options = null;

function a_col_measure(arg_width, arg_units) {
    this.width = arg_width, this.unit = arg_units;
}

function a_tbl_col(arg_id, arg_start, arg_stop) {
    this.colid = arg_id, this.startcol = arg_start, this.stopcol = arg_stop, this.startdot = 0, this.stopdot = 0;
}

function a_tbl_row(arg_rowkind, arg_rowid, arg_extra) {
    this.rowkind_ptr = arg_rowkind, this.rowid = arg_rowid, this.rowbox = null, this.rowextra = arg_extra;
}

function a_tbl_rowkind(arg_id, arg_drawf) {
    this.kindID = arg_id, this.curcolx = 1, this.curspanx = 1, this.rowdrawf = arg_drawf, this.fields = [];
}

function a_tbl_spec() {
    this.backcolor = U, this.prepped = !1, this.nrows = 0, this.tot_height = 0, this.rawgrid = [], this.rawdots = [], this.rowm = [], this.rows = [], this.s = [];
}

function capture_mouse(b) {
    TRACE_CAPTURE && logg("capture_mouse by " + b.blabel), 0 != g_capture_bid && argument_err("nested calls to capture not supported"), g_capture_bid = b.bid, g_capture_block = b;
}

function release_mouse() {
    TRACE_CAPTURE && logg("release_mouse"), g_capture_bid = 0, g_capture_block = null;
}

export function k_layer(parent, drawf, options) {
    let in_b, in_l, in_r, in_t, indent, newb, canvas_dest = null, dpi = parent.dpi, height = parent.bounds.height, left = 0, opacity = 1, pin = U, skewx = 0, skewy = 0, top = 0, tx = 0, ty = 0, width = parent.bounds.width;
    for (let property in options) switch (property) {
      case "area":
        left = getn(options.area, F_left), top = getn(options.area, F_top), width = getn(options.area, F_width), height = getn(options.area, F_height);
        break;

      case "indent":
        indent = options.indent, left = parent.bounds.left + indent, top = parent.bounds.top + indent, width = parent.bounds.width - 2 * indent, height = parent.bounds.height - 2 * indent;
        break;

      case "canvas":
        canvas_dest = options.canvas;
        break;

      case "in_t":
        in_t = options.in_t;
        break;

      case "in_r":
        in_r = options.in_r;
        break;

      case "in_b":
        in_b = options.in_b;
        break;

      case "in_l":
        in_l = options.in_l, left = parent.bounds + in_l, top = parent.bounds + in_t, width = parent.bounds.width - in_l - in_r, height = parent.bounds.height - in_t - in_b;
        break;

      case "opacity":
        is_numeric(options.opacity) != Y && argument_err("bad arg"), opacity = options.opacity;
        break;

      case "pin":
        is_numeric(options.pin) != Y && argument_err("bad arg"), pin = options.pin;
        break;

      case "dpi":
        is_numeric(options.dpi) != Y && argument_err("bad arg"), dpi = options.dpi;
        break;

      case "tx":
        is_numeric(options.tx) != Y && argument_err("bad arg"), left = options.tx;
        break;

      case "ty":
        is_numeric(options.ty) != Y && argument_err("bad arg"), top = options.ty;
        break;

      case "skewx":
        is_numeric(options.skewx) != Y && argument_err("bad arg"), skewx = options.skewx;
        break;

      case "skewy":
        is_numeric(options.skewy) != Y && argument_err("bad arg"), skewy = options.skewy;
        break;

      default:
        argument_err("### bad property in options: " + property);
    }
    if (!CHECKS || is_numeric(left) == Y && is_numeric(top) == Y && is_numeric(width) == Y && is_numeric(height) == Y || argument_err("bad bounds"), null != canvas_dest) {
        var canvas = document.createElement("canvas");
        canvas.id = parent.blabel + ":canvas", canvas.width = width, canvas.height = height, canvas.style.left = String(left) + "px", canvas.style.top = String(top) + "px", canvas.style.width = String(width) + "px", 
        canvas.style.height = String(height) + "px", canvas.style.position = "absolute", parent.appendChild(canvas), (newb = {}).bounds = new Rectangle(0, 0, width, height), newb.can = canvas, newb.ctx = canvas.getContext("2d"), 
        newb.dpi = dpi;
        var extra = new a_tree(_M, "$new_layer");
        setv(_M, 0, extra, F_box, F_left, 0), setv(_M, 0, extra, F_box, F_top, 0), setv(_M, 0, extra, F_box, F_width, width), setv(_M, 0, extra, F_box, F_height, height), newb.extra = extra, setv(_M, 0, canvas_dest, F_width, width), 
        setv(_M, 0, canvas_dest, F_height, height), setv(_M, 0, canvas_dest, F_sysobj, newb);
    } else if ((newb = new_block(parent, new Rectangle(left, top, width, height), BKIND_SUBSET, drawf.name, drawf, null, parent.dest)).style.opacity = opacity, dpi != U && (newb.dpi = dpi), 5 == pin) {
        tx = width / 2, ty = height / 2;
        var old_svg = js_svg_wrapper(newb, opacity), group = document.createElementNS(SVG_NS, "g");
        group.setAttribute("transform", `translate(${tx} ${ty})`), old_svg.appendChild(group), newb.has_transform = !0, newb.bkind = BKIND_SUBSET;
    }
    return newb;
};

function k_set_bounds(b, screenbox) {
    b.style.left = screenbox.left, b.style.top = screenbox.top, b.style.width = screenbox.width, b.style.height = screenbox.height, b.bounds = new Rectangle(0, 0, screenbox.width, screenbox.height), setv(_M, 0, b.extra, F_box, F_left, 0), 
    setv(_M, 0, b.extra, F_box, F_top, 0), setv(_M, 0, b.extra, F_box, F_width, screenbox.width), setv(_M, 0, b.extra, F_box, F_height, screenbox.height), setv(_M, 0, b.extra, F_boxtot, F_left, 0), setv(_M, 0, b.extra, F_boxtot, F_top, 0), 
    setv(_M, 0, b.extra, F_boxtot, F_width, screenbox.width), setv(_M, 0, b.extra, F_boxtot, F_height, screenbox.height);
}

function snap_rectangle(box) {
    let net_left = Math.round(box.left), net_top = Math.round(box.top);
    return new Rectangle(net_left, net_top, Math.round(box.left + box.width) - net_left, Math.round(box.top + box.height) - net_top);
}

function refresh_all(refresh_menubar = !1) {
    g_last_drawn_seq = 0, g_root_block.bseq = 1, refresh_menubar && (g_menu_block.bseq = 1);
}

function draw_err_box(container, arg_id, arg_box) {
    draw_rect(container, arg_box, {
        fill: 16711680
    });
}

export function k_enter(b) {
    b.nesting += 1, 1 == b.nesting ? (g_block_stack.push(g_curr_block), g_curr_block = b, b.usesz.length = 0, k_del_all_children(b), b.div = null, b.tbl = null, TRACE_ENTER && logg(str.conv("k_enter, " + b.blabel + ", bounds={rect}, scroll={rect}, seq={n}", b.bounds, b.scrollRect, b.bseq))) : TRACE_K && logg("...ignoring nested block " + b.blabel);
};

export function k_leave(b) {
    b.nesting -= 1, CHECKS && (b.nesting < 0 && internal_err("block was left more times than entered " + b.blabel), null != b.div && b.div.open && internal_err("forgot to call div_end before leaving this block!")), 
    0 == b.nesting && (g_curr_block = g_block_stack.pop(), b.bseq = g_currseq, TRACE_ENTER && logg(str.conv("..k_leave, " + b.blabel + ", seq={n}", b.bseq)));
};

function k_push(b) {
    internal_err("not yet implemented");
}

function k_pop(b) {
    internal_err("not yet implemented");
}

function k_inset_to_rect(b, new_bounds, arg_draw_func = null) {
    let new_child;
    arg_draw_func(new_child = new_block(b, new_bounds, BKIND_SUBSET, b.blabel + ":inset", arg_draw_func, b.dest));
}

function k_inset(b, arg_meas_n, arg_meas_s, arg_meas_e, arg_meas_w, arg_unit, arg_draw_func, arg_track_func = NOTRACK) {
    let inset_n, inset_s, inset_e, inset_w, new_bounds;
    TRACE_K && logg("k_inset on block " + b.blabel), inset_n = 0, inset_s = 0, inset_e = 0, inset_w = 0, is_numeric(arg_meas_n) == Y && arg_meas_n >= 0 ? inset_n = unit_to_pixels(b, arg_meas_n, arg_unit) : CHECKS && argument_err("invalid inset"), 
    is_numeric(arg_meas_s) == Y && arg_meas_s >= 0 ? inset_s = unit_to_pixels(b, arg_meas_s, arg_unit) : CHECKS && argument_err("invalid inset"), is_numeric(arg_meas_e) == Y && arg_meas_e >= 0 ? inset_e = unit_to_pixels(b, arg_meas_e, arg_unit) : CHECKS && argument_err("invalid inset"), 
    is_numeric(arg_meas_w) == Y && arg_meas_w >= 0 ? inset_w = unit_to_pixels(b, arg_meas_w, arg_unit) : CHECKS && argument_err("invalid inset"), new_bounds = new Rectangle(b.bounds.left + inset_w, b.bounds.top + inset_n, b.bounds.width - inset_w - inset_e, b.bounds.height - inset_n - inset_s), 
    TRACE_K && logg(str.conv("after inset of {n1},{n1},{n1},{n1}, bounds {rect}", inset_n, inset_s, inset_e, inset_w, new_bounds)), k_inset_to_rect(b, new_bounds, arg_draw_func, arg_track_func);
}

function k_indent_to_net(block, targh, targv, justh, justv, arg_draw_func, arg_track_func = NOTRACK) {
    let pixels_h, pixels_v, excess_h, excess_v, indent_n, indent_s, indent_e, indent_w;
    !CHECKS || is_numeric(justh) == Y && is_numeric(justv) == Y && is_numeric(targh) == Y && is_numeric(targv) == Y || argument_err("non-numeric inputs"), justh = Math.max(0, Math.min(1, justh)), justv = Math.max(0, Math.min(1, justv)), 
    pixels_h = targh, excess_h = Math.max(0, block.bounds.width - pixels_h), pixels_v = targv, excess_v = Math.max(0, block.bounds.height - pixels_v), indent_w = Math.round(excess_h * justh), indent_e = Math.max(0, excess_h - indent_w), 
    indent_n = Math.round(excess_v * justv), indent_s = Math.max(0, excess_v - indent_n), TRACE_K && logg(str.conv("indent_to_net, targ {n},{n}, pixels {n},{n}, excess {n},{n}", targh, targv, pixels_h, pixels_v, excess_h, excess_v)), 
    k_inset(block, indent_n, indent_s, indent_e, indent_w, px, arg_draw_func, arg_track_func);
}

export function tbl_begin(block) {
    let result;
    return TRACE_K && logg("tbl_begin"), result = new a_tbl_spec(), block.tbl = result, result;
};

function calc_physical(block, avail, avail2, pairs, tentative) {
    let tot_aliquots, pixels_per_al, i, leftover, nal, pixels, per_al, tot_tentative;
    for (tot_tentative = 0, tot_aliquots = 0, nal = 0, i = 0; i < pairs.length; ) pairs[i].unit == al ? (nal += 1, tot_aliquots += pairs[i].width, tentative[i] = 0) : (pixels = unit_to_pixels(block, pairs[i].width, pairs[i].unit), 
    tentative[i] = pixels, tot_tentative += pixels), i += 1;
    if (0 != nal) {
        for (pixels_per_al = (leftover = avail - tot_tentative) / tot_aliquots, tot_tentative = 0, i = 0; i < pairs.length; ) pairs[i].unit == al ? (pixels = pairs[i].width * pixels_per_al, tentative[i] = pixels, 
        tot_tentative += pixels) : tot_tentative += tentative[i], i += 1;
        for (leftover = avail - tot_tentative, leftover = avail - tot_tentative - nal * (per_al = Math.floor(leftover / nal)), i = 0; i < pairs.length; ) pairs[i].unit == al && (tentative[i] += per_al, tot_tentative += per_al, 
        leftover > 0 && (tentative[i] += 1, tot_tentative += 1, leftover -= 1)), i += 1;
    }
    return tot_tentative;
}

export function tbl_begin_rows(b) {
    let raw_cum, pos, sx, ix, rawc = b.tbl.rawgrid, rawdots = b.tbl.rawdots, mytbl = b.tbl;
    for (ix in mytbl.prepped && argument_err("double call of tbl_end!"), mytbl.prepped = !0, mytbl.tot_width = calc_physical(b, b.bounds.width, b.bounds.height, rawc, rawdots), raw_cum = [], pos = 0, rawc) raw_cum.push(pos), 
    pos += rawdots[ix];
    for (sx in raw_cum.push(pos), mytbl.s) for (ix in mytbl.s[sx].fields) CHECKS && (mytbl.s[sx].fields[ix].startcol - 1 >= rawc.length || mytbl.s[sx].fields[ix].startcol > mytbl.s[sx].fields[ix].stopcol || mytbl.s[sx].fields[ix].stopcol - 1 >= rawc.length) && argument_err("logical columns not reasonable"), 
    mytbl.s[sx].fields[ix].startdot = raw_cum[mytbl.s[sx].fields[ix].startcol - 1], mytbl.s[sx].fields[ix].stopdot = raw_cum[mytbl.s[sx].fields[ix].stopcol];
};

export function tbl_end_rows(b) {
    let row_heights, row, tot_height, pos, r_left, r_top, r_right, r_bottom, mytbl = b.tbl;
    for (row in row_heights = new Array(mytbl.rowm.length), tot_height = calc_physical(b, b.bounds.height, b.bounds.width, mytbl.rowm, row_heights), pos = 0, mytbl.rows) r_top = pos, r_bottom = pos += row_heights[row], 
    r_left = 0, r_right = Math.min(mytbl.tot_width, b.bounds.width), mytbl.rows[row].rowbox = new Rectangle(r_left, r_top, r_right - r_left, r_bottom - r_top), TRACE_K && logg(str.conv("  row={}, rowbox={rect}", row, mytbl.rows[row].rowbox));
    mytbl.tot_height = tot_height, TRACE_BLOCKS && logg("..end tbl_end, nrows=" + mytbl.nrows);
};

export function tbl_draw(b, startrow) {
    let rowID, rowx, endrow, dx, dy, net, tbl, row_ptr, first = !0;
    for (is_numeric((tbl = b.tbl).backcolor) == Y && draw_rect(b, b.bounds, SKIPBG ? {
        fill: WHITE
    } : {
        fill: tbl.backcolor
    }), dx = 0, b.dest == FOR_SCREEN && null != b.horz_scroll_link && (dx = -getn(b.horz_scroll_link, F_s_position)), dy = 0, b.dest == FOR_SCREEN ? b.vert_scroll_link && (dy = -getn(b.vert_scroll_link, F_s_position)) : dy = -tbl.rows[startrow].rowbox.top, 
    TRACE_TBL && logg(str.conv("tbl_draw, bounds={rect}, scroll={rect}, nsect={}, startrow={}, nrows={}, dx={}, dy={}", b.bounds, b.scrollRect, tbl.s.length, startrow, tbl.nrows, dx, dy)), rowx = startrow; rowx < tbl.nrows; ) {
        if ((rowID = (row_ptr = tbl.rows[rowx]).rowid) != U) {
            if (net = solve_rectR({
                basis: row_ptr.rowbox,
                dx: dx,
                dy: dy
            }), TRACE_TBL && logg(str.conv("  rowbox after adjustment {rect}, was {rect}", net, row_ptr.rowbox)), net.bottom < b.bounds.top) {
                TRACE_TBL && logg("  ..row not yet visible"), rowx += 1;
                continue;
            }
            if (net.top > b.bounds.bottom) {
                TRACE_TBL && logg("..row past bottom");
                break;
            }
            if (b.dest == FOR_PRINT && net.bottom > b.bounds.bottom && !first) {
                TRACE_TBL && logg("..stopping, print row will get truncated");
                break;
            }
            if (first = !1, TRACE_TBL && logg(str.conv("rowback rowx={}, net={rect}", rowx, net)), DUMMY_ROW_CONTENT) draw_rect(b, net, {
                fill: rgb255(random_range(100, 255), random_range(100, 255), random_range(100, 255)),
                opacity: .5
            }), draw_str(b, str.to_str(rowx), net, {
                size: pt_to_dots(b, 10)
            }); else {
                let drawf = row_ptr.rowkind_ptr.rowdrawf;
                setv(_M, 0, b.extra, F_cell_id, F_y, rowID), setv(_M, 0, b.extra, F_cell, F_y, rowx), setv(_M, 0, b.extra, F_box, F_left, net.left), setv(_M, 0, b.extra, F_box, F_top, net.top), setv(_M, 0, b.extra, F_box, F_width, net.width), 
                setv(_M, 0, b.extra, F_box, F_height, net.height), drawf(b, row_ptr);
            }
        }
        rowx += 1;
    }
    return endrow = rowx, TRACE_TBL && logg(str.conv("..end table draw, startrow={}, endrow={}", startrow, endrow)), endrow;
};

export function tbl_rawgrid_add(spec, arg_meas, arg_unit) {
    spec.push(new a_col_measure(arg_meas, arg_unit));
};

export function tbl_begin_rowkind(spec, kind_id, drawfunc) {
    spec.push(new a_tbl_rowkind(kind_id, drawfunc));
};

export function tbl_rowkind_span(spec, is_span, ncols) {
    let curr_section = spec[spec.length - 1];
    is_span && (curr_section.fields.push(new a_tbl_col(curr_section.curspanx, curr_section.curcolx, curr_section.curcolx + ncols - 1)), curr_section.curspanx += 1), curr_section.curcolx += ncols;
};

function tbl_calc_field(b, rowp, colx) {
    let top = rowp.rowbox.top, height = rowp.rowbox.height, rowkindp = rowp.rowkind_ptr, left = rowkindp.fields[colx - 1].startdot, width = rowkindp.fields[colx - 1].stopdot - left;
    setv(_M, 0, b.extra, F_box, F_left, left), setv(_M, 0, b.extra, F_box, F_top, top), setv(_M, 0, b.extra, F_box, F_width, width), setv(_M, 0, b.extra, F_box, F_height, height), setv(_M, 0, b.extra, F_cell, F_x, colx);
}

function tbl_find_rowkind(targid, s) {
    let sx;
    for (sx in s) if (s[sx].kindID == targid) return s[sx];
    return null;
}

export function tbl_add_spa(arg_tbl, arg_meas, arg_unit) {
    arg_tbl.rowm.push(new a_col_measure(arg_meas, arg_unit)), arg_tbl.rows.push(new a_tbl_row(null, U, null)), arg_tbl.nrows += 1;
};

export function tbl_add_row(arg_tbl, arg_meas, arg_unit, arg_rowkind, arg_rowid, arg_extra = null) {
    let rowkind_ptr;
    null == (rowkind_ptr = tbl_find_rowkind(arg_rowkind, arg_tbl.s)) && argument_err("section id never defined"), arg_tbl.rowm.push(new a_col_measure(arg_meas, arg_unit)), arg_tbl.rows.push(new a_tbl_row(rowkind_ptr, arg_rowid, arg_extra)), 
    arg_tbl.nrows += 1;
};

export function div_begin(block, gridf = null, grid_tblr = !1, arg_scrollh = !1, arg_scrollv = !1) {
    TRACE_SCROLL && logg(str.conv("div_begin {str}, scrh={}, scrv={}, bounds={rect}, scroll={rect}", block.blabel, arg_scrollh, arg_scrollv, block.bounds, block.scrollRect)), block.div = new a_div_spec(gridf, grid_tblr, arg_scrollh, arg_scrollv), 
    block.style.overflowX = arg_scrollh ? "scroll" : "hidden", block.style.overflowY = arg_scrollv ? "scroll" : "hidden";
};

function order_slices(a, b) {
    return a.draw_order == b.draw_order ? a.box.top < b.box.top ? -1 : a.box.top > b.box.top ? 1 : a.box.left < b.box.left ? -1 : a.box.left > b.box.left ? 1 : 0 : a.draw_order < b.draw_order ? -1 : 1;
}

function scroll_block_id(targid, posx, posy) {
    let b;
    TRACE_SCROLL && logg(">> scroll_block_id"), null != (b = k_find_block_by_id(g_root_block, targid)) ? (TRACE_SCROLL && logg(str.conv("scroll_block_id, blabel={str}, id={n}, x={n}, y={n}, scroll={rect}", b.blabel, b.bid, posx, posy, b.scrollRect)), 
    null != b.div ? (TRACE_SCROLL && logg("  scrolling a div block"), b.scrollRect = new Rectangle(b.bounds.left + posx, b.bounds.top + posy, b.bounds.width, b.bounds.height)) : null != b.tbl ? (TRACE_SCROLL && logg("  refreshing a tbl"), 
    tbl_draw(b, 0)) : internal_err("block kind not allowed to have scrollbar")) : internal_err("content block is missing!");
}

function slices_compute(parent, is_grid, arg_flags, scrolling, slices, avail, avail2) {
    let i, nal, nslices, tot_aliquots, pixels_per_al, leftover, pixels, tentative, tot_tentative, pos, spillover_h, spillover_v, content_h, content_v, myslice, dname, is_horz = 0 == (arg_flags & DIVF_VERT);
    if (content_h = parent.bounds.width, content_v = parent.bounds.height, 0 != (nslices = slices.length)) {
        for (tot_tentative = 0, tot_aliquots = 0, nal = 0, tentative = new Array(nslices), i = 0; i < nslices; i++) (myslice = slices[i]).unit == al ? (nal += 1, tot_aliquots += myslice.mag, tentative[i] = 0) : (pixels = unit_to_pixels(parent, myslice.mag, myslice.unit), 
        tentative[i] = pixels, tot_tentative += pixels);
        if (scrolling) is_horz ? content_h = tot_tentative : content_v = tot_tentative; else {
            if (spillover_h = 0, spillover_v = 0, (leftover = avail - tot_tentative) < 0) {
                let factor = avail / tot_tentative;
                for (i = 0; i < nslices; i++) (myslice = slices[i]).unit != al && (tentative[i] *= factor);
            }
            if (leftover > 0) {
                if (0 != nal) for (pixels_per_al = leftover / tot_aliquots, i = 0; i < nslices; i++) (myslice = slices[i]).unit == al ? (pixels = myslice.mag * pixels_per_al, tentative[i] = pixels, tot_tentative += pixels) : tot_tentative += tentative[i];
            } else leftover < 0 && (0 == (arg_flags & DIVF_VERT) ? spillover_h = -leftover : spillover_v = -leftover, TRACE_K && logg(str.conv("div slice overflow, avail={n}, scroll_limit={n}", avail, -leftover)));
        }
        if (0 == (arg_flags & DIVF_VERT)) for (pos = parent.bounds.left, i = 0; i < nslices; i++) slices[i].box = new Rectangle(pos, parent.bounds.top, tentative[i], parent.bounds.height), pos += tentative[i]; else for (pos = parent.bounds.top, 
        i = 0; i < nslices; i++) slices[i].box = new Rectangle(parent.bounds.left, pos, parent.bounds.width, tentative[i]), pos += tentative[i];
        if (TRACE_K) for (logg("..end slices_compute:"), i = 0; i < nslices; i++) dname = slices[i].id != SKIP_SLICE ? slices[i].drawer.name : "-space-", logg(str.conv(" slices[{}] " + dname + ", box={rect}, id={}", i, slices[i].box, slices[i].id));
        slices.sort(order_slices);
    }
    return is_horz ? content_h : content_v;
}

export function draw_grid(b) {
    let rowx, colx, logrow, logcol, cumx, box, div = b.div;
    for (logcol = 1, colx = 0; colx < div.horz_slices.length; colx++) if (div.horz_slices[colx].id != SKIP_SLICE) {
        for (logrow = 1, rowx = 0; rowx < div.vert_slices.length; rowx++) if (div.vert_slices[rowx].id != SKIP_SLICE) {
            box = new Rectangle(div.horz_slices[colx].box.left, div.vert_slices[rowx].box.top, div.horz_slices[colx].box.width, div.vert_slices[rowx].box.height), TRACE_GRID && logg(str.conv("horz_box={rect}, vert_box={rect}, net={rect}", div.horz_slices[colx].box, div.vert_slices[colx].box, box)), 
            TRACE_GRID && logg(str.conv("grid for block {} rowx={}, colx={}, box={rect}", b.blabel, rowx, colx, box));
            let label = div.grid_func.name + "[" + String(logcol) + "," + String(logrow) + "]", myblock = new_block(b, box, BKIND_GRID_CELL, label, div.grid_func, b.dest);
            setv(_M, 0, myblock.extra, F_ncells, F_x, div.ncols), setv(_M, 0, myblock.extra, F_ncells, F_y, div.nrows), setv(_M, 0, myblock.extra, F_cell, F_x, logcol), setv(_M, 0, myblock.extra, F_cell, F_y, logrow), 
            setv(_M, 0, myblock.extra, F_cell_id, F_x, div.horz_slices[colx].id), setv(_M, 0, myblock.extra, F_cell_id, F_y, div.vert_slices[rowx].id), cumx = div.grid_tblr ? (logcol - 1) * div.nrows + logrow : (logrow - 1) * div.ncols + logcol, 
            setv(_M, 0, myblock.extra, F_cell_seq, cumx), setv(_M, 0, myblock.extra, F_box, F_left, 0), setv(_M, 0, myblock.extra, F_box, F_top, 0), setv(_M, 0, myblock.extra, F_box, F_width, box.width), setv(_M, 0, myblock.extra, F_box, F_height, box.height), 
            unfreeze_draw(myblock, div.grid_func), logrow++;
        }
        logcol++;
    }
};

export function draw_slices(b) {
    let child, myslice, i, div = b.div, is_horz = 0 == div.vert_slices.length, slices = is_horz ? div.horz_slices : div.vert_slices, nslices = slices.length;
    for (i = 0; i < nslices; i++) if ((myslice = slices[i]).id != SKIP_SLICE && myslice.box.width > 0 && myslice.box.height > 0) {
        let label = myslice.drawer.name;
        child = new_block(b, myslice.box, BKIND_SLICE, label, myslice.drawer), is_horz ? (setv(_M, 0, child.extra, F_cell_id, F_x, myslice.id), setv(_M, 0, child.extra, F_cell, F_x, i)) : (setv(_M, 0, child.extra, F_cell_id, F_y, myslice.id), 
        setv(_M, 0, child.extra, F_cell, F_y, i)), setv(_M, 0, child.extra, F_cell_seq, i + 1), setv(_M, 0, child.extra, F_ncells, F_x, div.ncols), setv(_M, 0, child.extra, F_ncells, F_y, div.nrows), unfreeze_draw(child, child.drawer);
    }
};

export function div_end(b) {
    let avail, avail2, div = b.div;
    TRACE_K && logg(str.conv("div_end on block {str}, scrh={}, scrv={}, bounds={rect}", b.blabel, div.scrollh, div.scrollv, b.bounds)), div.open || argument_err("this block already been closed up"), div.open = !1, 
    avail = b.bounds.width, avail2 = b.bounds.height, div.content_h = slices_compute(b, null != div.grid_func, 0, div.scrollh, div.horz_slices, avail, avail2), avail = b.bounds.height, avail2 = b.bounds.width, 
    div.content_v = slices_compute(b, null != div.grid_func, DIVF_VERT, div.scrollv, div.vert_slices, avail, avail2);
    let ncols = 0, nrows = 0;
    for (let rowx = 0; rowx < div.vert_slices.length; rowx++) -1 != div.vert_slices[rowx].id && (nrows += 1);
    for (let colx = 0; colx < div.horz_slices.length; colx++) -1 != div.horz_slices[colx].id && (ncols += 1);
    div.ncols = Math.max(1, ncols), div.nrows = Math.max(1, nrows), setv(_M, 0, b.extra, F_ncells, F_x, div.ncols), setv(_M, 0, b.extra, F_ncells, F_y, div.nrows), setv(_M, 0, b.extra, F_boxtot, F_width, div.content_h), 
    setv(_M, 0, b.extra, F_boxtot, F_height, div.content_v);
};

export function div_spa(block, arg_flags, arg_meas, arg_unit) {
    div_add(block, -1, arg_flags, arg_meas, arg_unit, null);
};

export function div_add(parent, arg_id, arg_flags, arg_meas, arg_unit, arg_func, arg_order = 0, arg_condition = Y) {
    if (arg_condition != Y) return void div_spa(parent, arg_flags, arg_meas, arg_unit);
    if (TRACE_K && logg(str.conv("  div add, meas={n}, unit={n}", arg_meas, arg_unit)), arg_meas <= 0) return;
    let new_slice = new a_div_slice();
    if (new_slice.id = arg_id, new_slice.drawer = arg_func, new_slice.draw_order = arg_order, new_slice.unit = arg_unit, arg_meas == U) {
        let fake_bounds, fake_block = new_block(parent, fake_bounds = 0 == (arg_flags & DIVF_VERT) ? new Rectangle(0, 0, U, parent.bounds.height) : new Rectangle(0, 0, parent.bounds.width, U), BKIND_MEASURING, "measuring", arg_func, null, parent.dest);
        fake_block.is_measuring = !0, fake_block.max_h = 0, fake_block.max_v = 0, unfreeze_draw(fake_block, fake_block.drawer), 0 == (arg_flags & DIVF_VERT) ? (new_slice.mag = fake_block.max_h, TRACE_AUTO && logg(str.conv("-- after measurement, block {} width is {}", arg_func.name, fake_block.max_h))) : (new_slice.mag = fake_block.max_v, 
        TRACE_AUTO && logg(str.conv("-- after measurement, block {} height is {}", arg_func.name, fake_block.max_v))), parent.removeChild(fake_block);
    } else new_slice.mag = arg_meas;
    0 == (arg_flags & DIVF_VERT) ? parent.div.horz_slices.push(new_slice) : parent.div.vert_slices.push(new_slice);
};

export function k_overlay(parentb, arg_func) {
    let overlay, label = arg_func.name + ":overlay";
    (overlay = new_block(parentb, parentb.bounds, BKIND_OVERLAY, label, arg_func)).dest = parentb.dest, parentb.appendChild(overlay), arg_func.code(overlay);
};

function is_block_obsolete(block) {
    let dependency, node_seq, drawnseq = block.bseq;
    for (dependency of (TRACE_OBSOLETE && block.blabel == OBBLOCK && logg(str.conv("is_block_obsolete block={str}, ndep={}", block.blabel, block.usesz.length)), block.usesz)) {
        TRACE_OBSOLETE && block.blabel == OBBLOCK && logg(str.conv("  testing {path}", dependency.path));
        let pathx = path_to_pathx(dependency.path);
        if (pathx.exists) {
            if ((node_seq = pathx.lev[pathx.lastx].node.seq) > drawnseq) return TRACE_OBSOLETE && logg(str.conv("    -- OBSOLETE, node_seq={n}, drawn_seq={n}", node_seq, drawnseq)), !0;
        } else if (0 != dependency.seq) return TRACE_OBSOLETE && logg("   -- OBSOLETE: used to exist, now doesn't exist"), !0;
    }
    return !1;
}

function find_x_in_section(x, sect) {
    let i, dist, closest_dist = 9999999, closest_ix = -1;
    for (i in sect.fields) (dist = int_abs(x - sect.fields[i].startdot)) < closest_dist && (closest_dist = dist, closest_ix = i), (dist = int_abs(x - (sect.fields[i].stopdot - 1))) < closest_dist && (closest_dist = dist, 
    closest_ix = i);
    return closest_ix;
}

function find_in_rows(y, b, tbl) {
    let rx, dy, row_top, row_bot;
    for (rx in dy = 0, null != b.vert_scroll_link && (dy = -getn(b.vert_scroll_link, F_s_position)), tbl.rows) if (row_top = tbl.rows[rx].rowbox.top + dy, row_bot = tbl.rows[rx].rowbox.bottom + dy, TRACE_XY && logg(str.conv("  find_in_rows, i={}, y={}, top={}, bot={}", rx, y, row_top, row_bot)), 
    y >= row_top && y < row_bot) return rx;
    return -1;
}

function check_for_entry_activation(args) {
    debugger;
}

function find_xy_in_table(b, event, localx, localy) {
    let colx, rowx, colID, rowID, mytbl;
    if (rowx = find_in_rows(localy, b, mytbl = b.tbl), TRACE_XY && logg(str.conv("  find_xy_in_table, local=[{n},{n}], rowx={}", localx, localy, rowx)), rowx >= 0 && (rowID = mytbl.rows[rowx].rowid) != U) {
        let mykind = mytbl.rows[rowx].rowkind_ptr;
        if (colx = find_x_in_section(localx, mykind), colID = U, colx >= 0) {
            if (check_for_entry_activation(b, rowx, colx, event)) return TRACE_XY && logg(str.conv("  absorbed by entry activation colx={}, col={}", colx, colID)), !0;
            colID = mykind.fields[colx].colid;
        }
        if (TRACE_XY && logg(str.conv("  sending to table tracker, colx={}, colID={n}", colx, colID)), colID != U) {
            setv(_M, 0, b.extra, F_cell_id, F_x, colID), setv(_M, 0, b.extra, F_cell_id, F_y, rowID), setv(_M, 0, b.extra, F_cell, F_x, colx + 1), setv(_M, 0, b.extra, F_cell, F_y, rowx + 1), setv(_M, 0, b.extra, F_row_kind, mykind.kindID);
            let r = mytbl.rows[rowx].rowbox;
            return setv(_M, 0, b.extra, F_box, F_left, r.left), setv(_M, 0, b.extra, F_box, F_top, r.top), setv(_M, 0, b.extra, F_box, F_width, r.width), setv(_M, 0, b.extra, F_box, F_height, r.height), b.trakfunc(b, event);
        }
    }
    return !1;
}

function callback_find_by_label(b, data) {
    TRACE_XY && logg("callback_find_by_label, testing " + b.blabel + ", against " + data.targ_blabel), b.blabel == data.targ_blabel && (data.go = !1, data.found_block = b, TRACE_XY && logg("...FOUND"));
}

function callback_find_any(b, data) {
    let absorbval;
    if (TRACE_XY && logg("callback_find_any, block " + b.blabel), null != b.tbl) ; else if (null != b.drawer) {
        let tracker = b.drawer.tracker;
        null != tracker ? (absorbval = null != b.drawer.parms ? tracker.apply(null, [ b, data.event ].concat(b.drawer.parms)) : tracker(b, data.event)) == Y ? (data.go = !1, data.absorber = b) : TRACE_XY && logg("  event was sent to block, but tracker not absorbed") : TRACE_XY && logg("  inside block, no tracking func");
    }
    TRACE_XY && !data.go && logg("  CONSUMED ");
}

function find_xy_in_grid(b, event, localx, localy) {
    let absorbval, colx, rowx, cumx, logcol, logrow, idx, idy, boxt, boxl, boxw, boxh, div = b.div, in_dead_space = !1;
    if (TRACE_XY && logg(str.conv("  find_xy_in_grid, local=[{num}, {num}]", localx, localy)), null == b.drawer.tracker) return !1;
    for (logcol = 1, colx = 0; colx < div.horz_slices.length; colx++) {
        if (idx = div.horz_slices[colx].id, boxl = div.horz_slices[colx].box.left, boxw = div.horz_slices[colx].box.width, localx >= boxl && localx < boxl + boxw) {
            in_dead_space = in_dead_space || idx == SKIP_SLICE;
            break;
        }
        idx != SKIP_SLICE && logcol++;
    }
    for (logrow = 1, rowx = 0; rowx < div.vert_slices.length; rowx++) {
        if (idy = div.vert_slices[rowx].id, boxt = div.vert_slices[rowx].box.top, boxh = div.vert_slices[rowx].box.height, localy >= boxt && localy < boxt + boxh) {
            in_dead_space = in_dead_space || idy == SKIP_SLICE;
            break;
        }
        idy != SKIP_SLICE && logrow++;
    }
    if ((logcol > div.ncols || logrow > div.nrows) && (in_dead_space = !0), in_dead_space) {
        if (0 == g_capture_bid) return !1;
        logcol = U, logrow = U, cumx = U, idx = U, idy = U;
    } else cumx = div.grid_tblr ? (logcol - 1) * div.nrows + logrow : (logrow - 1) * div.ncols + logcol;
    return setv(_M, 0, b.extra, F_cell_seq, cumx), setv(_M, 0, b.extra, F_cell, F_x, logcol), setv(_M, 0, b.extra, F_cell, F_y, logrow), setv(_M, 0, b.extra, F_cell_id, F_x, idx), setv(_M, 0, b.extra, F_cell_id, F_y, idy), 
    (absorbval = unfreeze_track(b, event, b.drawer)) == Y && (g_last_majorx > 0 && (setv(_M, 0, runtime, F_major_steps, g_last_majorx, F_hist_cell_cum, cumx), setv(_M, 0, runtime, F_major_steps, g_last_majorx, F_hist_cell, F_x, logcol), 
    setv(_M, 0, runtime, F_major_steps, g_last_majorx, F_hist_cell, F_y, logrow), setv(_M, 0, runtime, F_major_steps, g_last_majorx, F_hist_cell_id, F_x, idx), setv(_M, 0, runtime, F_major_steps, g_last_majorx, F_hist_cell_id, F_y, idy), 
    setv(_M, 0, runtime, F_major_steps, g_last_majorx, F_hist_absorber, b.blabel), TRACE_LOGGING && logg(str.conv(" -- updating absorber to {}", b.blabel))), !0);
}

function do_pointer_event(evkind, evtime, wherex, wherey, touch) {
    TRACE_EVENTS && evkind != EV_HOVER && logg(str.conv("do_pointer_event, xy=[{},{}], kind={}, capture={}", wherex, wherey, evkind, g_capture_bid));
    var event = new a_tree(_M, "$do_pointer_event", NF_UNSORTED);
    if (setv(_M, WHERE_LOOM, event, F_evkind, evkind), setv(_M, WHERE_LOOM, event, F_when, evtime), setv(_M, WHERE_LOOM, event, F_global_x, wherex), setv(_M, WHERE_LOOM, event, F_global_y, wherey), touch.mod_shf && setv(_M, WHERE_LOOM, event, F_is_shift, Y), 
    touch.mod_alt && setv(_M, WHERE_LOOM, event, F_is_alt, Y), touch.mod_cmd && setv(_M, WHERE_LOOM, event, F_is_cmd, Y), touch.mod_ctl && setv(_M, WHERE_LOOM, event, F_is_ctrl, Y), g_last_majorx = -1, evkind != EV_HOVER) {
        if (0 != g_capture_bid) return evkind != EV_HOVER && is_not_ide(g_capture_block) && (TRACE_XY && logg(str.conv(" -- adding major event captured ptr evt, first={}", g_capture_block.blabel)), g_last_majorx = add_major_event(event, null)), 
        TRACE_XY && logg("sending captured event to try_in_block"), try_in_block(g_capture_block, event), void (getn(event, F_evkind) == EV_DRAG_END && release_mouse());
        TRACE_XY && logg(str.conv("about to call visit_all, mouse=({n},{n})", wherex, wherey)), visit_all_containing(g_root_block, wherex, wherey, evkind, event);
    } else visit_hover(g_root_block, wherex, wherey, event);
}

function do_key_event(when, unistr, keycode, is_shift = !1, is_alt = !1, is_cmd = !1, is_ctrl = !1) {
    let b;
    if (g_interface_locked == Y) return TRACE_EVENTS && logg(str.conv("interface locked / suppressing key event, keycode=", keycode)), !1;
    let event = new a_tree(_M, "$do_key_event", NF_UNSORTED);
    setv(_M, WHERE_LOOM, event, F_evkind, EV_KEYBOARD), setv(_M, WHERE_LOOM, event, F_when, when), setv(_M, WHERE_LOOM, event, F_keycode, keycode), "" != unistr && setv(_M, WHERE_LOOM, event, F_unicode, unistr), 
    is_shift && setv(_M, WHERE_LOOM, event, F_is_shift, Y), is_alt && setv(_M, WHERE_LOOM, event, F_is_alt, Y), is_cmd && setv(_M, WHERE_LOOM, event, F_is_cmd, Y), is_ctrl && setv(_M, WHERE_LOOM, event, F_is_ctrl, Y);
    let sx = add_major_event(event, null);
    TRACE_LOGGING && logg(str.conv(" -- adding major event for key event at {}", sx));
    let data = new Object();
    return data.go = !0, data.event = event, data.absorber = null, k_visit_blocks_bottom_up(g_root_block, callback_find_any, data), null != (b = data.absorber) && (is_not_ide(b) ? (TRACE_LOGGING && logg(str.conv("  keystroke was absorbed by {}", b.blabel)), 
    setv(_M, 0, runtime, F_major_steps, sx, F_hist_absorber, b.blabel)) : (TRACE_LOGGING && logg(str.conv("  debugger keystroke, absorbed by {}, deleting {}", b.blabel, sx)), clear_tree(0, 0, adr(runtime, F_major_steps, sx))), 
    !0);
}

function try_in_block(b, event) {
    let globalx, globaly;
    if (b.bflags & BFLAG_DEAD) return !1;
    TRACE_XY && logg(str.conv("  try_in_block {} id={}", b.blabel, b.bid));
    let tracker = null;
    if (null != b.drawer && (tracker = b.drawer.tracker), null != tracker) {
        let local = global_to_local(b, globalx = getn(event, F_global_x), globaly = getn(event, F_global_y));
        if (setv(_M, 0, event, F_x, local.x), setv(_M, 0, event, F_y, local.y), TRACE_XY && logg(str.conv("try_in_block, {str}, evkind={n}, global=[{n},{n}], local=[{n},{n}], bounds={rect}", b.blabel, getn(event, F_evkind), globalx, globaly, local.x, local.y, b.bounds)), 
        null != b.tbl) {
            if (find_xy_in_table(b, event, local.x, local.y)) return TRACE_XY && logg("  CONSUMED by table"), !0;
            TRACE_XY && logg("  NOT CONSUMED by table");
        } else if (null != b.div && null != b.div.grid_func) {
            if (TRACE_XY && logg("  grid event to " + b.blabel), find_xy_in_grid(b, event, local.x, local.y)) return TRACE_XY && logg("  CONSUMED by grid"), !0;
            TRACE_XY && logg("  NOT CONSUMED by grid");
        } else {
            let absorbed;
            if ((absorbed = unfreeze_track(b, event, b.drawer)) == Y) return TRACE_XY && logg("  CONSUMED by block"), g_last_majorx > 0 && (TRACE_LOGGING && logg(str.conv(" -- updating absorber to {}", b.blabel)), 
            setv(_M, 0, runtime, F_major_steps, g_last_majorx, F_hist_absorber, b.blabel)), !0;
            TRACE_XY && logg("  NOT CONSUMED by block");
        }
    }
    return !!(b.bflags & BFLAG_MODAL) && (TRACE_XY && logg("  MODAL: silent absorption of pointer event"), !0);
}

function k_visit_blocks_bottom_up(b, callback, data) {
    let child, i, bx, children = b.childNodes, n = children.length;
    for (i = 1; i <= n && data.go; i++) (child = children[bx = n - i]).hasOwnProperty("bid") && (TRACE_VISIT && logg(str.conv("  deeper to {str}", child.blabel)), k_visit_blocks_bottom_up(child, callback, data));
    data.go && (TRACE_VISIT && logg(str.conv("k_visit_blocks_bottom_up passed to {str}, seq={n}", b.blabel, b.bseq)), callback(b, data));
}

function k_visit_blocks_top_down(b, callback, data) {
    data.go && (TRACE_OBSOLETE && logg(str.conv("k_visit_blocks_top_down {str}, seq={n}", b.blabel, b.bseq)), callback(b, data));
    let child, i, children = b.childNodes, n = children.length;
    for (i = 0; i < n && data.go; i++) (child = children[i]).hasOwnProperty("bid") && (gg_depth += 1, k_visit_blocks_top_down(child, callback, data), gg_depth -= 1);
}

function k_find_block_by_label(b, label) {
    let result, child, i, children = b.childNodes, n = children.length;
    for (i = 0; i < n; i++) if ((child = children[i]).hasOwnProperty("bid") && null != (result = k_find_block_by_label(child, label))) return result;
    return TRACE_FIND && logg(str.conv("k_find_block_by_label, curr={}, targ={}", b.blabel, label)), b.blabel == label ? b : null;
}

function k_find_block_by_locator(b, targ_label, targ_locater) {
    let result, child, i, children = b.childNodes, n = children.length;
    for (i = 0; i < n; i++) if ((child = children[i]).hasOwnProperty("bid") && null != (result = k_find_block_by_locator(child, targ_label, targ_locater))) return result;
    return TRACE_FINDBX && logg(str.conv("testing {str} {n}, targ {str} {n}", b.blabel, b.locator, targ_label, targ_locater)), b.blabel == targ_label && b.locator == targ_locater ? (TRACE_FINDBX && logg("  FOUND!"), 
    b) : null;
}

function k_find_block_by_id(b, targid) {
    let result, child, i, children = b.childNodes, n = children.length;
    for (i = 0; i < n; i++) if ((child = children[i]).hasOwnProperty("bid") && null != (result = k_find_block_by_id(child, targid))) return result;
    return b.bid == targid ? b : null;
}

function global_to_local(block, globalx, globaly) {
    let cornerx = globalx, cornery = globaly, element = block;
    cornerx -= window.scrollX, cornery -= window.scrollY;
    do {
        cornerx -= element.offsetLeft, cornery -= element.offsetTop, TRACE_GTOL && logg(`global_to_local, b=${element.blabel}, sTop=${element.scrollTop}`), cornerx += element.scrollLeft, cornery += element.scrollTop;
        let ss = element.style.transformOrigin;
        if ("" != ss) {
            let list = ss.split(" ");
            list[0].length > 2 && (cornerx -= Number(list[0].substring(0, list[0].length - 2))), list[1].length > 2 && (cornery -= Number(list[1].substring(0, list[1].length - 2)));
        }
        element = element.offsetParent;
    } while (null != element);
    return TRACE_GTOL && logg(`.. mapped (${globalx},${globaly}) to (${cornerx},${cornery})`), new Point(cornerx, cornery);
}

function local_to_global_p(block, local = null) {
    let cornerx = 0, cornery = 0, element = block;
    null != local && (cornerx = local.x, cornery = local.y);
    let ss = element.style.transformOrigin;
    if ("" != ss) {
        let list = ss.split(" ");
        list[0].length > 2 && (cornerx += Number(list[0].substring(0, list[0].length - 2))), list[1].length > 2 && (cornery += Number(list[1].substring(0, list[1].length - 2)));
    }
    let bbounds = block.getBoundingClientRect();
    return new Point(bbounds.left + window.scrollX + cornerx, bbounds.top + window.scrollY + cornery);
}

function local_to_global_r(block, local = null) {
    let result, bbounds = block.getBoundingClientRect();
    return result = null == local ? new Rectangle(bbounds.left + window.scrollX, bbounds.top + window.scrollY, bbounds.width, bbounds.height) : new Rectangle(bbounds.left + window.scrollX + local.left, bbounds.top + window.scrollY + local.top, local.width, local.height);
}

export function k_isolate(parent, bounds, label, drawer) {
    unfreeze_draw(new_block(parent, bounds, BKIND_SUBSET, label, drawer), drawer);
};

function visit_hover(b, globalx, globaly, event) {
    var child, i, gbounds = local_to_global_r(b), is_inside = b.blabel == ROOT_BLABEL || xy_in_rect(globalx, globaly, gbounds), children = b.childNodes, n = children.length;
    for (i = 1; i <= n; i++) if ((child = children[n - i]).hasOwnProperty("bid")) {
        if (TRACE_XY && logg(str.conv("  recursive to child {}: {str}", i, child.blabel)), visit_hover(child, globalx, globaly, event)) return !0;
    } else TRACE_XY && logg("child " + String(i) + " is not a block: " + String(child));
    return is_inside != b.is_inside && (b.is_inside = is_inside, setv(_M, 0, event, F_evkind, is_inside ? EV_ENTER : EV_LEAVE), try_in_block(b, event)), !1;
}

function visit_all_containing(b, globalx, globaly, evkind, event) {
    let absorbed, gbounds, is_inside_block, not_ide;
    if (gbounds = local_to_global_r(b), is_inside_block = b.blabel == ROOT_BLABEL || xy_in_rect(globalx, globaly, gbounds), TRACE_XY && logg(str.conv(" testing #{}:{str}, xy=[{},{}], bounds={rect}, gbounds={rect}, inside={}", b.bid, b.blabel, globalx, globaly, b.bounds, gbounds, is_inside_block)), 
    is_inside_block) {
        if (g_last_majorx < 0) if (not_ide = is_not_ide(b)) {
            if (0 == g_time_scale) return TRACE_LOGGING && logg("--ignoring click while frozen"), !0;
            TRACE_LOGGING && logg(str.conv(" -- adding major event for ptr event, first={}", b.blabel)), g_last_majorx = add_major_event(event, null);
        } else TRACE_LOGGING && logg(str.conv(" -- is IDE event {}", b.blabel));
        let child, i, bx, children = b.childNodes, n = children.length;
        for (i = 1; i <= n; i++) if ((child = children[bx = n - i]).hasOwnProperty("bid")) {
            if (TRACE_XY && logg(str.conv("  recursive to child {}: {str}", i, child.blabel)), visit_all_containing(child, globalx, globaly, evkind, event)) return !0;
        } else TRACE_XY && logg("child " + String(i) + " is not a block: " + String(child));
        return absorbed = try_in_block(b, event), TRACE_EVENTS && evkind == EV_DRAG_BEGIN && logg(`>> DRAG_BEGIN, absorbed=${absorbed}`), absorbed && (TRACE_XY && logg("    ...absorbed event"), evkind == EV_DRAG_BEGIN && 0 == g_capture_bid && capture_mouse(b)), 
        absorbed;
    }
    return !1;
}

function callback_compare_label(b, data) {
    TRACE_K && logg("callback_compare_label, " + b.blabel + " against " + data.label), b.blabel == data.label && (data.result = b, data.go = !1);
}

function callback_dump(b, data) {
    logg(b.blabel + str.conv(": bounds={rect}, depth={}", b.bounds, gg_depth));
}

function dump_display_list() {
    let data;
    logg("=== ALL BLOCKS ==="), gg_depth = 0, k_visit_blocks_top_down(g_root_block, callback_dump, data = {
        go: !0
    }), logg("=== ..end blocks.. ===");
}

function k_del_all_children(b) {
    if (null != b) {
        if (TRACE_OBSOLETE && logg("  k_del_all_children, starting at " + b.blabel), b.has_transform) b = b.firstChild.firstChild;
        for (;b.firstChild; ) b.removeChild(b.lastChild);
    }
}

function k_find_by_label(targlabel) {
    let data;
    return k_visit_blocks_bottom_up(g_root_block, callback_compare_label, data = {
        go: !0,
        label: targlabel,
        result: null
    }), data.result;
}

function is_not_ide(b) {
    return null == b || 0 == (b.bflags & BFLAG_IDE);
}

function rebuild_affected_blocks(b) {
    let do_children, entry_id;
    if (TRACE_OBSOLETE && b.blabel == OBBLOCK && logg(str.conv("rebuild_affected block={str}, id={n}, seq={n}, ndep={}", b.blabel, b.bid, b.bseq, b.usesz.length)), do_children = !0, is_block_obsolete(b) && (TRACE_OBSOLETE && logg("  OBSOLETE " + b.blabel), 
    entry_id = document.activeElement.id, LOG_DRAW && g_first_mon_draw && is_not_ide(b) && (g_first_mon_draw = !1, add_major_event(DRAW_EVENT, b)), null != b.drawer.parms ? b.drawer.code.apply(null, [ b ].concat(b.drawer.parms)) : b.drawer.code(b), 
    TRACE_OBSOLETE && logg(str.conv("  ..end rebuild of {str}, seq={n}", b.blabel, b.bseq)), do_children = !1, "" != entry_id)) {
        var elem = document.getElementById(entry_id);
        null != elem && elem.focus();
    }
    if (do_children) {
        let child, i, children = b.childNodes, n = children.length;
        for (i = 0; i < n; i++) (child = children[i]).hasOwnProperty("bid") && rebuild_affected_blocks(child);
    }
}

export function rebuild_all() {
    var maind, firstx = getn(runtime, F_major_firstx);
    if (firstx == U && (firstx = getn(runtime, F_major_stepx), setv(_M, 0, runtime, F_major_firstx, firstx)), null != (maind = null != aaaa.mon_drawer ? aaaa.mon_drawer : aaaa.main_drawer)) {
        for (var node = document.body; node.firstChild; ) node.removeChild(node.lastChild);
        let horz = USABLE_H, vert = USABLE_V;
        setv(_M, 0, runtime, F_window_horz, horz), setv(_M, 0, runtime, F_window_vert, vert), TRACE_RESIZE && console.log(`---\x3e rebuild_all: total ${horz} x ${vert}`);
        let interior = new Rectangle(0, 0, horz, vert);
        g_root_block = new_block(null, interior, BKIND_ROOT, ROOT_BLABEL, maind), document.body.appendChild(g_root_block), post_resize_event(g_root_block, maind.tracker), LOG_DRAW && add_major_event(DRAW_EVENT, g_root_block), 
        maind.code(g_root_block), TRACE_K && dump_display_list();
    }
};

function post_resize_event(b, trackerf) {
    if (null != trackerf) {
        var resize_event = new a_tree(_M, "$resize_event");
        setv(_M, 0, resize_event, F_evkind, EV_RESIZE), setv(_M, 0, resize_event, F_when, 0), LOG_DRAW && add_major_event(resize_event, b), trackerf(b, resize_event);
    }
}

function check_tree_for_dirty(node) {
    let child, some_dirty;
    for (child of (some_dirty = !1, node.children)) 0 != (child.eflags & EF_IS_DERIVED) && (TRACE_OBSOLETE && logg(str.conv("  checking child.sub={n}", child.sub)), g_fields_to_mark.indexOf(child.sub) >= 0 && (TRACE_OBSOLETE && logg(str.conv("  marking field as dirty {n}", child.sub)), 
    child.eflags |= EF_IS_DIRTY, some_dirty = !0)), some_dirty && (node.seq = g_currseq), null != child.children && check_tree_for_dirty(child);
}

function trickle(seconds) {
    let topnode, ff;
    if (null != g_root_block) {
        if (0 != g_fields_to_mark.length) {
            if (TRACE_TRICKLE) for (ff of (logg("trickle, checking for marked fields, nmarked=" + String(g_fields_to_mark.length) + ", marked_fields="), g_fields_to_mark)) logg(str.conv(" {n}", ff));
            for (topnode of TREES) TRACE_TRICKLE && logg("trickle, check top node " + topnode.val), check_tree_for_dirty(topnode);
            g_fields_to_mark.length = 0;
        }
        TRACE_TRICKLE && g_last_drawn_seq != g_currseq && logg(str.conv("trickle, last_drawn={}, currseq={}", g_last_drawn_seq, g_currseq)), g_last_drawn_seq < g_currseq && (g_first_mon_draw = !0, rebuild_affected_blocks(g_root_block), 
        null != aaaa.menubar_func && (g_first_mon_draw = !1, rebuild_affected_blocks(g_menu_block)), g_last_drawn_seq = g_currseq, TRACE_TRICKLE && logg(str.conv("..end trickle, last_drawn={n}", g_last_drawn_seq)));
    }
}

/*
export function cookie_write(key, val, options) {
    var lifespan = U;
    for (let property in options) switch (property) {
      case "duration":
        (lifespan = options.duration instanceof a_meas ? options.duration.mag : options.duration) == INFINITY && (lifespan = 100 * SECONDS_PER_YEAR);
        break;

      default:
        argument_err("bad option: " + property);
    }
    var cookie = `${key}=` + cookie_encode(val);
    lifespan != U && (cookie += `;max-age=${lifespan}`), cookie.length < 4096 ? document.cookie = cookie : console.error(`Warning, cookie too big (${cookie.length})`);
};
*/

export function cookie_write(key, val, options) {
    var lifespan = U;

    for (let property in options) {
      switch (property) {                    
        case 'duration':
            if (options.duration instanceof a_meas) {
                lifespan = options.duration.mag;
            } else {
                //  allow a plain number also during testing
                lifespan = options.duration;
            }
            if (lifespan == INFINITY)
                lifespan = SECONDS_PER_YEAR*100;  //  a very big number
            break;                    
        
        default:
            //  bad option somewhere in the args
            argument_err("bad option: "+property);
            
        } // end switch
    } // end for

    //  encode the data into string form
    var data = cookie_encode(val);
    var cookie = `${key}=` + data;

    if (lifespan != U)  {
        //  cookie max-age is in seconds
        cookie += `;max-age=${lifespan};SameSite=Strict`; //SameSite=Lax 
    }

    if (cookie.length < 4096) 
        document.cookie = cookie;  // appends the cookie
    else
        //  don't write the cookie just warn the user it will get truncated
        console.error(`Warning, cookie too big (${cookie.length})`);
}

export function cookie_read(key) {
  for (var list = document.cookie ? document.cookie.split("; ") : [], i = 0, n = list.length; i != n; i++) {
      var cookie = list[i], f = cookie.indexOf("=");
      if (f >= 0) {
          var name = cookie.substring(0, f), vals = cookie.substring(f + 1);
          if (name == key) return cookie_decode(vals);
      }
  }
  return U;
};

export function cookie_del(key) {
    document.cookie = `${key}=;max-age=0`;
};

export function cookie_exists(key) {
    var regexp = new RegExp("(?:^|; )" + key + "=([^;]*)(?:$|; )");
    return document.cookie.match(regexp) ? Y : N;
};

function cookie_encode(val) {
    var buf = new_bytes(4096);
    return val instanceof a_tree ? bytes_put_tree(buf, adr(val)) : val instanceof a_path ? bytes_put_tree(buf, val) : bytes_put_val(buf, val, 0), arraybuf_to_base64(buf.arraybuf, buf.position);
}

function cookie_decode(base64_str) {
    if ("" == base64_str) return U;
    var val, bytes = ArrayBuffer_to_ByteArray(base64_to_arraybuf(base64_str), LITTLE_ENDIAN), opcode = bytes_get_u8(bytes);
    return opcode == SOP_TREE_BIN ? bytes_get_tree(bytes, adr(val = new a_tree(_M, "$cookie_decode"))) : val = bytes_get_val2(bytes, opcode), val;
}

const BASE64C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function arraybuf_to_base64(arraybuffer, len) {
    for (var bytes = new Uint8Array(arraybuffer), ss = "", i = 0; i < len; i += 3) ss += BASE64C[bytes[i] >> 2], ss += BASE64C[(3 & bytes[i]) << 4 | bytes[i + 1] >> 4], ss += BASE64C[(15 & bytes[i + 1]) << 2 | bytes[i + 2] >> 6], 
    ss += BASE64C[63 & bytes[i + 2]];
    return len % 3 == 2 ? ss = ss.substring(0, ss.length - 1) + "=" : len % 3 == 1 && (ss = ss.substring(0, ss.length - 2) + "=="), ss;
}

function base64_to_arraybuf(base64) {
    var i, encoded1, encoded2, encoded3, encoded4, bufferLength = .75 * base64.length, len = base64.length, p = 0;
    "=" === base64[base64.length - 1] && (bufferLength--, "=" === base64[base64.length - 2] && bufferLength--);
    var lookup = new Uint8Array(256);
    for (i = 0; i < 64; i++) lookup[BASE64C.charCodeAt(i)] = i;
    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) encoded1 = lookup[base64.charCodeAt(i)], encoded2 = lookup[base64.charCodeAt(i + 1)], encoded3 = lookup[base64.charCodeAt(i + 2)], encoded4 = lookup[base64.charCodeAt(i + 3)], 
    bytes[p++] = encoded1 << 2 | encoded2 >> 4, bytes[p++] = (15 & encoded2) << 4 | encoded3 >> 2, bytes[p++] = (3 & encoded3) << 6 | 63 & encoded4;
    return arraybuffer;
}

function k_init() {
    DRAW_EVENT = new a_tree(_M, "$DRAW_EVENT"), setv(_M, 0, DRAW_EVENT, F_evkind, EV_DRAW), g_interface_locked = !1, g_capture_bid = 0, g_capture_block = null, g_field_mark_func = {}, g_fields_to_mark = [], 
    g_last_drawn_seq = 1e3;
}