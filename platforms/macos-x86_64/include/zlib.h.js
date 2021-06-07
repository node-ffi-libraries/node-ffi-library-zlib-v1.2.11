/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.1
 * - git commit v2.0.1-1-g9e27804 on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "zlib.h"
 * - SHA256: 4ddc82b4af931ab55f44d977bde81bfbc4151b5dcdccc03142831a301b5ec3c8
 *
 * Generator options:
 * - Library: null
 * - Single file: true
 * - Prefixes: []
 * - Compiler arguments: []
 */

const FFI = require("ffi-napi");
const ref = require("ref-napi");
const ArrayType = require("ref-array-di")(ref);
const Struct = require("ref-struct-di")(ref);
const Union = require("ref-union-di")(ref);

const constants = {};

// NOTE: defining individual types as "global" constants to be able to reference them without any prefix, but also under the "types" object to be able to reference them recursively.
const types = {};

const js_CString = ref.types.CString;
const js_int32 = ref.types.int32;
const js_uchar = ref.types.uchar;
const Byte = js_uchar;
const Bytef = Byte;
const BytefPointer = ref.refType(Bytef);
const js_uint32 = ref.types.uint32;
const uInt = js_uint32;
const js_ulong = ref.types.ulong;
const uLong = js_ulong;
const js_void = ref.types.void;
const js_voidPointer = ref.refType(js_void);
const internal_state = js_voidPointer;
const alloc_func = FFI.Function(ref.refType(js_void), [
  js_voidPointer,
  js_uint32,
  js_uint32,
]);
const free_func = FFI.Function(ref.types.void, [
  js_voidPointer,
  js_voidPointer,
]);
const voidpf = js_voidPointer;
const z_stream_s = Struct({
  next_in: BytefPointer,
  avail_in: uInt,
  total_in: uLong,
  next_out: BytefPointer,
  avail_out: uInt,
  total_out: uLong,
  msg: js_CString,
  state: internal_state,
  zalloc: alloc_func,
  zfree: free_func,
  opaque: voidpf,
  data_type: js_int32,
  adler: uLong,
  reserved: uLong,
});
const z_stream = z_stream_s;
const z_streamPointer = ref.refType(z_stream);
const z_streamp = z_streamPointer;
const uIntPointer = ref.refType(uInt);
const js_uint32Pointer = ref.refType(js_uint32);
const js_int32Pointer = ref.refType(js_int32);
const gz_header_s = Struct({
  text: js_int32,
  time: uLong,
  xflags: js_int32,
  os: js_int32,
  extra: BytefPointer,
  extra_len: uInt,
  extra_max: uInt,
  name: BytefPointer,
  name_max: uInt,
  comment: BytefPointer,
  comm_max: uInt,
  hcrc: js_int32,
  done: js_int32,
});
const gz_header = gz_header_s;
const gz_headerPointer = ref.refType(gz_header);
const gz_headerp = gz_headerPointer;
const js_long = ref.types.long;
const js_ucharPointer = ref.refType(js_uchar);
const in_func = FFI.Function(ref.types.uint32, [
  js_voidPointer,
  js_ucharPointer,
]);
const out_func = FFI.Function(ref.types.int32, [
  js_voidPointer,
  js_ucharPointer,
  js_uint32,
]);
const uLongf = uLong;
const uLongfPointer = ref.refType(uLongf);
const uLongPointer = ref.refType(uLong);
const gzFile_s = js_voidPointer;
const gzFile = gzFile_s;
const voidp = js_voidPointer;
const size_t = js_ulong;
const z_size_t = size_t;
const voidpc = js_voidPointer;
const __off_t = js_long;
const off_t = __off_t;
const z_crc_t = js_uint32;
const z_crc_tPointer = ref.refType(z_crc_t);
const __va_list_tag = Struct({
  gp_offset: js_uint32,
  fp_offset: js_uint32,
  overflow_arg_area: js_voidPointer,
  reg_save_area: js_voidPointer,
});
const __va_list_tag_array_1 = ArrayType(__va_list_tag, 1);
const __builtin_va_list = __va_list_tag_array_1;
const va_list = __builtin_va_list;

