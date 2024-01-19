import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const activeStyle = {
    borderColor: "#2196f3",
};

const acceptStyle = {
    borderColor: "#00e676",
};

const rejectStyle = {
    borderColor: "#ff1744",
};

function DropzoneComponent({ onChange, error, isEdit, image }) {
    const baseStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderWidth: 2,
        borderRadius: 10,
        height: "504px",
        width: "473px",
        borderColor: error ? "#ff1744" : "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#224957",
        color: error ? "#ff1744" : "#bdbdbd",
        transition: "border .3s ease-in-out",
        justifyContent: "center",
    };
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );

        onChange(acceptedFiles[0]);
    }, [onChange]);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        onDrop,
        accept: "image/jpeg, image/png",
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [baseStyle, isDragActive, isDragReject, isDragAccept]
    );

    const thumbs = files.map((file) => (
        <div key={file.name}>
            <img
                width={"100px"}
                height={"100px"}
                style={{ borderRadius: 10 }}
                src={isEdit && files.length ? file.preview : image}
                alt={file.name}
            />
        </div>
    ));

    // clean up
    useEffect(
        () => () => {
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    return (
        <section>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <div>
                    {error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <div>Drag and drop your images here.</div>
                    )}
                </div>
            </div>
            <aside>{thumbs}</aside>
        </section>
    );
}

export default DropzoneComponent;
