import {container, InjectionToken} from "tsyringe";

export function useDi<T>(injectToken: InjectionToken<T>) {
    return container.resolve<T>(injectToken);
}