types["Byte"] = Byte;
types["Bytef"] = Bytef;
types["BytefPointer"] = BytefPointer;
types["__builtin_va_list"] = __builtin_va_list;
types["__off_t"] = __off_t;
types["__va_list_tag"] = __va_list_tag;
types["__va_list_tag_array_1"] = __va_list_tag_array_1;
types["alloc_func"] = alloc_func;
types["free_func"] = free_func;
types["gzFile"] = gzFile;
types["gzFile_s"] = gzFile_s;
types["gz_header"] = gz_header;
types["gz_headerPointer"] = gz_headerPointer;
types["gz_header_s"] = gz_header_s;
types["gz_headerp"] = gz_headerp;
types["in_func"] = in_func;
types["internal_state"] = internal_state;
types["js_CString"] = js_CString;
types["js_int32"] = js_int32;
types["js_int32Pointer"] = js_int32Pointer;
types["js_long"] = js_long;
types["js_uchar"] = js_uchar;
types["js_ucharPointer"] = js_ucharPointer;
types["js_uint32"] = js_uint32;
types["js_uint32Pointer"] = js_uint32Pointer;
types["js_ulong"] = js_ulong;
types["js_void"] = js_void;
types["js_voidPointer"] = js_voidPointer;
types["off_t"] = off_t;
types["out_func"] = out_func;
types["size_t"] = size_t;
types["uInt"] = uInt;
types["uIntPointer"] = uIntPointer;
types["uLong"] = uLong;
types["uLongPointer"] = uLongPointer;
types["uLongf"] = uLongf;
types["uLongfPointer"] = uLongfPointer;
types["va_list"] = va_list;
types["voidp"] = voidp;
types["voidpc"] = voidpc;
types["voidpf"] = voidpf;
types["z_crc_t"] = z_crc_t;
types["z_crc_tPointer"] = z_crc_tPointer;
types["z_size_t"] = z_size_t;
types["z_stream"] = z_stream;
types["z_streamPointer"] = z_streamPointer;
types["z_stream_s"] = z_stream_s;
types["z_streamp"] = z_streamp;

