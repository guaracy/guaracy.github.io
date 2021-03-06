import { a_function, a_gradient, a_image, a_loom_element, a_meas, a_sound, a_tree, a_path } from "./beads_std.js";

import * as std from "./beads_std.js";

import * as str from "./beads_str.js";

const TRACE_AUTO = !1, TRACE_BLOCKS = !1, TRACE_CAPTURE = !1, TRACE_DPI = !1, TRACE_ENTER = !1, TRACE_EVENTS = !1, TRACE_EXPLODE = !1, TRACE_EXTRA = !1, TRACE_FIND = !1, TRACE_FINDBX = !1, TRACE_GRID = !1, TRACE_K = !1, TRACE_LOGGING = !1, TRACE_OBSOLETE = !1, TRACE_TRICKLE = !1, TRACE_SCROLL = !1, TRACE_TBL = !1, TRACE_VISIT = !1, TRACE_XFORM = !1, TRACE_XTRA = !1, TRACE_XY = !1, TRACE_GTOL = !1, OBBLOCK = "$root", M = "std", MARK_OVERFLOW = !1;

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

export const BKIND_SCROLL = 6;

export const BKIND_TABLE_BASE = 7;

export const BKIND_TABLE_ROW = 8;

export const BKIND_OVERLAY = 9;

export const BKIND_MEASURING = 10;

export const BKIND_MENUBAR = 11;

export const NODRAW = null;

export const NOTRACK = null;

export const NOCALC = null;

export const NOCELLTRACK = null;

export const ROOT_BLABEL = "$root";

const LOG_DRAW = !1;

let DRAW_EVENT, g_last_drawn_seq, g_first_mon_draw;

export const SCROLL_SMALL_STEP = 1 / 12;

export const SCROLL_BIG_STEP = .95;

export let g_interface_locked;

export let g_root_block = null;

export let g_root2_block = null;

export let g_menu_block = null;

export let g_capture_bid;

export let g_capture_block;

export let g_last_majorx;

export let g_field_mark_func;

export let g_fields_to_mark;

export let gg_depth;

export let g_curr_block = null;

export let g_block_stack = [];

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
    this.backcolor = std.U, this.prepped = !1, this.nrows = 0, this.tot_height = 0, this.rawgrid = [], this.rawdots = [], this.rowm = [], this.rows = [], this.s = [];
}

export function k_root2(b) {
    g_root2_block = b;
};

function capture_mouse(b) {
    TRACE_CAPTURE && std.logg("capture_mouse by " + b.blabel), 0 != g_capture_bid && std.argument_err("nested calls to capture not supported"), g_capture_bid = b.bid, g_capture_block = b;
}

function release_mouse() {
    TRACE_CAPTURE && std.logg("release_mouse"), g_capture_bid = 0, g_capture_block = null;
}

export function k_layer(parent, drawf, options) {
    let in_b, in_l, in_r, in_t, indent, newb, canvas_dest = null, dpi = parent.dpi, height = parent.bounds.height, left = 0, opacity = 1, pin = std.U, skewx = 0, skewy = 0, top = 0, tx = 0, ty = 0, width = parent.bounds.width;
    for (let property in options) switch (property) {
      case "area":
        left = std.getn(options.area, std.F_left), top = std.getn(options.area, std.F_top), width = std.getn(options.area, std.F_width), height = std.getn(options.area, std.F_height);
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
        std.is_numeric(options.opacity) != std.Y && std.argument_err("bad arg"), opacity = options.opacity;
        break;

      case "pin":
        std.is_numeric(options.pin) != std.Y && std.argument_err("bad arg"), pin = options.pin;
        break;

      case "dpi":
        std.is_numeric(options.dpi) != std.Y && std.argument_err("bad arg"), dpi = options.dpi;
        break;

      case "tx":
        std.is_numeric(options.tx) != std.Y && std.argument_err("bad arg"), left = options.tx;
        break;

      case "ty":
        std.is_numeric(options.ty) != std.Y && std.argument_err("bad arg"), top = options.ty;
        break;

      case "skewx":
        std.is_numeric(options.skewx) != std.Y && std.argument_err("bad arg"), skewx = options.skewx;
        break;

      case "skewy":
        std.is_numeric(options.skewy) != std.Y && std.argument_err("bad arg"), skewy = options.skewy;
        break;

      default:
        std.argument_err("### bad property in options: " + property);
    }
    if (!std.CHECKS || std.is_numeric(left) == std.Y && std.is_numeric(top) == std.Y && std.is_numeric(width) == std.Y && std.is_numeric(height) == std.Y || std.argument_err("bad bounds"), null != canvas_dest) {
        var canvas = document.createElement("canvas");
        canvas.id = parent.blabel + ":canvas", canvas.width = width, canvas.height = height, canvas.style.left = String(left) + "px", canvas.style.top = String(top) + "px", canvas.style.width = String(width) + "px", 
        canvas.style.height = String(height) + "px", canvas.style.position = "absolute", parent.appendChild(canvas), (newb = {}).bounds = new std.Rectangle(0, 0, width, height), newb.can = canvas, newb.ctx = canvas.getContext("2d"), 
        newb.dpi = dpi;
        var extra = new a_tree(M, "$new_layer");
        std.setv(M, 0, extra, std.F_box, std.F_left, 0), std.setv(M, 0, extra, std.F_box, std.F_top, 0), std.setv(M, 0, extra, std.F_box, std.F_width, width), std.setv(M, 0, extra, std.F_box, std.F_height, height), 
        newb.extra = extra, std.setv(M, 0, canvas_dest, std.F_width, width), std.setv(M, 0, canvas_dest, std.F_height, height), std.setv(M, 0, canvas_dest, std.F_sysobj, newb);
    } else if ((newb = std.new_block(parent, new std.Rectangle(left, top, width, height), BKIND_SUBSET, drawf.name, drawf, null, parent.dest)).style.opacity = opacity, dpi != std.U && (newb.dpi = dpi), 5 == pin) {
        tx = width / 2, ty = height / 2;
        var old_svg = std.js_svg_wrapper(newb, opacity), group = document.createElementNS(std.SVG_NS, "g");
        group.setAttribute("transform", `translate(${tx} ${ty})`), old_svg.appendChild(group), newb.has_transform = !0, newb.bkind = BKIND_SUBSET;
    }
    return newb;
};

export function k_set_bounds(b, screenbox) {
    b.style.left = screenbox.left, b.style.top = screenbox.top, b.style.width = screenbox.width, b.style.height = screenbox.height, b.bounds = new std.Rectangle(0, 0, screenbox.width, screenbox.height), std.setv(M, 0, b.extra, std.F_box, std.F_left, 0), 
    std.setv(M, 0, b.extra, std.F_box, std.F_top, 0), std.setv(M, 0, b.extra, std.F_box, std.F_width, screenbox.width), std.setv(M, 0, b.extra, std.F_box, std.F_height, screenbox.height), std.setv(M, 0, b.extra, std.F_boxtot, std.F_left, 0), 
    std.setv(M, 0, b.extra, std.F_boxtot, std.F_top, 0), std.setv(M, 0, b.extra, std.F_boxtot, std.F_width, screenbox.width), std.setv(M, 0, b.extra, std.F_boxtot, std.F_height, screenbox.height);
};

function snap_rectangle(box) {
    let net_left = Math.round(box.left), net_top = Math.round(box.top), net_right = Math.round(box.left + box.width), net_bottom = Math.round(box.top + box.height);
    return new std.Rectangle(net_left, net_top, net_right - net_left, net_bottom - net_top);
}

