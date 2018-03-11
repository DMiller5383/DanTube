<div>
    <div className="row">
        <div className="col-4">
            <AppTitle appTitle="DanTube" />
        </div>
        <div className="col-8">
            <VideoSearchBox isMobile={isMobile}/>
        </div>
    </div>
    <VideoCategoryList categories={categories} />
    <VideoList videos={videos} />
</div>