const functions = new FFI.Library(null, {
  adler32: [uLong, [uLong, BytefPointer, uInt]],
  adler32_combine: [uLong, [uLong, uLong, off_t]],
  adler32_z: [uLong, [uLong, BytefPointer, z_size_t]],
  compress: [js_int32, [BytefPointer, uLongfPointer, BytefPointer, uLong]],
  compress2: [
    js_int32,
    [BytefPointer, uLongfPointer, BytefPointer, uLong, js_int32],
  ],
  compressBound: [uLong, [uLong]],
  crc32: [uLong, [uLong, BytefPointer, uInt]],
  crc32_combine: [uLong, [uLong, uLong, off_t]],
  crc32_z: [uLong, [uLong, BytefPointer, z_size_t]],
  deflate: [js_int32, [z_streamp, js_int32]],
  deflateBound: [uLong, [z_streamp, uLong]],
  deflateCopy: [js_int32, [z_streamp, z_streamp]],
  deflateEnd: [js_int32, [z_streamp]],
  deflateGetDictionary: [js_int32, [z_streamp, BytefPointer, uIntPointer]],
  deflateInit2_: [
    js_int32,
    [
      z_streamp,
      js_int32,
      js_int32,
      js_int32,
      js_int32,
      js_int32,
      js_CString,
      js_int32,
    ],
  ],
  deflateInit_: [js_int32, [z_streamp, js_int32, js_CString, js_int32]],
  deflateParams: [js_int32, [z_streamp, js_int32, js_int32]],
  deflatePending: [js_int32, [z_streamp, js_uint32Pointer, js_int32Pointer]],
  deflatePrime: [js_int32, [z_streamp, js_int32, js_int32]],
  deflateReset: [js_int32, [z_streamp]],
  deflateResetKeep: [js_int32, [z_streamp]],
  deflateSetDictionary: [js_int32, [z_streamp, BytefPointer, uInt]],
  deflateSetHeader: [js_int32, [z_streamp, gz_headerp]],
  deflateTune: [js_int32, [z_streamp, js_int32, js_int32, js_int32, js_int32]],
  get_crc_table: [z_crc_tPointer, []],
  gzbuffer: [js_int32, [gzFile, js_uint32]],
  gzclearerr: [js_void, [gzFile]],
  gzclose: [js_int32, [gzFile]],
  gzclose_r: [js_int32, [gzFile]],
  gzclose_w: [js_int32, [gzFile]],
  gzdirect: [js_int32, [gzFile]],
  gzdopen: [gzFile, [js_int32, js_CString]],
  gzeof: [js_int32, [gzFile]],
  gzerror: [js_CString, [gzFile, js_int32Pointer]],
  gzflush: [js_int32, [gzFile, js_int32]],
  gzfread: [z_size_t, [voidp, z_size_t, z_size_t, gzFile]],
  gzfwrite: [z_size_t, [voidpc, z_size_t, z_size_t, gzFile]],
  gzgetc: [js_int32, [gzFile]],
  gzgetc_: [js_int32, [gzFile]],
  gzgets: [js_CString, [gzFile, js_CString, js_int32]],
  gzoffset: [off_t, [gzFile]],
  gzopen: [gzFile, [js_CString, js_CString]],
  gzprintf: [js_int32, [gzFile, js_CString]],
  gzputc: [js_int32, [gzFile, js_int32]],
  gzputs: [js_int32, [gzFile, js_CString]],
  gzread: [js_int32, [gzFile, voidp, js_uint32]],
  gzrewind: [js_int32, [gzFile]],
  gzseek: [off_t, [gzFile, off_t, js_int32]],
  gzsetparams: [js_int32, [gzFile, js_int32, js_int32]],
  gztell: [off_t, [gzFile]],
  gzungetc: [js_int32, [js_int32, gzFile]],
  gzvprintf: [js_int32, [gzFile, js_CString, va_list]],
  gzwrite: [js_int32, [gzFile, voidpc, js_uint32]],
  inflate: [js_int32, [z_streamp, js_int32]],
  inflateBack: [
    js_int32,
    [z_streamp, in_func, js_voidPointer, out_func, js_voidPointer],
  ],
  inflateBackEnd: [js_int32, [z_streamp]],
  inflateBackInit_: [
    js_int32,
    [z_streamp, js_int32, js_ucharPointer, js_CString, js_int32],
  ],
  inflateCodesUsed: [js_ulong, [z_streamp]],
  inflateCopy: [js_int32, [z_streamp, z_streamp]],
  inflateEnd: [js_int32, [z_streamp]],
  inflateGetDictionary: [js_int32, [z_streamp, BytefPointer, uIntPointer]],
  inflateGetHeader: [js_int32, [z_streamp, gz_headerp]],
  inflateInit2_: [js_int32, [z_streamp, js_int32, js_CString, js_int32]],
  inflateInit_: [js_int32, [z_streamp, js_CString, js_int32]],
  inflateMark: [js_long, [z_streamp]],
  inflatePrime: [js_int32, [z_streamp, js_int32, js_int32]],
  inflateReset: [js_int32, [z_streamp]],
  inflateReset2: [js_int32, [z_streamp, js_int32]],
  inflateResetKeep: [js_int32, [z_streamp]],
  inflateSetDictionary: [js_int32, [z_streamp, BytefPointer, uInt]],
  inflateSync: [js_int32, [z_streamp]],
  inflateSyncPoint: [js_int32, [z_streamp]],
  inflateUndermine: [js_int32, [z_streamp, js_int32]],
  inflateValidate: [js_int32, [z_streamp, js_int32]],
  uncompress: [js_int32, [BytefPointer, uLongfPointer, BytefPointer, uLong]],
  uncompress2: [
    js_int32,
    [BytefPointer, uLongfPointer, BytefPointer, uLongPointer],
  ],
  zError: [js_CString, [js_int32]],
  zlibCompileFlags: [uLong, []],
  zlibVersion: [js_CString, []],
});

module.exports = {
  constants,
  types,
  functions,
};