export function refresh_all(refresh_menubar = !1) {
    g_last_drawn_seq = 0, g_root_block.bseq = 1, refresh_menubar && (g_menu_block.bseq = 1);
};

export function in_to_dots(thisb, inches, round = !1) {
    let result;
    return thisb.dest == std.FOR_PRINT ? result = inches * std.getn(g_print_options, std.PRINT_RESOLUTION) : (result = inches * std.SCREEN_DPI, round ? Math.round(result) : result);
};

export function unit_to_pixels(block, meas, unit, roundf = !1) {
    let result;
    switch (result = 0, unit) {
      case std.al:
        std.argument_err("asking for phys size of a non-physical unit");
        break;

      case std.px:
        result = roundf ? Math.round(meas) : meas;
        break;

      case std.pt:
        result = std.pt_to_dots(block, meas), roundf && (result = Math.round(result));
        break;

      case std.pc:
        result = std.pt_to_dots(block, 12 * meas), roundf && (result = Math.round(result));
        break;

      default:
        std.argument_err("unsupported unit type");
    }
    return result;
};

export function draw_err_box(container, arg_id, arg_box) {
    std.draw_rect(container, arg_box, {
        fill: 16711680
    });
};

export function k_enter(b) {
    b.nesting += 1, 1 == b.nesting ? (g_block_stack.push(g_curr_block), g_curr_block = b, b.usesz.length = 0, k_del_all_children(b), b.div = null, b.tbl = null, TRACE_ENTER && std.logg(str.conv("k_enter, " + b.blabel + ", bounds={rect}, scroll={rect}, seq={n}", b.bounds, b.scrollRect, b.bseq))) : TRACE_K && std.logg("...ignoring nested block " + b.blabel);
};

export function k_leave(b) {
    b.nesting -= 1, std.CHECKS && (b.nesting < 0 && std.internal_err("block was left more times than entered " + b.blabel), null != b.div && b.div.open && std.internal_err("forgot to call div_end before leaving this block!")), 
    0 == b.nesting && (g_curr_block = g_block_stack.pop(), b.bseq = std.g_currseq, TRACE_ENTER && std.logg(str.conv("..k_leave, " + b.blabel + ", seq={n}", b.bseq)));
};

export function k_push(b) {
    std.internal_err("not yet implemented");
};

export function k_pop(b) {
    std.internal_err("not yet implemented");
};

export function k_inset_to_rect(b, new_bounds, arg_draw_func = null) {
    let new_child;
    arg_draw_func(new_child = std.new_block(b, new_bounds, BKIND_SUBSET, b.blabel + ":inset", arg_draw_func, b.dest));
};

export function k_inset(b, arg_meas_n, arg_meas_s, arg_meas_e, arg_meas_w, arg_unit, arg_draw_func, arg_track_func = NOTRACK) {
    let inset_n, inset_s, inset_e, inset_w, new_bounds;
    TRACE_K && std.logg("k_inset on block " + b.blabel), inset_n = 0, inset_s = 0, inset_e = 0, inset_w = 0, std.is_numeric(arg_meas_n) == std.Y && arg_meas_n >= 0 ? inset_n = unit_to_pixels(b, arg_meas_n, arg_unit) : std.CHECKS && std.argument_err("invalid inset"), 
    std.is_numeric(arg_meas_s) == std.Y && arg_meas_s >= 0 ? inset_s = unit_to_pixels(b, arg_meas_s, arg_unit) : std.CHECKS && std.argument_err("invalid inset"), std.is_numeric(arg_meas_e) == std.Y && arg_meas_e >= 0 ? inset_e = unit_to_pixels(b, arg_meas_e, arg_unit) : std.CHECKS && std.argument_err("invalid inset"), 
    std.is_numeric(arg_meas_w) == std.Y && arg_meas_w >= 0 ? inset_w = unit_to_pixels(b, arg_meas_w, arg_unit) : std.CHECKS && std.argument_err("invalid inset"), new_bounds = new std.Rectangle(b.bounds.left + inset_w, b.bounds.top + inset_n, b.bounds.width - inset_w - inset_e, b.bounds.height - inset_n - inset_s), 
    TRACE_K && std.logg(str.conv("after inset of {n1},{n1},{n1},{n1}, bounds {rect}", inset_n, inset_s, inset_e, inset_w, new_bounds)), k_inset_to_rect(b, new_bounds, arg_draw_func, arg_track_func);
};

export function k_indent_to_net(block, targh, targv, justh, justv, arg_draw_func, arg_track_func = NOTRACK) {
    let pixels_h, pixels_v, excess_h, excess_v, indent_n, indent_s, indent_e, indent_w;
    !std.CHECKS || std.is_numeric(justh) == std.Y && std.is_numeric(justv) == std.Y && std.is_numeric(targh) == std.Y && std.is_numeric(targv) == std.Y || std.argument_err("non-numeric inputs"), justh = Math.max(0, Math.min(1, justh)), 
    justv = Math.max(0, Math.min(1, justv)), pixels_h = targh, excess_h = Math.max(0, block.bounds.width - pixels_h), pixels_v = targv, excess_v = Math.max(0, block.bounds.height - pixels_v), indent_w = Math.round(excess_h * justh), 
    indent_e = Math.max(0, excess_h - indent_w), indent_n = Math.round(excess_v * justv), indent_s = Math.max(0, excess_v - indent_n), TRACE_K && std.logg(str.conv("indent_to_net, targ {n},{n}, pixels {n},{n}, excess {n},{n}", targh, targv, pixels_h, pixels_v, excess_h, excess_v)), 
    k_inset(block, indent_n, indent_s, indent_e, indent_w, std.px, arg_draw_func, arg_track_func);
};

export function tbl_begin(block) {
    let result;
    return TRACE_K && std.logg("tbl_begin"), result = new a_tbl_spec(), block.tbl = result, result;
};

function calc_physical(block, avail, avail2, pairs, tentative) {
    let tot_aliquots, pixels_per_al, i, leftover, nal, pixels, per_al, tot_tentative;
    for (tot_tentative = 0, tot_aliquots = 0, nal = 0, i = 0; i < pairs.length; ) pairs[i].unit == std.al ? (nal += 1, tot_aliquots += pairs[i].width, tentative[i] = 0) : (pixels = unit_to_pixels(block, pairs[i].width, pairs[i].unit), 
    tentative[i] = pixels, tot_tentative += pixels), i += 1;
    if (0 != nal) {
        for (pixels_per_al = (leftover = avail - tot_tentative) / tot_aliquots, tot_tentative = 0, i = 0; i < pairs.length; ) pairs[i].unit == std.al ? (pixels = pairs[i].width * pixels_per_al, tentative[i] = pixels, 
        tot_tentative += pixels) : tot_tentative += tentative[i], i += 1;
        for (leftover = avail - tot_tentative, leftover = avail - tot_tentative - nal * (per_al = Math.floor(leftover / nal)), i = 0; i < pairs.length; ) pairs[i].unit == std.al && (tentative[i] += per_al, tot_tentative += per_al, 
        leftover > 0 && (tentative[i] += 1, tot_tentative += 1, leftover -= 1)), i += 1;
    }
    return tot_tentative;
}

