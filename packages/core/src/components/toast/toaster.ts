/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Position } from "../../common";
import { ToastProps } from "./toast";

export type ToastOptions = ToastProps & { key: string };
export type ToasterPosition =
    | typeof Position.TOP
    | typeof Position.TOP_LEFT
    | typeof Position.TOP_RIGHT
    | typeof Position.BOTTOM
    | typeof Position.BOTTOM_LEFT
    | typeof Position.BOTTOM_RIGHT;

/** Instance methods available on a toaster component instance. */
export interface Toaster {
    /**
     * Shows a new toast to the user, or updates an existing toast corresponding to the provided key (optional).
     *
     * Returns the unique key of the toast.
     */
    show(props: ToastProps, key?: string): string;

    /** Dismiss the given toast instantly. */
    dismiss(key: string): void;

    /** Dismiss all toasts instantly. */
    clear(): void;

    /** Returns the props for all current toasts. */
    getToasts(): ToastOptions[];
}

/** @deprecated use `Toaster` type instead */
export type ToasterInstance = Toaster;