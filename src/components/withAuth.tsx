import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { LoadingSpinner } from './Loading';

const withAuth = (WrappedComponent: React.FC) => {
    const WithAuthComponent: React.FC<any> = (props) => {
        const router = useRouter();
        const { isAuthenticated, loading } = useAuth();

        useEffect(() => {
            if (!loading && !isAuthenticated) {
                router.push('/login');
            }
        }, [isAuthenticated, loading, router]);

        if (loading) {
            return <LoadingSpinner isLoading={false} />;
        }

        // If user is authenticated, render the wrapped component
        return <WrappedComponent {...props} />;
    };
    WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

    return WithAuthComponent;
};

export default withAuth;