export function tbl_begin_rows(b) {
    let raw_cum, pos, sx, ix, rawc = b.tbl.rawgrid, rawdots = b.tbl.rawdots, mytbl = b.tbl;
    for (ix in mytbl.prepped && std.argument_err("double call of tbl_end!"), mytbl.prepped = !0, mytbl.tot_width = calc_physical(b, b.bounds.width, b.bounds.height, rawc, rawdots), raw_cum = [], pos = 0, 
    rawc) raw_cum.push(pos), pos += rawdots[ix];
    for (sx in raw_cum.push(pos), mytbl.s) for (ix in mytbl.s[sx].fields) std.CHECKS && (mytbl.s[sx].fields[ix].startcol - 1 >= rawc.length || mytbl.s[sx].fields[ix].startcol > mytbl.s[sx].fields[ix].stopcol || mytbl.s[sx].fields[ix].stopcol - 1 >= rawc.length) && std.argument_err("logical columns not reasonable"), 
    mytbl.s[sx].fields[ix].startdot = raw_cum[mytbl.s[sx].fields[ix].startcol - 1], mytbl.s[sx].fields[ix].stopdot = raw_cum[mytbl.s[sx].fields[ix].stopcol];
};

export function tbl_end_rows(b) {
    let row_heights, row, tot_height, pos, r_left, r_top, r_right, r_bottom, mytbl = b.tbl;
    for (row in row_heights = new Array(mytbl.rowm.length), tot_height = calc_physical(b, b.bounds.height, b.bounds.width, mytbl.rowm, row_heights), pos = 0, mytbl.rows) r_top = pos, r_bottom = pos += row_heights[row], 
    r_left = 0, r_right = Math.min(mytbl.tot_width, b.bounds.width), mytbl.rows[row].rowbox = new std.Rectangle(r_left, r_top, r_right - r_left, r_bottom - r_top), TRACE_K && std.logg(str.conv("  row={}, rowbox={rect}", row, mytbl.rows[row].rowbox));
    mytbl.tot_height = tot_height, TRACE_BLOCKS && std.logg("..end tbl_end, nrows=" + mytbl.nrows);
};

