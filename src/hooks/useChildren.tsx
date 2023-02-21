import React, {useMemo} from "react";

export const useChildren = (children: React.ReactNode, dependencies: any[]) => {
    return useMemo(() => children, dependencies);
}