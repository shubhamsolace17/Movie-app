const ERROR_MESSAGES = {
    INVALID_WORK_EMAIL: " invalid work email",
    EMAIL_ALREADY_THERE: "An account with the given email already exists.",
    RECENTLY_USED_PASSWORD_ERROR:
        "Please choose a password that you haven't used before.",
    INVALID_PERSON_PROFILE: "Person Profile is Invalid.",
    USER_NOT_FOUND: "USER NOT FOUND",
    INVALID_ROLE: "INVALID ROLE",
    USER_ACTIVATE_ERROR: "Problem in activating a user.",
    INVALID_CSRF_TOKEN: "invalid csrf token",
    ADD_ROLE_ERROR: "Error in setting role",
    ROLES_NOT_FOUND: "ROLES NOT FOUND",
    DUPLICATE_KEY_ERROR: "Duplicate Entry",
    REQUEST_PERMISSION_NOT_FOUND: "REQUEST PERMISSION NOT FOUND",
    INVALID_FILE_FORMAT: "Invalid filetype",
    COMMON_ERROR_MESSAGE: "Something went wrong.",
    INVALID_REQUEST: "Invalid Request",
    INVALID_ACCESS_ERROR: "Invalid Access",
    INVALID_DATE: '"Date" value/format is invalid',
    INVALID_URL: "URL is invalid",
};

const INFO_MESSAGES = {
    PERSON_ALREADY_ACTIVATED: "Person is already activated.",
    RESOURCE_IS_EDITABLE: "RESOURCE_IS_EDITABLE",
    T_C_ACCEPTED: "Term & Conditions Accepted",
    PW_SET_SUCCESS: "Password set successfully.",
};

const SIGNUP_METHODS = {
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    LINKEDIN: 'linkedIn',
    APPLE: 'apple',
    EMAIL: 'email'
}

const OBJECTID_REGEX = /^[a-f\d]{24}$/i; // more strict: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
const PHONE_REGEX = /^(\+)(\d)+$/; // based on AWS phone validation policy
const DATE_REGEX =
    /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].(\d{3})Z/; // ISO format
const DDMMYYYY_REGEX = new RegExp(
    /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
); // DD/MM/YYYY
const URL_REGEX =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
const VALIDATE_STRING_REGEX = /^[^\\+\\=@\\-]/;

const VALID_FILE_EXTENSIONS = [
    "bmp",
    "jpg",
    "jpeg",
    "png",
    "tif",
    "tiff",
    "pdf",
    "doc",
    "docx",
    "xlsx",
    "xls",
    "pptx",
    "ppt",
    "mp4",
    "msg",
    "webp",
    "json",
];

const STATUS_CODES = {
    // INFORMATIONAL CODES
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    // SUCCESS CODES
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-status",
    208: "Already Reported",
    // REDIRECTION CODES
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    306: "Switch Proxy", // Deprecated
    307: "Temporary Redirect",
    // CLIENT ERROR
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Time-out",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Large",
    415: "Unsupported Media Type",
    416: "Requested range not satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Unordered Collection",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    // SERVER ERROR
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Time-out",
    505: "HTTP Version not supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    511: "Network Authentication Required",
};

const GENDER = [
    "Male",
    "Female",
    "Non-Binary",
    "Transgender",
    "Prefer not to respond",
];

const API_OPERATIONS = {
    CREATE: "CREATE",
    LIST: "LIST",
    GET: "GET",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
};

module.exports = {
    ERROR_MESSAGES,
    API_OPERATIONS,
    STATUS_CODES,
    VALID_FILE_EXTENSIONS,
    VALIDATE_STRING_REGEX,
    URL_REGEX,
    DDMMYYYY_REGEX,
    DATE_REGEX,
    PHONE_REGEX,
    OBJECTID_REGEX,
    INFO_MESSAGES,
    GENDER,
    SIGNUP_METHODS,
};