export function tbl_draw(b, startrow) {
    let rowID, rowx, endrow, dx, dy, net, tbl, row_ptr, first = !0;
    for (tbl = b.tbl, std.is_numeric(tbl.backcolor) == std.Y && (SKIPBG ? std.draw_rect(b, b.bounds, {
        fill: std.WHITE
    }) : std.draw_rect(b, b.bounds, {
        fill: tbl.backcolor
    })), dx = 0, b.dest == std.FOR_SCREEN && null != b.horz_scroll_link && (dx = -std.getn(b.horz_scroll_link, std.F_s_position)), dy = 0, b.dest == std.FOR_SCREEN ? b.vert_scroll_link && (dy = -std.getn(b.vert_scroll_link, std.F_s_position)) : dy = -tbl.rows[startrow].rowbox.top, 
    TRACE_TBL && std.logg(str.conv("tbl_draw, bounds={rect}, scroll={rect}, nsect={}, startrow={}, nrows={}, dx={}, dy={}", b.bounds, b.scrollRect, tbl.s.length, startrow, tbl.nrows, dx, dy)), rowx = startrow; rowx < tbl.nrows; ) {
        if ((rowID = (row_ptr = tbl.rows[rowx]).rowid) != std.U) {
            if (net = std.solve_rectR({
                basis: row_ptr.rowbox,
                dx: dx,
                dy: dy
            }), TRACE_TBL && std.logg(str.conv("  rowbox after adjustment {rect}, was {rect}", net, row_ptr.rowbox)), net.bottom < b.bounds.top) {
                TRACE_TBL && std.logg("  ..row not yet visible"), rowx += 1;
                continue;
            }
            if (net.top > b.bounds.bottom) {
                TRACE_TBL && std.logg("..row past bottom");
                break;
            }
            if (b.dest == std.FOR_PRINT && net.bottom > b.bounds.bottom && !first) {
                TRACE_TBL && std.logg("..stopping, print row will get truncated");
                break;
            }
            if (first = !1, TRACE_TBL && std.logg(str.conv("rowback rowx={}, net={rect}", rowx, net)), DUMMY_ROW_CONTENT) std.draw_rect(b, net, {
                fill: std.rgb255(std.random_range_int(100, 255), std.random_range_int(100, 255), std.random_range_int(100, 255)),
                opacity: .5
            }), std.draw_str(b, str.to_str(rowx), net, {
                size: std.pt_to_dots(b, 10)
            }); else {
                let drawf = row_ptr.rowkind_ptr.rowdrawf;
                std.setv(M, 0, b.extra, std.F_cell_id, std.F_y, rowID), std.setv(M, 0, b.extra, std.F_cell, std.F_y, rowx), std.setv(M, 0, b.extra, std.F_box, std.F_left, net.left), std.setv(M, 0, b.extra, std.F_box, std.F_top, net.top), 
                std.setv(M, 0, b.extra, std.F_box, std.F_width, net.width), std.setv(M, 0, b.extra, std.F_box, std.F_height, net.height), drawf(b, row_ptr);
            }
        }
        rowx += 1;
    }
    return endrow = rowx, TRACE_TBL && std.logg(str.conv("..end table draw, startrow={}, endrow={}", startrow, endrow)), endrow;
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

export function tbl_calc_field(b, rowp, colx) {
    let top = rowp.rowbox.top, height = rowp.rowbox.height, rowkindp = rowp.rowkind_ptr, left = rowkindp.fields[colx - 1].startdot, width = rowkindp.fields[colx - 1].stopdot - left;
    std.setv(M, 0, b.extra, std.F_box, std.F_left, left), std.setv(M, 0, b.extra, std.F_box, std.F_top, top), std.setv(M, 0, b.extra, std.F_box, std.F_width, width), std.setv(M, 0, b.extra, std.F_box, std.F_height, height), 
    std.setv(M, 0, b.extra, std.F_cell, std.F_x, colx);
};

export function tbl_find_rowkind(targid, s) {
    let sx;
    for (sx in s) if (s[sx].kindID == targid) return s[sx];
    return null;
};

export function tbl_add_spa(arg_tbl, arg_meas, arg_unit) {
    arg_tbl.rowm.push(new a_col_measure(arg_meas, arg_unit)), arg_tbl.rows.push(new a_tbl_row(null, std.U, null)), arg_tbl.nrows += 1;
};

export function tbl_add_row(arg_tbl, arg_meas, arg_unit, arg_rowkind, arg_rowid, arg_extra = null) {
    let rowkind_ptr;
    null == (rowkind_ptr = tbl_find_rowkind(arg_rowkind, arg_tbl.s)) && std.argument_err("section id never defined"), arg_tbl.rowm.push(new a_col_measure(arg_meas, arg_unit)), arg_tbl.rows.push(new a_tbl_row(rowkind_ptr, arg_rowid, arg_extra)), 
    arg_tbl.nrows += 1;
};

export function div_begin(block, gridf = null, grid_tblr = !1, arg_scrollh = !1, arg_scrollv = !1) {
    TRACE_SCROLL && std.logg(str.conv("div_begin {str}, scrh={}, scrv={}, bounds={rect}, scroll={rect}", block.blabel, arg_scrollh, arg_scrollv, block.bounds, block.scrollRect)), block.div = new std.a_div_spec(gridf, grid_tblr, arg_scrollh, arg_scrollv), 
    arg_scrollh ? (block.style.overflowX = "scroll", block.addEventListener("scroll", std.js_scroll)) : block.style.overflowX = "hidden", arg_scrollv ? (block.style.overflowY = "scroll", block.addEventListener("scroll", std.js_scroll)) : block.style.overflowY = "hidden";
};

function order_slices(a, b) {
    return a.draw_order == b.draw_order ? a.box.top < b.box.top ? -1 : a.box.top > b.box.top ? 1 : a.box.left < b.box.left ? -1 : a.box.left > b.box.left ? 1 : 0 : a.draw_order < b.draw_order ? -1 : 1;
}

export function scroll_block_id(targid, posx, posy) {
    let b;
    TRACE_SCROLL && std.logg(">> scroll_block_id"), null != (b = k_find_block_by_id(g_root_block, targid)) ? (TRACE_SCROLL && std.logg(str.conv("scroll_block_id, blabel={str}, id={n}, x={n}, y={n}, scroll={rect}", b.blabel, b.bid, posx, posy, b.scrollRect)), 
    null != b.div ? (TRACE_SCROLL && std.logg("  scrolling a div block"), b.scrollRect = new std.Rectangle(b.bounds.left + posx, b.bounds.top + posy, b.bounds.width, b.bounds.height)) : null != b.tbl ? (TRACE_SCROLL && std.logg("  refreshing a tbl"), 
    tbl_draw(b, 0)) : std.internal_err("block kind not allowed to have scrollbar")) : std.internal_err("content block is missing!");
};

export function slices_compute(parent, is_grid, arg_flags, scrolling, slices, avail, avail2) {
    let i, nal, nslices, tot_aliquots, pixels_per_al, leftover, pixels, tentative, tot_tentative, pos, spillover_h, spillover_v, content_h, content_v, myslice, dname, is_horz = 0 == (arg_flags & DIVF_VERT);
    if (content_h = parent.bounds.width, content_v = parent.bounds.height, 0 != (nslices = slices.length)) {
        for (tot_tentative = 0, tot_aliquots = 0, nal = 0, tentative = new Array(nslices), i = 0; i < nslices; i++) (myslice = slices[i]).unit == std.al ? (nal += 1, tot_aliquots += myslice.mag, tentative[i] = 0) : (pixels = unit_to_pixels(parent, myslice.mag, myslice.unit), 
        tentative[i] = pixels, tot_tentative += pixels);
        if (scrolling) is_horz ? content_h = tot_tentative : content_v = tot_tentative; else {
            if (spillover_h = 0, spillover_v = 0, (leftover = avail - tot_tentative) < 0) {
                let factor = avail / tot_tentative;
                for (i = 0; i < nslices; i++) (myslice = slices[i]).unit != std.al && (tentative[i] *= factor);
            }
            if (leftover > 0) {
                if (0 != nal) for (pixels_per_al = leftover / tot_aliquots, i = 0; i < nslices; i++) (myslice = slices[i]).unit == std.al ? (pixels = myslice.mag * pixels_per_al, tentative[i] = pixels, tot_tentative += pixels) : tot_tentative += tentative[i];
            } else leftover < 0 && (0 == (arg_flags & DIVF_VERT) ? spillover_h = -leftover : spillover_v = -leftover, TRACE_K && std.logg(str.conv("div slice overflow, avail={n}, scroll_limit={n}", avail, -leftover)));
        }
        if (0 == (arg_flags & DIVF_VERT)) for (pos = parent.bounds.left, i = 0; i < nslices; i++) slices[i].box = new std.Rectangle(pos, parent.bounds.top, tentative[i], parent.bounds.height), pos += tentative[i]; else for (pos = parent.bounds.top, 
        i = 0; i < nslices; i++) slices[i].box = new std.Rectangle(parent.bounds.left, pos, parent.bounds.width, tentative[i]), pos += tentative[i];
        if (TRACE_K) for (std.logg("..end slices_compute:"), i = 0; i < nslices; i++) dname = slices[i].id != SKIP_SLICE ? slices[i].drawer.name : "-space-", std.logg(str.conv(" slices[{}] " + dname + ", box={rect}, id={}", i, slices[i].box, slices[i].id));
        slices.sort(order_slices);
    }
    return is_horz ? content_h : content_v;
};

export function draw_grid(b) {
    let rowx, colx, logrow, logcol, cumx, box, div = b.div;
    for (logcol = 1, colx = 0; colx < div.horz_slices.length; colx++) if (div.horz_slices[colx].id != SKIP_SLICE) {
        for (logrow = 1, rowx = 0; rowx < div.vert_slices.length; rowx++) if (div.vert_slices[rowx].id != SKIP_SLICE) {
            box = new std.Rectangle(div.horz_slices[colx].box.left, div.vert_slices[rowx].box.top, div.horz_slices[colx].box.width, div.vert_slices[rowx].box.height), TRACE_GRID && std.logg(str.conv("horz_box={rect}, vert_box={rect}, net={rect}", div.horz_slices[colx].box, div.vert_slices[colx].box, box)), 
            TRACE_GRID && std.logg(str.conv("grid for block {} rowx={}, colx={}, box={rect}", b.blabel, rowx, colx, box));
            let label = div.grid_func.name + "[" + String(logcol) + "," + String(logrow) + "]", myblock = std.new_block(b, box, BKIND_GRID_CELL, label, div.grid_func, b.dest);
            std.setv(M, 0, myblock.extra, std.F_ncells, std.F_x, div.ncols), std.setv(M, 0, myblock.extra, std.F_ncells, std.F_y, div.nrows), std.setv(M, 0, myblock.extra, std.F_cell, std.F_x, logcol), std.setv(M, 0, myblock.extra, std.F_cell, std.F_y, logrow), 
            std.setv(M, 0, myblock.extra, std.F_cell_id, std.F_x, div.horz_slices[colx].id), std.setv(M, 0, myblock.extra, std.F_cell_id, std.F_y, div.vert_slices[rowx].id), cumx = div.grid_tblr ? (logcol - 1) * div.nrows + logrow : (logrow - 1) * div.ncols + logcol, 
            std.setv(M, 0, myblock.extra, std.F_cell_seq, cumx), std.setv(M, 0, myblock.extra, std.F_box, std.F_left, 0), std.setv(M, 0, myblock.extra, std.F_box, std.F_top, 0), std.setv(M, 0, myblock.extra, std.F_box, std.F_width, box.width), 
            std.setv(M, 0, myblock.extra, std.F_box, std.F_height, box.height), std.unfreeze_draw(myblock, div.grid_func), logrow++;
        }
        logcol++;
    }
};

export function draw_slices(b) {
    let child, myslice, i, div = b.div, is_horz = 0 == div.vert_slices.length, slices = is_horz ? div.horz_slices : div.vert_slices, nslices = slices.length;
    for (i = 0; i < nslices; i++) if ((myslice = slices[i]).id != SKIP_SLICE && myslice.box.width > 0 && myslice.box.height > 0) {
        let label = myslice.drawer.name;
        child = std.new_block(b, myslice.box, BKIND_SLICE, label, myslice.drawer), is_horz ? (std.setv(M, 0, child.extra, std.F_cell_id, std.F_x, myslice.id), std.setv(M, 0, child.extra, std.F_cell, std.F_x, i)) : (std.setv(M, 0, child.extra, std.F_cell_id, std.F_y, myslice.id), 
        std.setv(M, 0, child.extra, std.F_cell, std.F_y, i)), std.setv(M, 0, child.extra, std.F_cell_seq, i + 1), std.setv(M, 0, child.extra, std.F_ncells, std.F_x, div.ncols), std.setv(M, 0, child.extra, std.F_ncells, std.F_y, div.nrows), 
        std.unfreeze_draw(child, child.drawer);
    }
};

export function div_end(b) {
    let avail, avail2, div = b.div;
    TRACE_K && std.logg(str.conv("div_end on block {str}, scrh={}, scrv={}, bounds={rect}", b.blabel, div.scrollh, div.scrollv, b.bounds)), div.open || std.argument_err("this block already been closed up"), 
    div.open = !1, avail = b.bounds.width, avail2 = b.bounds.height, div.content_h = slices_compute(b, null != div.grid_func, 0, div.scrollh, div.horz_slices, avail, avail2), avail = b.bounds.height, avail2 = b.bounds.width, 
    div.content_v = slices_compute(b, null != div.grid_func, DIVF_VERT, div.scrollv, div.vert_slices, avail, avail2);
    let ncols = 0, nrows = 0;
    for (let rowx = 0; rowx < div.vert_slices.length; rowx++) -1 != div.vert_slices[rowx].id && (nrows += 1);
    for (let colx = 0; colx < div.horz_slices.length; colx++) -1 != div.horz_slices[colx].id && (ncols += 1);
    div.ncols = Math.max(1, ncols), div.nrows = Math.max(1, nrows), std.setv(M, 0, b.extra, std.F_ncells, std.F_x, div.ncols), std.setv(M, 0, b.extra, std.F_ncells, std.F_y, div.nrows), std.setv(M, 0, b.extra, std.F_boxtot, std.F_width, div.content_h), 
    std.setv(M, 0, b.extra, std.F_boxtot, std.F_height, div.content_v);
};

export function div_spa(block, arg_flags, arg_meas, arg_unit) {
    div_add(block, -1, arg_flags, arg_meas, arg_unit, null);
};

export function div_add(parent, arg_id, arg_flags, arg_meas, arg_unit, arg_func, arg_order = 0, arg_condition = std.Y) {
    if (arg_condition != std.Y) return void div_spa(parent, arg_flags, arg_meas, arg_unit);
    if (TRACE_K && std.logg(str.conv("  div add, meas={n}, unit={n}", arg_meas, arg_unit)), arg_meas <= 0) return;
    let new_slice = new std.a_div_slice();
    if (new_slice.id = arg_id, new_slice.drawer = arg_func, new_slice.draw_order = arg_order, new_slice.unit = arg_unit, arg_meas == std.U) {
        let fake_bounds;
        fake_bounds = 0 == (arg_flags & DIVF_VERT) ? new std.Rectangle(0, 0, std.U, parent.bounds.height) : new std.Rectangle(0, 0, parent.bounds.width, std.U);
        let fake_block = std.new_block(parent, fake_bounds, BKIND_MEASURING, "measuring", arg_func, null, parent.dest);
        fake_block.is_measuring = !0, fake_block.max_h = 0, fake_block.max_v = 0, std.unfreeze_draw(fake_block, fake_block.drawer), 0 == (arg_flags & DIVF_VERT) ? (new_slice.mag = fake_block.max_h, TRACE_AUTO && std.logg(str.conv("-- after measurement, block {} width is {}", arg_func.name, fake_block.max_h))) : (new_slice.mag = fake_block.max_v, 
        TRACE_AUTO && std.logg(str.conv("-- after measurement, block {} height is {}", arg_func.name, fake_block.max_v))), parent.removeChild(fake_block);
    } else new_slice.mag = arg_meas;
    0 == (arg_flags & DIVF_VERT) ? parent.div.horz_slices.push(new_slice) : parent.div.vert_slices.push(new_slice);
};

export function k_overlay(parentb, arg_func) {
    let overlay, label = arg_func.name + ":overlay";
    (overlay = std.new_block(parentb, parentb.bounds, BKIND_OVERLAY, label, arg_func)).dest = parentb.dest, parentb.appendChild(overlay), arg_func.code(overlay);
};

export function is_block_obsolete(block) {
    let dependency, node_seq, drawnseq = block.bseq;
    for (dependency of (TRACE_OBSOLETE && block.blabel == OBBLOCK && std.logg(str.conv("is_block_obsolete block={str}, ndep={}", block.blabel, block.usesz.length)), block.usesz)) {
        TRACE_OBSOLETE && block.blabel == OBBLOCK && std.logg(str.conv("  testing {path}", dependency.path));
        let pathx = std.path_to_pathx(dependency.path);
        if (pathx.exists) {
            if ((node_seq = pathx.lev[pathx.lastx].node.seq) > drawnseq) return TRACE_OBSOLETE && std.logg(str.conv("    -- OBSOLETE, node_seq={n}, drawn_seq={n}", node_seq, drawnseq)), !0;
        } else if (0 != dependency.seq) return TRACE_OBSOLETE && std.logg("   -- OBSOLETE: used to exist, now doesn't exist"), !0;
    }
    return !1;
};

function find_x_in_section(x, sect) {
    let i, dist, closest_dist = 9999999, closest_ix = -1;
    for (i in sect.fields) (dist = std.int_abs(x - sect.fields[i].startdot)) < closest_dist && (closest_dist = dist, closest_ix = i), (dist = std.int_abs(x - (sect.fields[i].stopdot - 1))) < closest_dist && (closest_dist = dist, 
    closest_ix = i);
    return closest_ix;
}

function find_in_rows(y, b, tbl) {
    let rx, dy, row_top, row_bot;
    for (rx in dy = 0, null != b.vert_scroll_link && (dy = -std.getn(b.vert_scroll_link, std.F_s_position)), tbl.rows) if (row_top = tbl.rows[rx].rowbox.top + dy, row_bot = tbl.rows[rx].rowbox.bottom + dy, 
    TRACE_XY && std.logg(str.conv("  find_in_rows, i={}, y={}, top={}, bot={}", rx, y, row_top, row_bot)), y >= row_top && y < row_bot) return rx;
    return -1;
}

function check_for_entry_activation(args) {
    debugger;
}

function find_xy_in_table(b, event, localx, localy) {
    let colx, rowx, colID, rowID, mytbl;
    if (rowx = find_in_rows(localy, b, mytbl = b.tbl), TRACE_XY && std.logg(str.conv("  find_xy_in_table, local=[{n},{n}], rowx={}", localx, localy, rowx)), rowx >= 0 && (rowID = mytbl.rows[rowx].rowid) != std.U) {
        let mykind = mytbl.rows[rowx].rowkind_ptr;
        if (colx = find_x_in_section(localx, mykind), colID = std.U, colx >= 0) {
            if (check_for_entry_activation(b, rowx, colx, event)) return TRACE_XY && std.logg(str.conv("  absorbed by entry activation colx={}, col={}", colx, colID)), !0;
            colID = mykind.fields[colx].colid;
        }
        if (TRACE_XY && std.logg(str.conv("  sending to table tracker, colx={}, colID={n}", colx, colID)), colID != std.U) {
            std.setv(M, 0, b.extra, std.F_cell_id, std.F_x, colID), std.setv(M, 0, b.extra, std.F_cell_id, std.F_y, rowID), std.setv(M, 0, b.extra, std.F_cell, std.F_x, colx + 1), std.setv(M, 0, b.extra, std.F_cell, std.F_y, rowx + 1), 
            std.setv(M, 0, b.extra, std.F_row_kind, mykind.kindID);
            let r = mytbl.rows[rowx].rowbox;
            return std.setv(M, 0, b.extra, std.F_box, std.F_left, r.left), std.setv(M, 0, b.extra, std.F_box, std.F_top, r.top), std.setv(M, 0, b.extra, std.F_box, std.F_width, r.width), std.setv(M, 0, b.extra, std.F_box, std.F_height, r.height), 
            b.trakfunc(b, event);
        }
    }
    return !1;
}

export function callback_find_by_label(b, data) {
    TRACE_XY && std.logg("callback_find_by_label, testing " + b.blabel + ", against " + data.targ_blabel), b.blabel == data.targ_blabel && (data.go = !1, data.found_block = b, TRACE_XY && std.logg("...FOUND"));
};

export function callback_find_any(b, data) {
    let absorbval;
    if (TRACE_XY && std.logg("callback_find_any, block " + b.blabel), null != b.tbl) ; else if (null != b.drawer) {
        let tracker = b.drawer.tracker;
        null != tracker ? (absorbval = null != b.drawer.parms ? tracker.apply(null, [ b, data.event ].concat(b.drawer.parms)) : tracker(b, data.event)) == std.Y ? (data.go = !1, data.absorber = b) : TRACE_XY && std.logg("  event was sent to block, but tracker not absorbed") : TRACE_XY && std.logg("  inside block, no tracking func");
    }
    TRACE_XY && !data.go && std.logg("  CONSUMED ");
};

export function find_xy_in_grid(b, event, localx, localy) {
    let absorbval, colx, rowx, cumx, logcol, logrow, idx, idy, boxt, boxl, boxw, boxh, div = b.div, in_dead_space = !1;
    if (TRACE_XY && std.logg(str.conv("  find_xy_in_grid, local=[{num}, {num}]", localx, localy)), null == b.drawer.tracker) return !1;
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
        logcol = std.U, logrow = std.U, cumx = std.U, idx = std.U, idy = std.U;
    } else cumx = div.grid_tblr ? (logcol - 1) * div.nrows + logrow : (logrow - 1) * div.ncols + logcol;
    return std.setv(M, 0, b.extra, std.F_cell_seq, cumx), std.setv(M, 0, b.extra, std.F_cell, std.F_x, logcol), std.setv(M, 0, b.extra, std.F_cell, std.F_y, logrow), std.setv(M, 0, b.extra, std.F_cell_id, std.F_x, idx), 
    std.setv(M, 0, b.extra, std.F_cell_id, std.F_y, idy), (absorbval = std.unfreeze_track(b, event, b.drawer)) == std.Y && (g_last_majorx > 0 && (std.setv(M, 0, std.runtime, std.F_major_steps, g_last_majorx, std.F_hist_cell_cum, cumx), 
    std.setv(M, 0, std.runtime, std.F_major_steps, g_last_majorx, std.F_hist_cell, std.F_x, logcol), std.setv(M, 0, std.runtime, std.F_major_steps, g_last_majorx, std.F_hist_cell, std.F_y, logrow), std.setv(M, 0, std.runtime, std.F_major_steps, g_last_majorx, std.F_hist_cell_id, std.F_x, idx), 
    std.setv(M, 0, std.runtime, std.F_major_steps, g_last_majorx, std.F_hist_cell_id, std.F_y, idy), std.setv(M, 0, std.runtime, std.F_major_steps, g_last_majorx, std.F_hist_absorber, b.blabel), TRACE_LOGGING && std.logg(str.conv(" -- updating absorber to {}", b.blabel))), 
    !0);
};

