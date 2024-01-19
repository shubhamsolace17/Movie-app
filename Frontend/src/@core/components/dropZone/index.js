import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 10,
    height: "504px",
    width: "473px",
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#224957",
    color: "#bdbdbd",
    transition: "border .3s ease-in-out",
    justifyContent: "center",
};

const activeStyle = {
    borderColor: "#2196f3",
};

const acceptStyle = {
    borderColor: "#00e676",
};

const rejectStyle = {
    borderColor: "#ff1744",
};

function DropzoneComponent(props) {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );

        props.onChange(acceptedFiles[0]);
    }, []);

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
        [isDragActive, isDragReject, isDragAccept]
    );

    const thumbs = files.map((file) => (
        <div key={file.name}>
            <img
                width={"100px"}
                height={"100px"}
                style={{ borderRadius: 10 }}
                src={file.preview}
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
                <div>Drag and drop your images here.</div>
            </div>
            <aside>{thumbs}</aside>
        </section>
    );
}

export default DropzoneComponent;