export function do_pointer_event(evkind, evtime, wherex, wherey, touch) {
    TRACE_EVENTS && evkind != std.EV_HOVER && std.logg(str.conv("do_pointer_event, xy=[{},{}], kind={}, capture={}", wherex, wherey, evkind, g_capture_bid));
    let event = new a_tree(M, "$do_pointer_event", std.NF_UNSORTED);
    if (std.setv(M, std.WHERE_LOOM, event, std.F_evkind, evkind), std.setv(M, std.WHERE_LOOM, event, std.F_when, evtime), std.setv(M, std.WHERE_LOOM, event, std.F_global_x, wherex), std.setv(M, std.WHERE_LOOM, event, std.F_global_y, wherey), 
    touch.mod_shf && std.setv(M, std.WHERE_LOOM, event, std.F_is_shift, std.Y), touch.mod_alt && std.setv(M, std.WHERE_LOOM, event, std.F_is_alt, std.Y), touch.mod_cmd && std.setv(M, std.WHERE_LOOM, event, std.F_is_cmd, std.Y), 
    touch.mod_ctl && std.setv(M, std.WHERE_LOOM, event, std.F_is_ctrl, std.Y), g_last_majorx = -1, 0 != g_capture_bid) return is_not_ide(g_capture_block) && (TRACE_XY && std.logg(str.conv(" -- adding major event captured ptr evt, first={}", g_capture_block.blabel)), 
    g_last_majorx = std.add_major_event(event, null)), TRACE_XY && std.logg("sending captured event to try_in_block"), try_in_block(g_capture_block, event), void (std.getn(event, std.F_evkind) == std.EV_DRAG_END && release_mouse());
    TRACE_XY && std.logg(str.conv("about to call visit_all, mouse=({n},{n})", wherex, wherey)), evkind == std.EV_HOVER && std.setv(M, 0, std.runtime, std.F_cursor_changed, std.N), visit_all_containing(g_root_block, wherex, wherey, evkind, event), 
    evkind == std.EV_HOVER && std.getn(std.runtime, std.F_cursor_changed) != std.Y && std.cursor_set(std.CURS_ARROW);
};

export function do_key_event(when, unistr, keycode, is_shift = !1, is_alt = !1, is_cmd = !1, is_ctrl = !1) {
    let b;
    if (g_interface_locked == std.Y) return TRACE_EVENTS && std.logg(str.conv("interface locked / suppressing key event, keycode=", keycode)), !1;
    let event = new a_tree(M, "$do_key_event", std.NF_UNSORTED);
    std.setv(M, std.WHERE_LOOM, event, std.F_evkind, std.EV_KEYBOARD), std.setv(M, std.WHERE_LOOM, event, std.F_when, when), std.setv(M, std.WHERE_LOOM, event, std.F_keycode, keycode), "" != unistr && std.setv(M, std.WHERE_LOOM, event, std.F_unicode, unistr), 
    is_shift && std.setv(M, std.WHERE_LOOM, event, std.F_is_shift, std.Y), is_alt && std.setv(M, std.WHERE_LOOM, event, std.F_is_alt, std.Y), is_cmd && std.setv(M, std.WHERE_LOOM, event, std.F_is_cmd, std.Y), 
    is_ctrl && std.setv(M, std.WHERE_LOOM, event, std.F_is_ctrl, std.Y);
    let sx = std.add_major_event(event, null);
    TRACE_LOGGING && std.logg(str.conv(" -- adding major event for key event at {}", sx));
    let data = new Object();
    return data.go = !0, data.event = event, data.absorber = null, k_visit_blocks_bottom_up(g_root_block, callback_find_any, data), null != (b = data.absorber) && (is_not_ide(b) ? (TRACE_LOGGING && std.logg(str.conv("  keystroke was absorbed by {}", b.blabel)), 
    std.setv(M, 0, std.runtime, std.F_major_steps, sx, std.F_hist_absorber, b.blabel)) : (TRACE_LOGGING && std.logg(str.conv("  debugger keystroke, absorbed by {}, deleting {}", b.blabel, sx)), std.clear_tree(0, 0, std.addr(std.runtime, std.F_major_steps, sx))), 
    !0);
};

function try_in_block(b, event) {
    let globalx, globaly;
    TRACE_XY && std.logg(str.conv("  try_in_block {} id={}", b.blabel, b.bid));
    let tracker = null;
    if (null != b.drawer && (tracker = b.drawer.tracker), null != tracker) {
        let local = global_to_local(b, globalx = std.getn(event, std.F_global_x), globaly = std.getn(event, std.F_global_y));
        if (std.setv(M, 0, event, std.F_x, local.x), std.setv(M, 0, event, std.F_y, local.y), TRACE_XY && std.logg(str.conv("try_in_block, {str}, evkind={n}, global=[{n},{n}], local=[{n},{n}], bounds={rect}", b.blabel, std.getn(event, std.F_evkind), globalx, globaly, local.x, local.y, b.bounds)), 
        null != b.tbl) {
            if (find_xy_in_table(b, event, local.x, local.y)) return TRACE_XY && std.logg("  CONSUMED by table"), !0;
            TRACE_XY && std.logg("  NOT CONSUMED by table");
        } else if (null != b.div && null != b.div.grid_func) {
            if (TRACE_XY && std.logg("  grid event to " + b.blabel), find_xy_in_grid(b, event, local.x, local.y)) return TRACE_XY && std.logg("  CONSUMED by grid"), !0;
            TRACE_XY && std.logg("  NOT CONSUMED by grid");
        } else {
            let absorbed;
            if ((absorbed = std.unfreeze_track(b, event, b.drawer)) == std.Y) return TRACE_XY && std.logg("  CONSUMED by block"), g_last_majorx > 0 && (TRACE_LOGGING && std.logg(str.conv(" -- updating absorber to {}", b.blabel)), 
            std.setv(M, 0, std.runtime, std.F_major_steps, g_last_majorx, std.F_hist_absorber, b.blabel)), !0;
            TRACE_XY && std.logg("  NOT CONSUMED by block");
        }
    }
    return !!b.is_modal && (TRACE_XY && std.logg("  MODAL: silent absorption of pointer event"), !0);
}

export function k_visit_blocks_bottom_up(b, callback, data) {
    let child, i, bx, children = b.childNodes, n = children.length;
    for (i = 1; i <= n && data.go; i++) (child = children[bx = n - i]).hasOwnProperty("bid") && (TRACE_VISIT && std.logg(str.conv("  deeper to {str}", child.blabel)), k_visit_blocks_bottom_up(child, callback, data));
    data.go && (TRACE_VISIT && std.logg(str.conv("k_visit_blocks_bottom_up passed to {str}, seq={n}", b.blabel, b.bseq)), callback(b, data));
};

export function k_visit_blocks_top_down(b, callback, data) {
    data.go && (TRACE_OBSOLETE && std.logg(str.conv("k_visit_blocks_top_down {str}, seq={n}", b.blabel, b.bseq)), callback(b, data));
    let child, i, children = b.childNodes, n = children.length;
    for (i = 0; i < n && data.go; i++) (child = children[i]).hasOwnProperty("bid") && (gg_depth += 1, k_visit_blocks_top_down(child, callback, data), gg_depth -= 1);
};

export function k_find_block_by_label(b, label) {
    let result, child, i, children = b.childNodes, n = children.length;
    for (i = 0; i < n; i++) if ((child = children[i]).hasOwnProperty("bid") && null != (result = k_find_block_by_label(child, label))) return result;
    return TRACE_FIND && std.logg(str.conv("k_find_block_by_label, curr={}, targ={}", b.blabel, label)), b.blabel == label ? b : null;
};

export function k_find_block_by_locator(b, targ_label, targ_locater) {
    let result, child, i, children = b.childNodes, n = children.length;
    for (i = 0; i < n; i++) if ((child = children[i]).hasOwnProperty("bid") && null != (result = k_find_block_by_locator(child, targ_label, targ_locater))) return result;
    return TRACE_FINDBX && std.logg(str.conv("testing {str} {n}, targ {str} {n}", b.blabel, b.locator, targ_label, targ_locater)), b.blabel == targ_label && b.locator == targ_locater ? (TRACE_FINDBX && std.logg("  FOUND!"), 
    b) : null;
};

export function k_find_block_by_id(b, targid) {
    let result, child, i, children = b.childNodes, n = children.length;
    for (i = 0; i < n; i++) if ((child = children[i]).hasOwnProperty("bid") && null != (result = k_find_block_by_id(child, targid))) return result;
    return b.bid == targid ? b : null;
};

export function global_to_local(block, globalx, globaly) {
    let cornerx = globalx, cornery = globaly, element = block;
    cornerx -= window.scrollX, cornery -= window.scrollY;
    do {
        cornerx -= element.offsetLeft, cornery -= element.offsetTop, TRACE_GTOL && std.logg(`global_to_local, b=${element.blabel}, sTop=${element.scrollTop}`), cornerx += element.scrollLeft, cornery += element.scrollTop;
        let ss = element.style.transformOrigin;
        if ("" != ss) {
            let list = ss.split(" ");
            list[0].length > 2 && (cornerx -= Number(list[0].substring(0, list[0].length - 2))), list[1].length > 2 && (cornery -= Number(list[1].substring(0, list[1].length - 2)));
        }
        element = element.offsetParent;
    } while (null != element);
    return TRACE_GTOL && std.logg(`.. mapped (${globalx},${globaly}) to (${cornerx},${cornery})`), new std.Point(cornerx, cornery);
};

export function local_to_global_p(block, local = null) {
    let cornerx = 0, cornery = 0, element = block;
    null != local && (cornerx = local.x, cornery = local.y);
    let ss = element.style.transformOrigin;
    if ("" != ss) {
        let list = ss.split(" ");
        list[0].length > 2 && (cornerx += Number(list[0].substring(0, list[0].length - 2))), list[1].length > 2 && (cornery += Number(list[1].substring(0, list[1].length - 2)));
    }
    let bbounds = block.getBoundingClientRect();
    return new std.Point(bbounds.left + window.scrollX + cornerx, bbounds.top + window.scrollY + cornery);
};

export function local_to_global_r(block, local = null) {
    let result, bbounds = block.getBoundingClientRect();
    return result = null == local ? new std.Rectangle(bbounds.left + window.scrollX, bbounds.top + window.scrollY, bbounds.width, bbounds.height) : new std.Rectangle(bbounds.left + window.scrollX + local.left, bbounds.top + window.scrollY + local.top, local.width, local.height);
};

export function k_isolate(parent, bounds, label, drawer) {
    let b = std.new_block(parent, bounds, BKIND_SUBSET, label, drawer);
    std.unfreeze_draw(b, drawer);
};

function visit_all_containing(b, globalx, globaly, evkind, event) {
    let absorbed, gbounds, is_inside_block, not_ide;
    if (gbounds = local_to_global_r(b), is_inside_block = b.blabel == ROOT_BLABEL || std.xy_in_rect(globalx, globaly, gbounds), TRACE_XY && std.logg(str.conv(" testing #{}:{str}, xy=[{},{}], bounds={rect}, gbounds={rect}, inside={}", b.bid, b.blabel, globalx, globaly, b.bounds, gbounds, is_inside_block)), 
    is_inside_block) {
        if (g_last_majorx < 0 && (not_ide = is_not_ide(b))) {
            if (0 == std.g_time_scale) return TRACE_LOGGING && std.logg("--ignoring click while frozen"), !0;
            TRACE_LOGGING && std.logg(str.conv(" -- adding major event for ptr event, first={}", b.blabel)), g_last_majorx = std.add_major_event(event, null);
        }
        let child, i, bx, children = b.childNodes, n = children.length;
        for (i = 1; i <= n; i++) if ((child = children[bx = n - i]).hasOwnProperty("bid")) {
            if (TRACE_XY && std.logg(str.conv("  recursive to child {}: {str}", i, child.blabel)), visit_all_containing(child, globalx, globaly, evkind, event)) return !0;
        } else TRACE_XY && std.logg("child " + String(i) + " is not a block: " + String(child));
        return absorbed = try_in_block(b, event), TRACE_EVENTS && evkind == std.EV_DRAG_BEGIN && std.logg(`>> DRAG_BEGIN, absorbed=${absorbed}`), absorbed && (TRACE_XY && std.logg("    ...absorbed event"), evkind == std.EV_DRAG_BEGIN && 0 == g_capture_bid && capture_mouse(b)), 
        absorbed;
    }
    return !1;
}

export function callback_compare_label(b, data) {
    TRACE_K && std.logg("callback_compare_label, " + b.blabel + " against " + data.label), b.blabel == data.label && (data.result = b, data.go = !1);
};

export function callback_dump(b, data) {
    std.logg(b.blabel + str.conv(": bounds={rect}, depth={}", b.bounds, gg_depth));
};

export function dump_display_list() {
    let data;
    std.logg("=== ALL BLOCKS ==="), gg_depth = 0, k_visit_blocks_top_down(g_root_block, callback_dump, data = {
        go: !0
    }), std.logg("=== ..end blocks.. ===");
};

export function k_del_all_children(b) {
    if (null != b) {
        if (TRACE_OBSOLETE && std.logg("  k_del_all_children, starting at " + b.blabel), b.has_transform) b = b.firstChild.firstChild;
        for (;b.firstChild; ) b.removeChild(b.lastChild);
    }
};

export function k_find_by_label(targlabel) {
    let data;
    return k_visit_blocks_bottom_up(g_root_block, callback_compare_label, data = {
        go: !0,
        label: targlabel,
        result: null
    }), data.result;
};

function is_not_ide(b) {
    if (null == b) return !0;
    for (;null != b; ) {
        if (b == g_root2_block) return !0;
        b = b.parentNode;
    }
    return !1;
}

export function rebuild_affected_blocks(b) {
    let do_children, entry_id;
    if (TRACE_OBSOLETE && b.blabel == OBBLOCK && std.logg(str.conv("rebuild_affected block={str}, id={n}, seq={n}, ndep={}", b.blabel, b.bid, b.bseq, b.usesz.length)), do_children = !0, is_block_obsolete(b) && (TRACE_OBSOLETE && std.logg("  OBSOLETE " + b.blabel), 
    entry_id = document.activeElement.id, LOG_DRAW && g_first_mon_draw && is_not_ide(b) && (g_first_mon_draw = !1, std.add_major_event(DRAW_EVENT, b)), null != b.drawer.parms ? b.drawer.code.apply(null, [ b ].concat(b.drawer.parms)) : b.drawer.code(b), 
    TRACE_OBSOLETE && std.logg(str.conv("  ..end rebuild of {str}, seq={n}", b.blabel, b.bseq)), do_children = !1, "" != entry_id)) {
        var elem = document.getElementById(entry_id);
        null != elem && elem.focus();
    }
    if (do_children) {
        let child, i, children = b.childNodes, n = children.length;
        for (i = 0; i < n; i++) (child = children[i]).hasOwnProperty("bid") && rebuild_affected_blocks(child);
    }
};

export function rebuild_all() {
    var maind, firstx = std.getn(std.runtime, std.F_major_firstx);
    if (firstx == std.U && (firstx = std.getn(std.runtime, std.F_major_stepx), std.setv(M, 0, std.runtime, std.F_major_firstx, firstx)), null != (maind = null != std.aaaa.mon_drawer ? std.aaaa.mon_drawer : std.aaaa.main_drawer)) {
        for (var node = document.body; node.firstChild; ) node.removeChild(node.lastChild);
        let horz = window.innerWidth, vert = window.innerHeight;
        std.setv(M, 0, std.runtime, std.F_window_horz, horz), std.setv(M, 0, std.runtime, std.F_window_vert, vert), TRACE_K && std.logg(`---\x3e rebuild_all: horz=${horz} x ${vert}`);
        let interior = new std.Rectangle(0, 0, horz, vert);
        if (g_root_block = std.new_block(null, interior, BKIND_ROOT, ROOT_BLABEL, maind), document.body.appendChild(g_root_block), null != maind.tracker) {
            let resize_event = new a_tree(M, "$resize_event");
            std.setv(M, 0, resize_event, std.F_evkind, std.EV_RESIZE), std.setv(M, 0, resize_event, std.F_when, 0), LOG_DRAW && std.add_major_event(resize_event, g_root_block), maind.tracker(g_root_block, resize_event);
        }
        LOG_DRAW && std.add_major_event(DRAW_EVENT, g_root_block), maind.code(g_root_block), TRACE_K && dump_display_list();
    }
};

export function check_tree_for_dirty(node) {
    let child, some_dirty;
    for (child of (some_dirty = !1, node.children)) 0 != (child.eflags & std.EF_IS_DERIVED) && (TRACE_OBSOLETE && std.logg(str.conv("  checking child.sub={n}", child.sub)), g_fields_to_mark.indexOf(child.sub) >= 0 && (TRACE_OBSOLETE && std.logg(str.conv("  marking field as dirty {n}", child.sub)), 
    child.eflags |= std.EF_IS_DIRTY, some_dirty = !0)), some_dirty && (node.seq = std.g_currseq), null != child.children && check_tree_for_dirty(child);
};

export function trickle(seconds) {
    let topnode, ff;
    if (null != g_root_block) {
        if (0 != g_fields_to_mark.length) {
            if (TRACE_TRICKLE) for (ff of (std.logg("trickle, checking for marked fields, nmarked=" + String(g_fields_to_mark.length) + ", marked_fields="), g_fields_to_mark)) std.logg(str.conv(" {n}", ff));
            for (topnode of std.TREES) TRACE_TRICKLE && std.logg("trickle, check top node " + topnode.val), check_tree_for_dirty(topnode);
            g_fields_to_mark.length = 0;
        }
        TRACE_TRICKLE && g_last_drawn_seq != std.g_currseq && std.logg(str.conv("trickle, last_drawn={}, currseq={}", g_last_drawn_seq, std.g_currseq)), g_last_drawn_seq < std.g_currseq && (g_first_mon_draw = !0, 
        rebuild_affected_blocks(g_root_block), null != std.aaaa.menubar_func && (g_first_mon_draw = !1, rebuild_affected_blocks(g_menu_block)), g_last_drawn_seq = std.g_currseq, TRACE_TRICKLE && std.logg(str.conv("..end trickle, last_drawn={n}", g_last_drawn_seq)));
    }
};

export function k_init() {
    DRAW_EVENT = new a_tree(M, "$DRAW_EVENT"), std.setv(M, 0, DRAW_EVENT, std.F_evkind, std.EV_DRAW), g_interface_locked = !1, g_capture_bid = 0, g_capture_block = null, g_field_mark_func = {}, g_fields_to_mark = [], 
    g_last_drawn_seq = 1e3;
};